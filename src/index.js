import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ThemeContext from "../src/contexts/ThemeContext/ThemeContext";
import App from "./components/App/App";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeContext>
      <App />
    </ThemeContext>
  </Provider>,
  document.querySelector("#root")
);
