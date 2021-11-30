import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { store } from "../../../../redux/reducers/inedex";
import { combineReducersState, TodosState } from "../../../../structure/todos";
import TodoItem from "./TodoItem";

const Block = styled.div`
  width: 428px;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 40px;
`;
const TodoBody = () => {
  const { getState } = store;
  const todos = useSelector((state: combineReducersState) => state.todos);
  return (
    <Block className="todos-body">
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
