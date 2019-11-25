import { currentCity } from "constants/actionTypes";
import { createHourlyForecastRequest } from "api/WeatherAPI";
import { setError } from "./app";

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

    const currentCity =
      getState().weather.cities.find(item => item.id === city) || null;
    dispatch(setCity(currentCity));

    const data = await fetch(createHourlyForecastRequest(city));
    const parsed = await data.json();
    dispatch(setList(parsed.list.slice(0, 6)));

    dispatch(loaded());
  } catch (error) {
    dispatch(setError(error));
  }
};
