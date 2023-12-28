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
  todos: any[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      taskTitle: ['', Validators.required],
    });
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
    }
  }
}
