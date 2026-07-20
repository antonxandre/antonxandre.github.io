# Don't Repeat Yourself (DRY) Rule

This rule ensures that every piece of knowledge or logic within the codebase has a single, unambiguous representation. This prevents code bloat, reduces maintenance, and simplifies bug fixing.

## Rule Guidelines

- **Logic Deduplication**: If you write the same computational logic, conditional flows, or data operations in multiple places, refactor them into a shared utility function, a class method, or an extension method.
- **UI Deduplication (Flutter)**: Avoid duplicating identical widget structures. Extract reusable sub-widgets, parameterize them, or use building blocks.
- **Design Tokens**: Do not use ad-hoc color codes or font sizes in multiple files. Use the unified Design System tokens (e.g., `CodexColors`, `CodexTheme`).
- **Configuration & Constants**: Consolidate global keys, paths, and configurations in single, descriptive files instead of hardcoding them locally in different places.
