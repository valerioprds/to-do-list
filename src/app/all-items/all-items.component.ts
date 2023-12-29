import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../services/todo.service';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-all-items',
    standalone: true,
    templateUrl: './all-items.component.html',
    styleUrl: './all-items.component.scss',
    imports: [CommonModule, HeaderComponent]
})
export class AllItemsComponent {
  constructor(private todoService: TodoService) {}

  
}
