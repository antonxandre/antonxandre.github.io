# Relative Directory References Rule

This rule ensures that all directory references, paths, file links, and imports within the workspace are kept relative to maintain portability and compatibility across different developer machines and environments.

## Rule Guidelines

- **Always Use Relative Paths**: Any reference to a directory or file that resides within the workspace must be specified using relative paths (e.g., `./src/components/` or `../utils/`).
- **Avoid Absolute Paths**: Never use absolute paths (e.g., `/Users/antonxandre/projetos/antonxandre/src/...`) to reference files or directories inside the workspace.
- **Link Formatting**: In markdown documentation, rules, and skills, references to local files or folders should use relative paths when linking to them.
