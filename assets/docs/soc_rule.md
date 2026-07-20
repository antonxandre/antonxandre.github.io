# Separation of Concerns (SoC) Rule

This rule ensures that the application is divided into distinct sections, where each section addresses a separate concern. This improves modularity, maintainability, and testability.

## Rule Guidelines

- **UI vs. Logic Separation**: The presentation layer (Widgets) must only focus on rendering the UI. It must never contain business logic, state calculations, or direct data source orchestration.
- **State Management**: Use ViewModels (`ChangeNotifier`) to orchestrate view states and presentation logic. All logic triggering state updates or asynchronous calls must live inside the ViewModels.
- **Data Source Abstraction**: Widgets and ViewModels must not know *how* or *where* data is retrieved. Separate this concern into a repository/data source layer.
- **Single Source of Truth**: Keep data models pure and isolate external formats (like JSON, XML) to serialization handlers.
