import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { TodoService } from '../services/todo.service';
import { Todo } from '../../models/todo';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        FormBuilder,
        { provide: TodoService, useValue: mockTodoService },
      ],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Mock TodoService
const todos: Todo[] = [
  { title: 'Test Todo 1', isCompleted: false },
  { title: 'Test Todo 2', isCompleted: true },
];

const mockTodoService = {
  getTodos: jest.fn(() => todos),
  addTodo: jest.fn(),
  deleteTodo: jest.fn(),
  getDeletedTodos: jest.fn(),
};
