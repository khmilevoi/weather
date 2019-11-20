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
  type: currentCity.LOADING
});

export const setList = list => ({
  type: currentCity.SET_LIST,
  payload: list
});

export const fetchHourlyForecast = city => async dispatch => {
  dispatch(loading());

  const data = await fetch(createHourlyForecastRequest(city)).catch(error =>
    dispatch(setError(error))
  );
  const parsed = await data.json();
  dispatch(setList(parsed.list));

  dispatch(loaded());
};
