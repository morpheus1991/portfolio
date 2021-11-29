import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./redux/store/store";
import { addTodo } from "./redux/reducers/todos";
import { TodosState } from "./structure/todos";
import Input from "./components/common/Input";

function App() {
  const { dispatch, getState } = store;
  const onClick = () => {
    console.log(store.getState());
    console.log(dispatch(addTodo("ddd")));
  };
  useEffect(() => {
    const stateValue = store.getState();
    console.log(stateValue);
  }, []);
  return (
    <div className="App">
      <button onClick={onClick}>버튼</button>
      <Input
        type="text"
        placeholder="입력해"
        id="todosInput"
        name="todosInput"
      ></Input>
      <Input
        type="checkbox"
        placeholder="입력해"
        id="todosCheckbox"
        name="todosCheckbox"
      ></Input>
      <Input
        type="radio"
        placeholder="입력해"
        id="todosRadio"
        name="todosRadio"
      ></Input>
    </div>
  );
}

export default App;
