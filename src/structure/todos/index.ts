import React from "react";
import { Action, AnyAction } from "redux";
import {
  ADD_TODO,
  REMOVE_TODO,
  EMPTY_TODOS,
  TOGGLE_CHECK_TODO,
  REMOVE_CHECKED_TODOS,
  ALL_CHECKED_TODOS,
} from "./../../redux/reducers/todos/";
export type Todo = {
  id: string;
  content: string /* 할일 내용 */;
  done: boolean /* 완료 */;
  checked: boolean /* 체크박스 체크 */;
};

export type Todos = Array<Todo>;

export interface TodosState {
  todos: Todos;
}
export interface combineReducersState {
  todos: {
    todos: Todos;
  };
}
export interface AddTodo {
  type: typeof ADD_TODO;
  payload: {
    content: string;
  };
}
export interface RemoveTodo {
  type: typeof REMOVE_TODO;
  payload: {
    id: string;
  };
}
export interface ToggleCheckTodo {
  type: typeof TOGGLE_CHECK_TODO;
  payload: {
    id: string;
  };
}
export interface EmptyTodos {
  type: typeof EMPTY_TODOS;
}

export interface RemoveCheckedTodos {
  type: typeof REMOVE_CHECKED_TODOS;
}
export interface AllCheckedTodos {
  type: typeof ALL_CHECKED_TODOS;
}
export type TodosDispatchType =
  | AddTodo
  | RemoveTodo
  | ToggleCheckTodo
  | EmptyTodos
  | RemoveCheckedTodos
  | AllCheckedTodos;
