import { Injectable } from '@angular/core';
import { Todo } from './../../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private deletedTodos: Todo[] = [];
  private completedTodos: Todo[] = []; // Array for completed todos

  constructor() {
    this.loadTodosFromLocalStorage();
    this.loadDeletedTodosFromLocalStorage();
    this.loadCompletedTodosFromLocalStorage(); // Load completed todos from local storage
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveTodosToLocalStorage();
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.deletedTodos.push(todo);
    this.saveTodosToLocalStorage();
    this.saveDeletedTodosToLocalStorage();
  }

  getDeletedTodos(): Todo[] {
    return this.deletedTodos;
  }

  getCompletedTodos(): Todo[] {
    return this.completedTodos;
  }

  completeTodo(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    todo.isCompleted = true;
    this.completedTodos.push(todo);
    this.saveTodosToLocalStorage();
    this.saveCompletedTodosToLocalStorage();
  }

  private saveTodosToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private loadTodosFromLocalStorage(): void {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  private saveDeletedTodosToLocalStorage(): void {
    localStorage.setItem('deletedTodos', JSON.stringify(this.deletedTodos));
  }

  private loadDeletedTodosFromLocalStorage(): void {
    const savedDeletedTodos = localStorage.getItem('deletedTodos');
    if (savedDeletedTodos) {
      this.deletedTodos = JSON.parse(savedDeletedTodos);
    }
  }

  private saveCompletedTodosToLocalStorage(): void {
    localStorage.setItem('completedTodos', JSON.stringify(this.completedTodos));
  }

  private loadCompletedTodosFromLocalStorage(): void {
    const savedCompletedTodos = localStorage.getItem('completedTodos');
    if (savedCompletedTodos) {
      this.completedTodos = JSON.parse(savedCompletedTodos);
    }
  }
}
