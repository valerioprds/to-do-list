import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../services/todo.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-completed-todos',
  standalone: true,
  templateUrl: './completed-todos.component.html',
  styleUrl: './completed-todos.component.scss',
  imports: [HeaderComponent, CommonModule],
})
export class CompletedTodosComponent {
  constructor(private todoService: TodoService) {}

  get completedTodos(): Todo[] {
    return this.todoService.getCompletedTodos();
  }
}
