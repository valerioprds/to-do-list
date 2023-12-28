import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize todoForm on ngOnInit', () => {
    component.ngOnInit();
    expect(component.todoForm).toBeDefined();
    expect(component.todoForm.get('taskTitle')).toBeDefined();
  });

  it('should add a todo when addTodo is called with valid data', () => {
    const testTaskTitle = 'New Todo Task';
    component.todoForm.controls['taskTitle'].setValue(testTaskTitle);
    component.addTodo();

    expect(component.todos.length).toBe(1);
    expect(component.todos[0].title).toBe(testTaskTitle);
    expect(component.todoForm.get('taskTitle')!.value).toBe('');
  });

  it('should not add a todo when addTodo is called with empty taskTitle', () => {
    component.addTodo();
    expect(component.todos.length).toBe(0);
  });

  it('should not add a todo and alert if the todo already exists', () => {
    const testTaskTitle = 'Existing Todo Task';
    component.todoForm.controls['taskTitle'].setValue(testTaskTitle);
    component.addTodo(); // Add for the first time

    // Mock and spy on window.alert
    window.alert = jest.fn();

    // Try to add the same todo again
    component.todoForm.controls['taskTitle'].setValue(testTaskTitle);
    component.addTodo();

    expect(component.todos.length).toBe(1); // No new todo should be added
    expect(window.alert).toHaveBeenCalledWith('This todo item already exists!'); // Alert should be called
  });


  it('should delete a todo and move it to the deletedTodos list', () => {
    // Setup: Add a todo to be deleted
    const testTaskTitle = 'Todo to Delete';
    component.todoForm.controls['taskTitle'].setValue(testTaskTitle);
    component.addTodo();
    const todoToDelete = component.todos[0];

    // Act: Delete the todo
    component.deleteTodo(todoToDelete);

    // Assert: Todo is removed from todos and added to deletedTodos
    expect(component.todos).not.toContain(todoToDelete);
    expect(component.deletedTodos).toContain(todoToDelete);
  });
});
