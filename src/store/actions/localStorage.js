import { localStorage } from "constants/actionTypes";
import { fetchCities } from "./weather";
import { getItem } from "api/localStorage";

export const setCities = cities => ({
  type: localStorage.SET_CITIES,
  payload: cities
});

export const fetchCitiesFromLocalStorage = () => dispatch => {
  const cities = JSON.parse(getItem(process.env.LOCAL_STORAGE)) || [];

  dispatch(setCities(cities));

  if (cities.length > 0) {
    dispatch(fetchCities(cities));
  }
};
