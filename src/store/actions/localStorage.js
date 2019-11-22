import { fetchCities } from "./weather";
import { getItem, NAME_OF_ITEM } from "api/localStorage";
import { loading, loaded } from "./app";

export const fetchCitiesFromLocalStorage = () => async dispatch => {
  dispatch(loading());

  const cities = getItem(NAME_OF_ITEM) || [];

  if (cities.length > 0) {
    dispatch(fetchCities(cities));
  }

  dispatch(loaded());
};
