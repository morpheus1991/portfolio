import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import GlobalStyle from "./style/GlobalStyle";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
