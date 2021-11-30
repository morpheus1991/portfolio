import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import store from "../../../../redux/store/store";
import { combineReducersState, TodosState } from "../../../../structure/todos";
import TodoItem from "./TodoItem";

const Block = styled.div`
  margin-top: 40px;
`;
const TodoBody = () => {
  const { getState } = store;
  console.log(getState());
  const todos = useSelector((state: combineReducersState) => state.todos);
  console.log(todos);
  return (
    <Block className="todos-header">
      <ul>
        {todos.todos.map((item) => (
          <TodoItem
            key={item.id}
            content={item.content}
            id={item.id}
            checked={item.checked}
          ></TodoItem>
        ))}
      </ul>
    </Block>
  );
};

export default TodoBody;
