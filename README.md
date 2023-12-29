# Documentation for To-Do List Application

## Overview
This document provides a comprehensive guide to the "To-Do List" application developed using Angular version 17. The app is designed to manage tasks with features like adding, deleting, and marking tasks as completed. It leverages Angular 17's reactive forms for input handling and Angular Material for UI components.

## Package Dependencies (`package.json`)
- **Angular Core & Related Libraries**: Version 17.0.0, enabling robust app architecture.
- **Material Design**: Angular Material (v17.0.4) for rich UI components.
- **RxJS**: Reactive programming library.
- **Jest**: Testing framework for JavaScript.
- **TypeScript**: Programming language used, version ~5.2.2.

## Installation
To install and set up the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all the dependencies listed in `package.json`.

## Running the Application
After installation, you can run the application locally:

1. Execute `ng serve -o` to start the development server.
2. Open your web browser and go to `http://localhost:4200/` to view the app.

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
- 
## Running Tests
To run tests in this application, follow these steps:

1. Ensure that all dependencies, including testing libraries, are installed.
2. Run `npm test` to execute tests using Jest.
3. To view coverage, run `npm run test:coverage`.

## Conclusion
This To-Do List application exemplifies a modern Angular 17 application with a focus on modularity, reactive forms, and user interaction. It's designed to be scalable and maintainable, leveraging Angular's ecosystem and best practices.
