import { combineReducers } from "redux";

import { appReducer } from "./app";
import { searchCityPanelReducer } from "./searchCityPanel";
import { currentCityReducer } from "./currentCity";
import { localStorageReducer } from "./localStorage";
import { weatherReducer } from "./weather";

export const root = combineReducers({
  app: appReducer,
  searchCityPanel: searchCityPanelReducer,
  currentCity: currentCityReducer,
  localStorage: localStorageReducer,
  weather: weatherReducer
});
