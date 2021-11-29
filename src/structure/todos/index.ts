import React from "react";
import { Action, AnyAction } from "redux";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  EMPTY_TODOS,
} from "./../../redux/reducers/todos/";
export type Todo = {
  id: number;
  content: string /* 할일 내용 */;
  done: boolean /* 완료 */;
  checked: boolean /* 체크박스 체크 */;
};

export type Todos = Array<Todo>;

export interface TodosState {
  todos: Todos;
}

export interface AddTodo {
  type: typeof ADD_TODO;
  content: string;
}
export interface RemoveTodo {
  type: typeof REMOVE_TODO;
  id: number;
}
export interface ToggleTodo {
  type: typeof TOGGLE_TODO;
  id: number;
}
export interface EmptyTodos {
  type: typeof EMPTY_TODOS;
}

export type TodosDispatchType = AddTodo | RemoveTodo | ToggleTodo | EmptyTodos;
