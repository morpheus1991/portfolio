import {
  AddTodo,
  EmptyTodos,
  RemoveTodo,
  Todo,
  TodosDispatchType,
  TodosState,
  ToggleTodo,
} from "../../../structure/todos";

export const ADD_TODO = "ADD_TODO ";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EMPTY_TODOS = "EMPTY_TODOS";

export const addTodo = (content: string): AddTodo => ({
  type: ADD_TODO,
  content,
});
export const removeTodo = (id: number): RemoveTodo => ({
  type: REMOVE_TODO,
  id,
});
export const toggleTodo = (id: number): ToggleTodo => ({
  type: TOGGLE_TODO,
  id,
});
export const emptyTodos = (): EmptyTodos => ({ type: EMPTY_TODOS });

const initialState: TodosState = {
  todos: [
    // { id: 0, content: "오늘 할일1", done: false, checked: false }
  ],
};

const todoReducer = (state = initialState, action: TodosDispatchType) => {
  const todo: Todo = { id: 1, content: "", checked: false, done: false };
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...todo, content: action.content }],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.id ? { ...item, done: !item.done } : item
        ),
      };
    case EMPTY_TODOS:
      return {
        ...state,
        todos: [],
      };
    default:
      return { ...state };
  }
};

export default todoReducer;
