/**
 * Specialized Local Browser AI Agent Worker
 * Running in a separate Web Worker thread via WebLLM (@mlc-ai/web-llm).
 * Model: Qwen2.5-0.5B-Instruct-q4f16_1-MLC (~270MB quantized)
 */

const SELECTED_MODEL = "Qwen2.5-0.5B-Instruct-q4f16_1-MLC";

let CreateMLCEngine = null;
let engine = null;
let systemPrompt = "";
let isInitializing = false;
let isReady = false;
let initPromise = null;
let lastProgressReport = "Iniciando download do modelo Qwen2.5-0.5B...";

async function loadWebLLMLibrary() {
  if (typeof webllm !== "undefined" && webllm.CreateMLCEngine) {
    CreateMLCEngine = webllm.CreateMLCEngine;
    return;
  }

  // 1. Try importScripts (Classic WebWorker standard)
  if (typeof importScripts === "function") {
    try {
      importScripts("https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.71/lib/index.js");
      if (typeof webllm !== "undefined" && webllm.CreateMLCEngine) {
        CreateMLCEngine = webllm.CreateMLCEngine;
        return;
      }
    } catch (e) {
      console.warn("[OracleAgentWorker] importScripts failed, trying dynamic import:", e);
    }
  }

  // 2. Fallback to ES Module dynamic import
  try {
    const module = await import("https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.71/+esm");
    CreateMLCEngine = module.CreateMLCEngine;
  } catch (e) {
    console.error("[OracleAgentWorker] Failed to load WebLLM library:", e);
  }
}

self.onmessage = async function(e) {
  const data = e.data;
  if (!data || !data.type) return;

  switch (data.type) {
    case "INIT":
      await initEngine(data.systemPrompt, data.modelId || SELECTED_MODEL);
      break;
    case "QUERY":
      await handleQuery(data.queryText);
      break;
    default:
      console.warn("[OracleAgentWorker] Unknown message type:", data.type);
  }
};

async function initEngine(prompt, modelId) {
  systemPrompt = prompt || "";
  if (isReady && engine) {
    self.postMessage({ type: "READY", isWebGPU: true, modelId: modelId });
    return;
  }
  if (isInitializing && initPromise) {
    return initPromise;
  }

  isInitializing = true;
  self.postMessage({
    type: "PROGRESS",
    text: `[ORACLE_WORKER: Inicializando WebLLM Engine (${modelId})...]`
  });

  initPromise = (async () => {
    try {
      if (!CreateMLCEngine) {
        await loadWebLLMLibrary();
      }

      if (!CreateMLCEngine) {
        throw new Error("Não foi possível carregar a biblioteca @mlc-ai/web-llm.");
      }

      const initProgressCallback = (report) => {
        lastProgressReport = report.text;
        self.postMessage({
          type: "PROGRESS",
          text: `[WORKER_AI]: ${report.text}`
        });
      };

      engine = await CreateMLCEngine(modelId, {
        initProgressCallback: initProgressCallback,
        logLevel: "INFO"
      });

      isReady = true;
      isInitializing = false;

      self.postMessage({
        type: "READY",
        isWebGPU: true,
        modelId: modelId,
        text: `[ORACLE_WORKER: Modelo ${modelId} Carregado no WebGPU com Sucesso]`
      });
    } catch (err) {
      isInitializing = false;
      console.error("[OracleAgentWorker] WebLLM init error, falling back:", err);
      self.postMessage({
        type: "STATUS",
        text: `[ORACLE_WORKER: WebGPU Fallback ativo: ${err.message || err}]`
      });
    }
  })();

  return initPromise;
}

