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
  payload: { content: content },
});
export const removeTodo = (id: string): RemoveTodo => ({
  type: REMOVE_TODO,
  payload: { id },
});
export const toggleTodo = (id: string): ToggleTodo => ({
  type: TOGGLE_TODO,
  payload: { id },
});
export const emptyTodos = (): EmptyTodos => ({ type: EMPTY_TODOS });

const initialState: TodosState = {
  todos: [
    // { id: 0, content: "오늘 할일1", done: false, checked: false }
  ],
};

const __idString = ["m", "i", "n", "h", "y", "u", "k"];
const idCreator = () => {
  return `${__idString[Math.floor(Math.random() * __idString.length)]}${
    Date.now() + Math.random() * 10
  }`;
};
const todoReducer = (state = initialState, action: TodosDispatchType) => {
  const todo: Todo = {
    id: idCreator(),
    content: "",
    checked: false,
    done: false,
  };
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({ ...todo, content: action.payload.content }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id ? { ...item, done: !item.done } : item
        ),
      };
    case EMPTY_TODOS:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default todoReducer;
