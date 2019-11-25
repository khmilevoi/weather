import { currentCity } from "constants/actionTypes";
import { createHourlyForecastRequest } from "api/WeatherAPI";
import { setError } from "./app";
import { fetchCities } from "./weather";

export const setCity = city => ({
  type: currentCity.SET,
  payload: city
});

export const loading = () => ({
  type: currentCity.LOADING
});

export const loaded = () => ({
  type: currentCity.LOADED
});

export const setList = list => ({
  type: currentCity.SET_LIST,
  payload: list
});

export const fetchHourlyForecast = city => async (dispatch, getState) => {
  try {
    dispatch(loading());

    await dispatch(fetchCities(city));

    const currentCity = getState().weather.cities.find(
      item => item.id === city
    );
    dispatch(setCity(currentCity));

    const response = await fetch(createHourlyForecastRequest(city));
    const data = await response.json();

    if (!response.ok) {
      throw new Error(response.message);
    }

    dispatch(setList(data.list.slice(0, 6)));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(loaded());
  }
};
