import { fetchCities } from "./weather";
import { getItem, NAME_OF_ITEM } from "api/localStorage";

export const fetchCitiesFromLocalStorage = () => dispatch => {
  const cities = getItem(NAME_OF_ITEM) || [];

  if (cities.length > 0) {
    dispatch(fetchCities(cities));
  }
};
