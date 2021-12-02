import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { addTodo } from "./redux/reducers/todos";
import { TodosState } from "./structure/todos";
import Input from "./components/common/Input";
import PageTodos from "./components/pages/todos/PageTodos";
import GlobalStyle from "./style/GlobalStyle";
import { Route } from "react-router";
import Header from "./components/layout/header/Header";
import PageMain from "./components/pages/main/PageMain";
import PageWorks from "./components/pages/works/PageWorks";
import MousePointCustom from "./components/common/MousePointCustom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MousePointCustom></MousePointCustom>
      <Header></Header>
      <Route exact path="/todoList" component={PageTodos}></Route>
      <Route exact path="/main" component={PageMain}></Route>
      <Route exact path="/works" component={PageWorks}></Route>
    </div>
  );
}

export default App;
