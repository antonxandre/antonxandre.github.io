# Keep It Simple, Stupid (KISS) Rule

This rule ensures that the system is designed and built to be as simple as possible. Simple code is easier to understand, test, maintain, and less prone to bugs.

## Rule Guidelines

- **Simplicity Over Cleverness**: Avoid complex, "clever" logic or syntax tricks that might save a few keystrokes but hurt readability. Write code that a junior developer can understand immediately.
- **Readable Conditionals**: Avoid deeply nested `if/else` blocks. Prefer early returns, guard clauses, or simple pattern matching where applicable.
- **Cohesive Functions**: Keep functions small and focused on a single logical operation. If a function does more than one thing, split it.
- **Minimal Nesting in Flutter**: Keep the widget tree flat. Do not build huge nested trees inside a single widget build method. Extract small UI components to standalone stateless widgets.
