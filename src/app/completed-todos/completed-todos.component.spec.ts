import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletedTodosComponent } from './completed-todos.component';
import { TodoService } from '../services/todo.service'; // Adjust the import path accordingly

describe('CompletedTodosComponent', () => {
  let component: CompletedTodosComponent;
  let fixture: ComponentFixture<CompletedTodosComponent>;
  let mockTodoService: Partial<TodoService>; // Create a partial mock of TodoService

  beforeEach(async () => {
    // Initialize the mock with necessary service methods
    mockTodoService = {
      getCompletedTodos: jest.fn().mockReturnValue([
        { id: 1, title: 'Completed Task 1', isCompleted: true },
        { id: 2, title: 'Completed Task 2', isCompleted: true }
      ])
      // Add other methods if needed
    };

    await TestBed.configureTestingModule({
      imports: [CompletedTodosComponent],
      providers: [
        { provide: TodoService, useValue: mockTodoService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display completed tasks', () => {
    // Trigger change detection to update the view
    fixture.detectChanges();

    // Assuming your component template renders completed tasks in a certain way
    // For example, you might have an element with class '.completed-task' for each task
    const taskElements = fixture.nativeElement.querySelectorAll('.completed-task');
    expect(taskElements.length).toBe(2);
  });

  it('should use TodoService to get completed tasks', () => {
    // Verify that the service method is called
    expect(mockTodoService.getCompletedTodos).toHaveBeenCalled();
  });

  // Add more tests as necessary based on the functionality of your component
});
