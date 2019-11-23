import { combineReducers } from "redux";

import { appReducer } from "./app";
import { modalPanelReducer } from "./modalPanel";
import { currentCityReducer } from "./currentCity";
import { localStorageReducer } from "./localStorage";
import { weatherReducer } from "./weather";

export const root = combineReducers({
  app: appReducer,
  modalPanel: modalPanelReducer,
  currentCity: currentCityReducer,
  localStorage: localStorageReducer,
  weather: weatherReducer
});
