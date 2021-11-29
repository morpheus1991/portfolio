import React from "react";
import styled from "styled-components";
import TodoBody from "./body/TodoBody";
import TodoHeader from "./header/TodoHeader";

const Block = styled.div`
  max-width: 800px;
  margin: 0 auto;
  .todos-header {
  }
  .todos-body {
  }
`;

const PageTodos = () => {
  return (
    <Block>
      <TodoHeader></TodoHeader>
      <TodoBody></TodoBody>
    </Block>
  );
};

export default PageTodos;
