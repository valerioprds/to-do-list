import { Injectable } from '@angular/core';
import { Todo } from './../../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private deletedTodos: Todo[] = [];

  constructor() {
    this.loadTodosFromLocalStorage();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  getDeletedTodos(): Todo[] {
    return this.deletedTodos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveTodosToLocalStorage();
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.deletedTodos.push(todo);
    this.saveTodosToLocalStorage();
    console.log('items deleted*************')
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
}