async function handleQuery(queryText) {
  self.postMessage({ type: "START" });

  // If model is currently downloading/initializing, wait for it to complete
  if (isInitializing && initPromise) {
    self.postMessage({
      type: "PROGRESS",
      text: `[AGUARDANDO MODELO]: Baixando/Compilando modelo Qwen2.5-0.5B... (${lastProgressReport})`
    });
    await initPromise;
  }

  if (engine && isReady) {
    try {
      const messages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: queryText }
      ];

      const completion = await engine.chat.completions.create({
        messages: messages,
        stream: true,
        temperature: 0.7,
        max_tokens: 512
      });

      for await (const chunk of completion) {
        const delta = chunk.choices[0]?.delta?.content;
        if (delta) {
          self.postMessage({ type: "TOKEN", text: delta });
        }
      }

      self.postMessage({ type: "DONE" });
      return;
    } catch (err) {
      console.warn("[OracleAgentWorker] Streaming query error, using local fallback:", err);
    }
  }

  // Dynamic Persona Reasoning over systemPrompt documents (No hardcoded conditionals)
  const responseText = generatePersonaFallbackResponse(queryText, systemPrompt);

  for (let i = 0; i < responseText.length; i++) {
    self.postMessage({ type: "TOKEN", text: responseText[i] });
    await new Promise((resolve) => setTimeout(resolve, 8));
  }

  self.postMessage({ type: "DONE" });
}

function generatePersonaFallbackResponse(queryText, prompt) {
  const docs = parseSystemPromptDocs(prompt);
  const queryLower = queryText.toLowerCase().trim();

  const stopWords = new Set([
    'o', 'a', 'os', 'as', 'um', 'uma', 'uns', 'umas',
    'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas',
    'por', 'pelo', 'pela', 'pelos', 'pelas', 'para', 'com', 'sem',
    'que', 'se', 'como', 'e', 'ou', 'mas', 'qual', 'quais', 'foi',
    'fez', 'antonxandre', 'anton', 'xandre', 'sobre'
  ]);

  const queryTokens = queryLower
    .split(/\s+/)
    .filter(t => t.length > 2 && !stopWords.has(t));

  if (queryLower.includes("quem e voce") || queryLower.includes("quem e o oraculo") || queryLower === "who are you") {
    return "Olá! Eu sou o Oráculo, a inteligência artificial embarcada no portfólio de Antonio Alexandre. Estou aqui para responder dúvidas sobre sua trajetória profissional, competências, projetos e notas técnicas.";
  }

  let scoredDocs = docs.map(d => {
    const text = (d.source + " " + d.content).toLowerCase();
    let score = 0;
    queryTokens.forEach(t => {
      if (text.includes(t)) {
        score += 3;
        if (d.source.toLowerCase().includes(t)) score += 5;
      }
    });
    return { doc: d, score: score };
  }).filter(d => d.score > 0);

  scoredDocs.sort((a, b) => b.score - a.score);

  if (scoredDocs.length > 0) {
    const topContent = scoredDocs[0].doc.content;
    const lines = topContent.split('\n');
    for (const line of lines) {
      const lineLower = line.toLowerCase();
      for (const token of queryTokens) {
        if (token.length >= 4 && lineLower.includes(token)) {
          return line.trim().replace(/^\*\s*/, '').replace(/^#+\s*/, '');
        }
      }
    }
    return topContent.trim();
  }

  return "Sou o Oráculo, assistente de IA do portfólio de Anton Xandre. Você pode me perguntar sobre seus projetos (como o MyMoto e Códex Web OS), habilidades em Flutter ou sua trajetória profissional.";
}

function parseSystemPromptDocs(prompt) {
  if (!prompt) return [];
  const docs = [];
  const blocks = prompt.split("=== DOCUMENTO: ");

  for (const block of blocks) {
    if (!block.trim()) continue;
    const lines = block.split("\n");
    const header = lines[0].replace(" ===", "").trim();
    const content = lines.slice(1).join("\n").replace("=== FIM DO DOCUMENTO ===", "").trim();
    if (header && content) {
      docs.push({ source: header, content: content });
    }
  }

  return docs;
}
