import React from "react";
import styled from "styled-components";
import { store } from "../../../../redux/reducers/inedex";
import {
  allCheck,
  emptyTodos,
  removeCheckedTodos,
} from "../../../../redux/reducers/todos";
import Button from "../../../common/Button";

const Block = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .button-block + .button-block {
    margin-left: 4px;
  }
`;
const TodoItemControllButtons = () => {
  const { dispatch } = store;
  const allDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(emptyTodos());
  };
  const slectedDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeCheckedTodos());
  };
  const allChecktodo = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(allCheck());
  };
  return (
    <Block className="controll-button-area">
      <Button type="button" onClick={allChecktodo}>
        모두 체크
      </Button>
      <Button type="button" onClick={slectedDelete}>
        선택항목 삭제
      </Button>
      <Button type="button" onClick={allDelete}>
        모두 삭제
      </Button>
    </Block>
  );
};

export default TodoItemControllButtons;
