import React from "react";
import styled from "styled-components";
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
const TodoHeader = () => {
  return (
    <Block className="todos-header">
      <Input
        type="text"
        placeholder="입력하세요."
        id="todosInput"
        name="todosInput"
        onChange={() => {
          console.log("dd");
        }}
        labelShow={false}
      ></Input>
      <Button type="submit" onClick={() => {}}>
        추가
      </Button>
    </Block>
  );
};

export default TodoHeader;
