import { weather } from "constants/actionTypes";
import { createForecastRequest } from "api/WeatherAPI";
import { setError } from "./app";

export const addCities = cities => ({
  type: weather.ADD_CITIES,
  payload: cities
});

export const removeCity = city => ({
  type: weather.REMOVE_CITY,
  payload: city
});

export const loading = cities => ({
  type: weather.LOADING,
  payload: cities
});

export const loaded = cities => ({
  type: weather.LOADED,
  payload: cities
});

export const fetchCities = (...cities) => async dispatch => {
  try {
    dispatch(loading(cities));

    while (cities.length) {
      const response = await fetch(
        createForecastRequest(...cities.splice(0, 20))
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      if (Array.isArray(data.list)) {
        dispatch(addCities(data.list));
      }
    }
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(loaded(cities));
  }
};
