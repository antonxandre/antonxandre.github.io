# ▓▓▓ STATUS DO PROJETO — CÓDEX DE LUZ ETÉREA ▓▓▓
### `antonxandre@codex:~$ cat docs/STATUS.md`

```text
+------------------------------------------------------------------+
| PROJETO : Códex de Luz Etérea                                    |
| VERSÃO  : 0.1.0+1                                                |
| SDK     : Dart ^3.12.0  |  Flutter (stable)                      |
| DATA    : 2026-07-19                                             |
| STATUS  : [ INICIALIZAÇÃO ]                                      |
+------------------------------------------------------------------+
```

---

## ESTADO ATUAL

```text
+------+---------------------------------------+------------+--------+
| FASE | FEATURE                               | STATUS     |  PROG  |
|======|=======================================|============|========|
|  1   | Estrutura base do projeto Flutter     | [DONE]     | ██████ |
|  2   | Design System (CodexTheme / Colors)   | [DONE]     | ██████ |
|  3   | Boot Sequence + Cursor Destruidor     | [DONE]     | ██████ |
|  4   | Layout tmux (NERDTree + Painel)       | [DONE]     | ██████ |
|  5   | Navegação por teclado (j/k/Enter)     | [DONE]     | ██████ |
|  6   | PSX Pulse nos containers de skill     | [DONE]     | ██████ |
|  7   | RAG Pipeline (langchain_dart + OBox)  | [DONE]     | ██████ |
|  8   | Oracle Modal + Stream typewriter      | [DONE]     | ██████ |
|  9   | MELHORAR ORACULO                      | [ QUEUE ]  | ------ |
+------+---------------------------------------+------------+--------+
```

**Progresso geral:** `████████-- 80%`

---

## DEPENDÊNCIAS

### Instaladas

| Pacote | Versão | Finalidade |
|--------|--------|------------|
| `flutter` | SDK | Framework principal |
| `flutter_test` | SDK | Testes unitários e de widget |
| `flutter_lints` | ^6.0.0 | Análise estática |

### Pendentes (a adicionar no `pubspec.yaml`)

| Pacote | Versão Alvo | Finalidade |
|--------|-------------|------------|
| `flutter_bloc` | ^9.x | Gerenciamento de estado |
| `equatable` | ^2.x | Comparação de estados BLoC |
| `go_router` | ^14.x | Navegação e deep linking Web |
| `google_fonts` | ^6.x | JetBrains Mono / IBM Plex Mono |
| `flutter_animate` | ^4.x | Animações declarativas |
| `langchain_dart` | ^0.7.x | Pipeline RAG / LLM |
| `objectbox` | ^4.x | Vector store local (embeddings) |
| `flutter_markdown` | ^0.7.x | Render de SKILL.md no painel direito |

---

## ESTRUTURA ATUAL

```text
antonxandre@codex:~$ tree
.
+-- lib/
|   +-- main.dart              ← ponto de entrada padrão (a ser refatorado)
+-- docs/
|   +-- STATUS.md              ← este arquivo
+-- pubspec.yaml
+-- README.md                  ← placeholder padrão Flutter
+-- analysis_options.yaml
```

> **Próximo passo:** Refatorar `lib/` para a arquitetura Feature-First definida no blueprint e adicionar o `Design System` (`CodexTheme`, `CodexColors`).

---

## LOG DE ALTERAÇÕES

```text
+------------+--------+---------------------------------------------------+
| DATA       | VERSÃO | DESCRIÇÃO                                         |
|============|========|===================================================|
| 2026-07-19 | 0.1.0  | Projeto Flutter inicializado                      |
| 2026-07-19 | 0.1.0  | Blueprint "Códex de Luz Etérea" definido          |
| 2026-07-19 | 0.1.0  | docs/STATUS.md criado                             |
| 2026-07-19 | 0.1.0  | Design System (Fase 2) implementado               |
| 2026-07-19 | 0.1.0  | Boot Sequence + Cursor Destruidor (Fase 3) imp.   |
| 2026-07-19 | 0.1.0  | Layout tmux (Fase 4) implementado                 |
| 2026-07-19 | 0.1.0  | Navegação por teclado (Fase 5) implementada       |
| 2026-07-19 | 0.1.0  | PSX Pulse e Bento Grid (Fase 6) implementados     |
| 2026-07-19 | 0.1.0  | RAG Pipeline (Fase 7) implementado                |
| 2026-07-19 | 0.1.0  | Oracle Modal e streaming (Fase 8) implementados   |
+------------+--------+---------------------------------------------------+
```

---

```text
+------------------------------------------------------------------+
|   [RAG] Vector index: NOT LOADED                                 |
|   [DB]  ObjectBox: NOT INITIALIZED                               |
|   [UI]  Boot Sequence: NOT BUILT                                 |
|                                                                  |
|   antonxandre@codex:~$ █                                         |
+------------------------------------------------------------------+
```
