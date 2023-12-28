import { TodoService } from './todo.service';
import { Todo } from './../../models/todo';

describe('TodoService', () => {
  let service: TodoService;
  let mockLocalStorage: { [key: string]: string };

  beforeEach(() => {
    mockLocalStorage = {};

    // Clearing and re-mocking localStorage
    jest.restoreAllMocks();
    jest
      .spyOn(window.localStorage, 'getItem')
      .mockImplementation((key: string) => {
        return mockLocalStorage[key] || null;
      });
    jest
      .spyOn(window.localStorage, 'setItem')
      .mockImplementation((key: string, value: string) => {
        mockLocalStorage[key] = value;
      });
    jest
      .spyOn(window.localStorage, 'removeItem')
      .mockImplementation((key: string) => {
        delete mockLocalStorage[key];
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
});
