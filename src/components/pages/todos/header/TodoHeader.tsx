import React, { useState } from "react";
import styled from "styled-components";
import { couldStartTrivia } from "typescript";
import { addTodo } from "../../../../redux/reducers/todos";
import store from "../../../../redux/store/store";
import { buttons, inputText } from "../../../../style/GlobalStyle";
import Button from "../../../common/Button";
import Input from "../../../common/Input";
const Block = styled.form`
  display: flex;
  justify-content: center;
  .input-block {
    ${inputText}
  }
  .button-block {
    ${buttons.buttonM.primary}
  }
`;
// interface Props {
//   todoAdd: Function;
// }
const TodoHeader = () => {
  const [inputText, setInputText] = useState("");
  const { dispatch, getState } = store;
  const todoAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("add", e.target);
    dispatch(addTodo(inputText));
    console.log(getState());
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setInputText(e.target.value);
    }
  };
  return (
    <Block className="todos-header">
      <Input
        type="text"
        placeholder="입력하세요."
        id="todosInput"
        name="todosInput"
        onChange={onChange}
        labelShow={false}
      ></Input>
      <Button type="submit" onClick={todoAdd}>
        추가
      </Button>
    </Block>
  );
};

export default TodoHeader;
