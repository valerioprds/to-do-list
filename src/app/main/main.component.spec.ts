import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { TodoService } from '../services/todo.service';
import { Todo } from '../../models/todo';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let mockTodoService: Partial<TodoService>;

  beforeEach(async () => {
    // Mock TodoService with necessary methods
    mockTodoService = {
      getTodos: jest.fn().mockReturnValue([
        { title: 'Test Todo 1', isCompleted: false },
        { title: 'Test Todo 2', isCompleted: true },
      ]),
      addTodo: jest.fn(),
      deleteTodo: jest.fn(),
      getDeletedTodos: jest.fn().mockReturnValue([
        // ...mock deleted todos
      ]),
      getCompletedTodos: jest.fn().mockReturnValue([
        // ...mock completed todos
      ]),
      // Add other methods as necessary
    };

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: TodoService, useValue: mockTodoService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize todoForm on ngOnInit', () => {
    expect(component.todoForm).toBeDefined();
    expect(component.todoForm.get('taskTitle')).toBeDefined();
  });

  it('should call addTodo and reset form on valid form submission', () => {
    const taskTitleControl = component.todoForm.get('taskTitle');
    taskTitleControl!.setValue('New Todo');
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(mockTodoService.addTodo).toHaveBeenCalled();

    // Checking if the value is null after reset, which is the default behavior
    expect(taskTitleControl!.value).toBeNull();
  });


  it('should display the correct number of todos', () => {
    fixture.detectChanges();
    const todoItems =
      fixture.nativeElement.querySelectorAll('.list-group-item');
    expect(todoItems.length).toBe(2); // Adjust this value based on your mock data
  });

  // Additional tests can be added as needed
});
