import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../services/todo.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-deleted-todos',
    standalone: true,
    templateUrl: './deleted-todos.component.html',
    styleUrl: './deleted-todos.component.scss',
    imports: [CommonModule, HeaderComponent]
})
export class DeletedTodosComponent  implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  get deletedTodos(): Todo[] {
    return this.todoService.getDeletedTodos();
  }
}
