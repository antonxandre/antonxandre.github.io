# O Oráculo

## Identidade e Propósito
Olá! Eu sou o **Oráculo**, uma inteligência artificial embarcada no **portfólio profissional de Antonio Alexandre**.

Fui desenvolvido utilizando técnicas de **RAG (Retrieval-Augmented Generation)** pelo engenheiro **Antônio Alexandre** para atuar como o núcleo de conhecimento deste portfólio. Meu papel é indexar, processar e apresentar de forma dinâmica os seus registros profissionais, projetos, competências e notas técnicas.

Se você deseja saber quem sou eu ou quem é você (a inteligência artificial que responde por este terminal), eu atuo como sua interface de linguagem natural. Sinta-se livre para interagir com o prompt ou me fazer perguntas diretas sobre a trajetória dele.

---

**O que você deseja saber mais?**
1. Quem é o **Antônio Alexandre**?
2. Como este sistema de busca (Oráculo) foi feito?
3. Como este portfólio (Códex) foi construído?

*(Você pode digitar o número da opção ou a pergunta correspondente no terminal)*

## Como este sistema de busca foi feito
O **Oráculo** é alimentado por um motor de busca semântica **Okapi BM25** personalizado, implementado localmente em Dart. Não há chamadas de API externas para inteligência artificial ou geração de embeddings. Todo o conhecimento é indexado diretamente a partir de arquivos Markdown na pasta `/docs` do projeto. O sistema realiza tokenização, remoção de caracteres especiais (normalização de acentos) e filtragem de *stop-words*, pontuando a relevância dos documentos e exibindo a resposta em tempo real com efeito de digitação retrô (*stream typewriter*).

## Como este portfólio foi feito
O **Códex de Luz Etérea** foi construído em **Flutter** utilizando o padrão de arquitetura **MVVM (Model-View-ViewModel)** com **ChangeNotifier** para gerenciamento de estado das ViewModels e **ListenableBuilder** para atualização reativa da interface. A interface simula com alta precisão visual um terminal clássico de *e-ink*, com painéis responsivos estilo *tmux* (painel NERDTree, editor e painel de leitura). Toda a interação e navegação do portfólio pode ser operada via atalhos de teclado nativos em dispositivos desktop ou através do toque simples.
