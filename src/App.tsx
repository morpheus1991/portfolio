import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./redux/store/store";
import { addTodo } from "./redux/reducers/todos";
import { TodosState } from "./structure/todos";
import Input from "./components/common/Input";
import PageTodos from "./components/pages/todos/PageTodos";
import GlobalStyle from "./style/GlobalStyle";

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
      <GlobalStyle />

      <PageTodos></PageTodos>
    </div>
  );
}

export default App;
