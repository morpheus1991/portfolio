import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { removeTodo, toggleCheckTodo } from "../../../../redux/reducers/todos";
import store from "../../../../redux/store/store";
import { combineReducersState } from "../../../../structure/todos";
import { GRAY_SCALE } from "../../../../style/GlobalStyle";
import Input, { InputStyle } from "../../../common/Input";

const Block = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 40px;
  background: #f2f2f2;
  color: ${GRAY_SCALE.grade6};
  align-items: center;
  padding: 0 10px;
  ${InputStyle.checkbox}
  .content-button-area {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    overflow: hidden;

    p {
      width: 100%;
      padding: 0 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
    }
  }
  button {
    min-width: 40px;
    color: ${GRAY_SCALE.grade4};

    &:hover {
      color: ${GRAY_SCALE.grade7};
    }
  }
  & + li {
    margin-top: 8px;
  }
  .input-block {
    margin-right: 10px;
  }
`;
interface Props {
  id: string;
  content: string;
  checked: boolean;
}
const TodoItem = ({ id, content, checked }: Props) => {
  const { dispatch, getState } = store;
  const deleteTodo = () => {
    dispatch(removeTodo(id));
  };
  const toggleChecked = (id: string) => {
    console.log(getState());
    dispatch(toggleCheckTodo(id));
    console.log(getState());
  };
  return (
    <Block>
      <Input
        type="checkbox"
        id={id}
        name="checkbox"
        onChange={toggleChecked}
        labelShow={false}
        checked={checked}
      />
      <div className="content-button-area">
        <p>{content}</p> <button onClick={deleteTodo}>삭제</button>
      </div>
    </Block>
  );
};

export default TodoItem;
