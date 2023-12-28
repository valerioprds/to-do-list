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

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
})
export class MainComponent implements OnInit {
  todoForm!: FormGroup;
  todos: Todo[] = [];
  deletedTodos: Todo[] = []; // Store deleted todos
  hoveringOverItem: Todo | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      taskTitle: ['', Validators.required],
    });
    this.loadTodosFromLocalStorage();
  }



  addTodo() {
    const taskControl = this.todoForm.get('taskTitle');

    if (taskControl && taskControl.value) {
      // Check if the todo already exists
      if (this.todos.some((todo) => todo.title === taskControl.value)) {
        alert('This todo item already exists!');
        return;
      }

      this.todos.push({
        title: taskControl.value,
        isCompleted: new FormControl(false),
      });
      this.todoForm.reset();
      this.todoForm.get('taskTitle')!.setValue('');
      this.saveTodosToLocalStorage();
    }
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    //&
    this.deletedTodos.push(todo); // Add to deleted todos list
    console.log('delete todo items ' + this.deletedTodos)
    this.saveTodosToLocalStorage();

  }


  saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }


  loadTodosFromLocalStorage() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos).map((todo: { isCompleted: any; })  => ({
        ...todo,
        isCompleted: new FormControl(todo.isCompleted),
      }));
    }
  }



}
