# Documentation for To-Do List Application

## Overview
This document provides a comprehensive guide to the "To-Do List" Angular application. The app is structured to manage tasks with features like adding, deleting, and marking tasks as completed. It leverages Angular's reactive forms for input handling and Angular Material for UI components.

## Package Dependencies (`package.json`)
- **Angular Core & Related Libraries**: Version 17.0.0, enabling robust app architecture.
- **Material Design**: Angular Material (v17.0.4) for rich UI components.
- **RxJS**: Reactive programming library.
- **Jest**: Testing framework for JavaScript.
- **TypeScript**: Programming language used, version ~5.2.2.

## Main Components

### `MainComponent`
- **Purpose**: Core component for adding and displaying tasks.
- **Features**:
  - Add new tasks with validation.
  - Display pending tasks with options to complete or delete.
- **Form Handling**: Uses `FormGroup` from Angular's `ReactiveFormsModule`.
- **Services**: Interacts with `TodoService` for task management.
- **Snackbar**: Utilizes Angular Material's `MatSnackBar` for user notifications.

### `HeaderComponent`
- **Purpose**: Navigation and task filtering.
- **Navigation**: Uses Angular's `Router` for navigating between different task views (pending, completed, deleted, all).
  
### `DeletedTodosComponent`
- **Purpose**: Display deleted tasks.
- **Service Interaction**: Fetches deleted tasks from `TodoService`.

### `CompletedTodosComponent`
- **Purpose**: Display completed tasks.
- **Service Interaction**: Fetches completed tasks from `TodoService`.

### `AllItemsComponent`
- **Purpose**: Display all tasks.
- **Service Interaction**: Fetches all tasks from `TodoService`.

## HTML Templates
Each component has an associated HTML template, structured to display and interact with tasks accordingly. The templates are built with Angular's template syntax and integrated with Angular Material components for a cohesive design.

## CSS/SCSS Styles
Styles for each component are defined in their respective SCSS files, ensuring a modular and maintainable styling approach.

## Services
- **`TodoService`**: Central service for task management. Provides methods for adding, deleting, completing, and retrieving tasks in different states.

## Testing
- Configured with Jest, offering a robust testing framework.
- `jest-preset-angular` for Angular-specific configurations.

## Conclusion
This To-Do List application exemplifies a modern Angular application with a focus on modularity, reactive forms, and user interaction. It's designed to be scalable and maintainable, leveraging Angular's ecosystem and best practices.
