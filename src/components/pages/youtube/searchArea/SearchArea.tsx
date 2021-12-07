import React, { useRef, useState } from "react";
import styled from "styled-components";
import { PRIMARY } from "../../../../style/GlobalStyle";
import Button from "../../../common/Button";
import Input from "../../../common/Input";
const Block = styled.form`
  margin: 40px 0 60px;
  display: flex;
  justify-content: center;
  background: ${PRIMARY.grade1};
  padding: 10px;
  width: 100%;
  position: sticky;
  top: 30px;
  z-index: 200;
  .input-block {
    input {
      border: 1px solid ${PRIMARY.grade2};
      height: 30px;
      width: 240px;
      padding: 0 12px;
    }
  }
  .button-block {
    button {
      border: 1px solid ${PRIMARY.grade2};
      background: ${PRIMARY.grade2};
      color: #fff;
      height: 30px;
      padding: 4px 12px;
    }
  }
`;
interface Props {
  search: Function;
}
const SearchArea = ({ search }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setInputValue(e.target.value);
    }
  };
  return (
    <Block
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        search(inputValue);
      }}
    >
      <Input
        type="text"
        id="youtube-search-input"
        name="youtube-search-input"
        onChange={onChange}
        ref={inputRef}
      ></Input>
      <Button type="submit" onClick={() => {}}>
        검색
      </Button>
    </Block>
  );
};

export default SearchArea;
