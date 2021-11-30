import React, { useRef, useState } from "react";
import styled from "styled-components";
import { store } from "../../../../redux/reducers/inedex";
import { addTodo } from "../../../../redux/reducers/todos";
import { buttons, inputText } from "../../../../style/GlobalStyle";
import Button from "../../../common/Button";
import Input from "../../../common/Input";
import TodoItemControllButtons from "./TodoItemControllButtons";
const Block = styled.form`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  .input-button-area {
    display: flex;
    justify-content: center;
    width: 428px;
    margin: 0 auto;
    input {
      flex-grow: 1;
    }
  }
  .controll-button-area {
    width: 100%;
    display: flex;
  }
  .input-block {
    ${inputText}
  }
  .button-block {
    ${buttons.buttonM.primary}
  }
`;

const TodoHeader = () => {
  const { dispatch, getState } = store;
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState("");
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault(); //이벤트 기본 동작 켄슬
    if (inputText.length > 0) {
      dispatch(addTodo(inputText)); //디스패치
      setInputText(""); //스테이트 초기화
      if (inputRef.current && inputRef.current.value.length > 0) {
        inputRef.current!.value = ""; //인풋 element value 초기화 (입력창 비우기)
      }
      console.log(getState());
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setInputText(e.target.value);
    }
  };
  return (
    <Block className="todos-header">
      <div className="input-button-area">
        <Input
          type="text"
          placeholder="입력하세요."
          id="todosInput"
          name="todosInput"
          onChange={onChange}
          labelShow={false}
          value={inputText}
          ref={inputRef}
        ></Input>
        <Button type="submit" onClick={onClick}>
          추가
        </Button>
      </div>
      <TodoItemControllButtons />
    </Block>
  );
};

export default TodoHeader;
