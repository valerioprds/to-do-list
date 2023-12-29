import { TodoService } from './../services/todo.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletedTodosComponent } from './deleted-todos.component';

describe('DeletedTodosComponent', () => {
  let component: DeletedTodosComponent;
  let fixture: ComponentFixture<DeletedTodosComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    // Mock TodoService
    const todoServiceMock = {
      getDeletedTodos: jest.fn().mockReturnValue([
        { id: 1, title: 'Deleted Task 1', isCompleted: false },
        { id: 2, title: 'Deleted Task 2', isCompleted: false }
      ])
      // Add other methods if needed
    };

    await TestBed.configureTestingModule({
      imports: [DeletedTodosComponent],
      providers: [
        { provide: TodoService, useValue: todoServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedTodosComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display deleted tasks', () => {
    // Assuming your component has a method or property that uses TodoService to get deleted tasks
    const deletedTasks = component.deletedTodos; // Replace 'getDeletedTasks' with your actual method or property
    expect(deletedTasks.length).toBe(2);
    expect(deletedTasks[0].title).toEqual('Deleted Task 1');
    expect(deletedTasks[1].title).toEqual('Deleted Task 2');
  });

  it('should call TodoService to get deleted tasks on initialization', () => {
    expect(todoService.getDeletedTodos).toHaveBeenCalled();
  });

  // Add more tests based on the functionality of your component.
});
