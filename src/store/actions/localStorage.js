import { localStorage } from "constants/actionTypes";
import { fetchCities } from "./weather";
import { getItem, setItem } from "api/localStorage";

export const setCities = cities => ({
  type: localStorage.SET_CITIES,
  payload: cities
});

export const fetchCitiesFromLocalStorage = () => dispatch => {
  const localStorage = getItem(process.env.LOCAL_STORAGE) || [];
  const cities = JSON.parse(localStorage);

  dispatch(setCities(cities));
  dispatch(fetchCities(cities));
};