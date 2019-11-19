import { createStore, applyMiddleware } from "redux";
import { root } from "./reducers/root";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const configureStore = initialState => {
  const store = createStore(
    root,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
