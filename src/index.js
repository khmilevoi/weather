import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { configureStore } from "store/configureStore";
import { initialState } from "constants/initialState";

ReactDOM.render(
  <Router>
    <Provider store={configureStore(initialState)}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
