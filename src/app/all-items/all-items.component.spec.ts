import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllItemsComponent } from './all-items.component';
import { TodoService } from '../services/todo.service'; // Adjust the import path accordingly

describe('AllItemsComponent', () => {
  let component: AllItemsComponent;
  let fixture: ComponentFixture<AllItemsComponent>;
  let mockTodoService: Partial<TodoService>; // Create a partial mock of TodoService

  beforeEach(async () => {
    // Initialize the mock with necessary service methods
    mockTodoService = {
      getAllTodos: jest.fn().mockReturnValue([
        { id: 1, title: 'Todo 1', isCompleted: false },
        { id: 2, title: 'Deleted Todo 2', isCompleted: false },
        { id: 3, title: 'Completed Todo 3', isCompleted: true },
      ]),
      // Add other methods if needed
    };

    await TestBed.configureTestingModule({
      providers: [{ provide: TodoService, useValue: mockTodoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all todos', () => {
    // Trigger change detection to update the view with mock data
    fixture.detectChanges();

    // Use the correct selector based on your component's template
    const todoElements = fixture.nativeElement.querySelectorAll('.list-group-item');
    expect(todoElements.length).toBe(3);

    // Optionally, you can add additional checks for the content of each todo item
    expect(todoElements[0].textContent).toContain('Todo 1');
    expect(todoElements[1].textContent).toContain('Deleted Todo 2');
    expect(todoElements[2].textContent).toContain('Completed Todo 3');
  });


  it('should use TodoService to get all todos', () => {
    // Verify that the service method is called
    expect(mockTodoService.getAllTodos).toHaveBeenCalled();
  });

  // Add more tests as necessary based on the functionality of your component
});
