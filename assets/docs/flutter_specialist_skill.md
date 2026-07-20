---
name: flutter-specialist
description: Guidelines for Flutter development focusing on MVVM + ChangeNotifier architecture and responsive UI design.
---

# Flutter Specialist Skill

This skill provides comprehensive guidelines and best practices for Flutter application development, enforcing the MVVM (Model-View-ViewModel) architecture, using `ChangeNotifier` for presentation logic, and ensuring a robust responsive design across different form factors.

## Architecture Guidelines (MVVM + ChangeNotifier)

You must structure all Flutter code according to the Model-View-ViewModel architecture:

### 1. View (UI Layer)
- Strictly declarative user interfaces.
- No direct state manipulation or business logic inside widgets.
- Widgets consume ViewModels through providers, `AnimatedBuilder`, or context listeners.
- User events (taps, inputs) must be forwarded directly to the ViewModel (e.g., `onPressed: () => viewModel.performAction()`).

### 2. ViewModel (Presentation Logic)
- Inherits from `ChangeNotifier`.
- Encapsulates the UI state and exposes it to the View.
- Coordinates asynchronous operations (data fetching, state updates).
- Calls `notifyListeners()` when properties that impact the UI change to rebuild the view.

### 3. Model / Repository (Data Layer)
- Defines pure data models and entities.
- Implements repositories to abstract data fetching from local files, databases, or API integrations.
- ViewModels interact only with Repositories, never directly with raw data sources.

---

## Responsiveness & Layout Guidelines

You must design layouts that adapt seamlessly to different screens. Follow the **Web OS Portfolio Guidelines (Códex de Luz Etérea)**:

### 1. Desktop & Large Screens (Web/macOS/Linux)
- Optimize layouts for horizontal aspect ratios (landscape orientation).
- Use multi-panel layouts (simulating systems like Tmux, split-panes, or tree explorers like NERDTree).
- Leverage tools like `LayoutBuilder` and `MediaQuery` to dynamically allocate widths (e.g., resizable side navigation panel + editor panel + reading panel).

### 2. Mobile & Small Screens
- Simplify the layout when horizontal space is constrained.
- Collapse complex multi-panel setups into a single, clean vertical column or simple tab navigation.
- Hide non-essential desktop-only panels (e.g., resizable dividers or side trees) on small viewports.
