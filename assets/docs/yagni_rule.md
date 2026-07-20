# You Aren't Gonna Need It (YAGNI) Rule

This rule ensures that you do not implement features, design abstractions, or add parameters to the codebase until they are actually needed by current requirements. This prevents over-engineering and keeps the codebase simple and focused.

## Rule Guidelines

- **Implement Requirements, Not Speculations**: Write code to solve the requirements of today, not predicted scenarios for tomorrow. Avoid adding "hooks", "placeholders", or generic structures for future extensions that do not exist yet.
- **Avoid Premature Abstractions**: Do not create complex generic wrappers, design patterns, or layers (like interfaces with only a single implementation) unless the system requires polymorphism or test injection immediately.
- **Keep Parameters Focused**: Do not add optional parameters or config options to methods or components that are not currently used in the codebase.
- **Refactor When Needed**: Rely on the ability to refactor code when requirements change, rather than designing complex frameworks to avoid refactoring.
