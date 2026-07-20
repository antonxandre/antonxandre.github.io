# Agent Workspace Rules

These guidelines apply to the agent working in this workspace.

## Incremental Git Checkpoints
- When working on tasks, the agent should proactively consider creating Git commit checkpoints to save progressive work.
- Checkpoints are highly recommended before embarking on large changes, after completing a subtask, or after fixing a bug.
- When committing, the agent MUST use the [git-checkpoint](skills/git-checkpoint/SKILL.md) skill. Follow the workflow defined there for checking diffs, staging relevant files, and writing conventional commit messages.
- Always check that you do not commit temporary files, keys/secrets, or build outputs.

## Relative Directory References
- All directory and file references, paths, and imports pointing to folders within the workspace must be relative (e.g., `./src/foo` or `../bar`) rather than absolute paths.
- For detailed guidelines, refer to the [directory-references rule](rules/directory-references/RULE.md).

## Web OS Portfolio Guidelines (Ethereal Light Codex)

### 1. Architecture and State Management (MVVM + ChangeNotifier)
- **Architecture Pattern**: Implement the MVVM (Model-View-ViewModel) pattern.
- **State Management**: Exclusively use `ChangeNotifier` for the state logic of the ViewModels.
- **Division of Responsibilities**: Views must be strictly declarative (UI); ViewModels (`ChangeNotifier`) must contain the presentation logic and orchestrate the state.

### 2. File-Based Data Source (Docs-Driven)
- **Markdown Consumption**: All portfolio content (experiences, list of projects, contacts, logs, bio) must be consumed directly from Markdown files (.md) located in the `/docs` directory.
- **No Static Content in the UI**: Declaring long text content in Dart code within the UI layer is prohibited. All informative text must be read and rendered dynamically from the files in the `/docs` directory.

### 3. Responsiveness (Desktop vs Mobile)
- **Large Screen (Web/Desktop/macOS/Linux)**: The layout must be responsive and optimized for horizontal screens (appropriate portrait/landscape), simulating a desktop environment (e.g., tmux panels, NERDTree listings).
- **Mobile (Small Screens)**: On mobile phones/devices, the interface must collapse into a single simplified portfolio screen, eliminating overlapping of multiple windows or complex panels.

### 4. Simulated Terminal (CLI) and Main Features
- **CLI Terminal**: The virtual terminal must simulate a simple command-line interpreter containing basic commands such as:
  - `help`: Lists available commands.
  - `ls` or `dir`: Lists the virtual documents in the `/docs` folder.
  - `cat <file>`: Reads and displays the content of a Markdown file from `/docs`.
  - `clear` or `cls`: Clears the terminal screen.
