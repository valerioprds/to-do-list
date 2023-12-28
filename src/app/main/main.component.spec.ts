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
});
