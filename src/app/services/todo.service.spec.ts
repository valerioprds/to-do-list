import { TodoService } from './todo.service';
import { Todo } from './../../models/todo';

describe('TodoService', () => {
  let service: TodoService;
  let mockLocalStorage: { [key: string]: string };

  beforeEach(() => {
    mockLocalStorage = {};

    // Custom mock for localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key: string) => mockLocalStorage[key] || null),
        setItem: jest.fn((key: string, value: string) => {
          mockLocalStorage[key] = value;
        }),
        removeItem: jest.fn((key: string) => {
          delete mockLocalStorage[key];
        }),
      },
      writable: true,
    });

    service = new TodoService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addTodo', () => {
    it('should add a new todo item', () => {
      const newTodo: Todo = { title: 'New Todo', isCompleted: false };
      service.addTodo(newTodo);
      expect(service.getTodos()).toContain(newTodo);
      expect(JSON.parse(mockLocalStorage['todos'])).toContainEqual(newTodo);
    });
  });

  describe('deleteTodo', () => {
    it('should delete a todo item and add it to the deleted list', () => {
      const todo: Todo = { title: 'Existing Todo', isCompleted: false };
      service.addTodo(todo);
      service.deleteTodo(todo);
      expect(service.getTodos()).not.toContain(todo);
      expect(service.getDeletedTodos()).toContain(todo);
      const storedTodos = JSON.parse(mockLocalStorage['todos'] || '[]');
      expect(storedTodos).not.toContainEqual(todo);
    });
  });

  describe('getCompletedTodos', () => {
    it('should return completed todos', () => {
      const todo1: Todo = { title: 'Todo 1', isCompleted: false };
      const todo2: Todo = { title: 'Todo 2', isCompleted: false }; // Initially not completed
      service.addTodo(todo1);
      service.addTodo(todo2);

      // Mark todo2 as completed
      service.completeTodo(todo2);

      expect(service.getCompletedTodos()).toContainEqual(expect.objectContaining({ title: 'Todo 2', isCompleted: true }));
      expect(service.getCompletedTodos()).not.toContainEqual(expect.objectContaining({ title: 'Todo 1', isCompleted: false }));
    });
  });


  describe('completeTodo', () => {
    it('should mark a todo as completed and move it to the completed list', () => {
      const todo: Todo = { title: 'Todo', isCompleted: false };
      service.addTodo(todo);
      service.completeTodo(todo);
      expect(service.getTodos()).not.toContain(todo);
      expect(service.getCompletedTodos()).toContain(todo);
      expect(todo.isCompleted).toBe(true);
    });
  });

  describe('loadTodosFromLocalStorage', () => {
    it('should load todos from localStorage on service initialization', () => {
      const storedTodos = [{ title: 'Stored Todo', isCompleted: false }];
      mockLocalStorage['todos'] = JSON.stringify(storedTodos);
      service = new TodoService(); // Re-instantiate to trigger loading from localStorage
      expect(service.getTodos()).toEqual(storedTodos);
    });

    it('should handle the case when there are no todos in localStorage', () => {
      delete mockLocalStorage['todos'];
      service = new TodoService();
      expect(service.getTodos()).toEqual([]);
    });
  });

  describe('saveTodosToLocalStorage', () => {
    it('should save todos to localStorage', () => {
      const todo: Todo = { title: 'New Todo', isCompleted: false };
      service.addTodo(todo);
      expect(JSON.parse(mockLocalStorage['todos'])).toContainEqual(todo);
    });
  });

  // Add more tests as needed
});
