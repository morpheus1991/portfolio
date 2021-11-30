import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { addTodo } from "./redux/reducers/todos";
import { TodosState } from "./structure/todos";
import Input from "./components/common/Input";
import PageTodos from "./components/pages/todos/PageTodos";
import GlobalStyle from "./style/GlobalStyle";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PageTodos></PageTodos>
      <Route exact path="/todoList" component={PageTodos}></Route>
    </div>
  );
}

export default App;
