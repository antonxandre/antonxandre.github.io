---
name: oop-solid
description: Guidelines for Object-Oriented Programming and SOLID principles implementation in Dart.
---

# OOP & SOLID Skill

This skill outlines key principles for Object-Oriented Programming (OOP) and SOLID design in Dart, facilitating the creation of robust, maintainable, and extensible code.

## Core OOP Concepts in Dart
- **Encapsulation**: Hide internal details using private members (`_variable` or `_method`). Use getters and setters to expose data safely.
- **Inheritance & Composition**: Reuse logic appropriately. Prefer composition (`has-a` relationships) over deep inheritance hierarchies (`is-a` relationships) to keep code flexible.
- **Polymorphism**: Implement runtime behavior overrides. Dart supports implicit interfaces (every class defines an interface), allowing high flexibility.

---

## SOLID Principles in Dart

### 1. Single Responsibility Principle (SRP)
- A class should have only one reason to change.
- **Bad**: A widget that handles HTTP requests and JSON parsing.
- **Good**: A repository class handling data fetching, a model class representing the data, and a widget displaying the state.

### 2. Open/Closed Principle (OCP)
- Software entities should be open for extension, but closed for modification.
- Avoid modifying core business logic when adding new features; use inheritance, polymorphism, or behavioral patterns (like Strategy or Factory).

### 3. Liskov Substitution Principle (LSP)
- Subtypes must be substitutable for their base types.
- Ensure that subclasses do not break assertions or modify behaviors expected from the parent interface.

### 4. Interface Segregation Principle (ISP)
- Clients should not be forced to depend on methods they do not use.
- Favor small, cohesive interfaces over large, bloated ones. In Dart, write smaller abstract classes and combine them if necessary.

### 5. Dependency Inversion Principle (DIP)
- Depend on abstractions, not concretions.
- Use dependency injection to supply dependencies. Define abstract contracts (e.g., `abstract class AuthService`) and inject concrete implementations (e.g., `FirebaseAuthService`).
