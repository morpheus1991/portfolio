import {
  AddTodo,
  AllCheckedTodos,
  EmptyTodos,
  RemoveCheckedTodos,
  RemoveTodo,
  Todo,
  TodosDispatchType,
  TodosState,
  ToggleCheckTodo,
} from "../../../structure/todos";

export const ADD_TODO = "ADD_TODO ";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_CHECK_TODO = "TOGGLE_CHECK_TODO";
export const EMPTY_TODOS = "EMPTY_TODOS";
export const REMOVE_CHECKED_TODOS = "REMOVE_CHECKED_TODOS";
export const ALL_CHECKED_TODOS = "ALL_CHECK";
export const addTodo = (content: string): AddTodo => ({
  type: ADD_TODO,
  payload: { content: content },
});
export const removeTodo = (id: string): RemoveTodo => ({
  type: REMOVE_TODO,
  payload: { id },
});
export const toggleCheckTodo = (id: string): ToggleCheckTodo => ({
  type: TOGGLE_CHECK_TODO,
  payload: { id },
});
export const emptyTodos = (): EmptyTodos => ({ type: EMPTY_TODOS });
export const removeCheckedTodos = (): RemoveCheckedTodos => ({
  type: REMOVE_CHECKED_TODOS,
});
export const allCheck = (): AllCheckedTodos => ({
  type: ALL_CHECKED_TODOS,
});
const initialState: TodosState = {
  todos: [
    // { id: 0, content: "오늘 할일1", done: false, checked: false }
  ],
};

/* 아이디 생성기 */
const __idString = ["m", "i", "n", "h", "y", "u", "k"];

const idCreator = () => {
  return `${__idString[Math.floor(Math.random() * __idString.length)]}${
    Date.now() + Math.random() * 10
  }`;
};

/* 리듀서 */
const todos = (state = initialState, action: TodosDispatchType) => {
  const todo: Todo = {
    id: idCreator(),
    content: "",
    checked: false,
    done: false,
  };
  console.log(action);

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({ ...todo, content: action.payload.content }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TOGGLE_CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, checked: !todo.checked }
            : todo
        ),
      };
    case EMPTY_TODOS:
      return {
        ...state,
        todos: [],
      };
    case REMOVE_CHECKED_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.checked !== true),
      };

    case ALL_CHECKED_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, checked: true })),
      };
    default:
      return state;
  }
};

export default todos;
