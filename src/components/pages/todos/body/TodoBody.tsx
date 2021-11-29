import React, { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../../../redux/store/store";
import { combineReducersState, TodosState } from "../../../../structure/todos";
import TodoItem from "./TodoItem";

const TodoBody = () => {
  const { getState } = store;
  console.log(getState());
  const todos = useSelector((state: combineReducersState) => state.todos);
  console.log(todos);
  return (
    <div className="todos-header">
      <ul>
        {todos.todos.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoBody;
