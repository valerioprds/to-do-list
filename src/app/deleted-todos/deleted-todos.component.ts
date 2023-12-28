import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deleted-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deleted-todos.component.html',
  styleUrl: './deleted-todos.component.scss'
})
export class DeletedTodosComponent  implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  get deletedTodos(): Todo[] {
    return this.todoService.getDeletedTodos();
  }
}
