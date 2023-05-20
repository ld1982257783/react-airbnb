import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// BrowserRouter-history  HashRouter-hash模式
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// import './assets/less/index.less'
import "normalize.css";

import store from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/airbnb">
          <App />
        </BrowserRouter>
      </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
