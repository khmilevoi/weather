import { combineReducers } from "redux";

import { appReducer } from "./app";
import { currentCityReducer } from "./currentCity";
import { localStorageReducer } from "./localStorage";
import { weatherReducer } from "./weather";
import { addCityPanelReducer } from "./addCityPanel";

export const root = combineReducers({
  app: appReducer,
  addCityPanel: addCityPanelReducer,
  currentCity: currentCityReducer,
  localStorage: localStorageReducer,
  weather: weatherReducer
});
