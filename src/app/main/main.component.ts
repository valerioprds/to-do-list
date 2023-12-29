import { Todo } from './../../models/todo';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todo.service';
import { DeletedTodosComponent } from '../deleted-todos/deleted-todos.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    CommonModule,
    DeletedTodosComponent,
  ],
})
export class MainComponent implements OnInit {
  todoForm!: FormGroup;
  hoveringOverItem: Todo | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      taskTitle: ['', Validators.required],
    });
  }

  get todos(): Todo[] {
    return this.todoService.getTodos();
  }

  get deletedTodos(): Todo[] {
    return this.todoService.getDeletedTodos();
  }

  addTodo() {
    const taskControl = this.todoForm.get('taskTitle');

    if (taskControl && taskControl.value) {
      if (this.todos.some((todo) => todo.title === taskControl.value)) {
        alert('This todo item already exists!');
        return;
      }

      this.todoService.addTodo({
        title: taskControl.value,
        isCompleted: false,
      });
      this.todoForm.reset();
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo.title);
    this.todoService.deleteTodo(todo);
    //console.log(`${todo} from main component`);
  }

  completeTodo(todo: Todo) {
    this.todoService.completeTodo(todo);
  }
}
