import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseLine from "@material-ui/core/CssBaseline";

import { configureStore } from "store/configureStore";
import { initialState } from "constants/initialState";


ReactDOM.render(
  <Router>
    <Provider store={configureStore(initialState)}>
      <CssBaseLine></CssBaseLine>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
