import { weather } from "constants/actionTypes";
import { createForecastRequest } from "api/WeatherAPI";
import { loading, setError, loaded } from "./app";

export const setCities = cities => ({
  type: weather.SET_CITIES,
  payload: cities
});

export const setCityStorage = storage => ({
  type: weather.SET_CITY_STORAGE,
  payload: storage
});

export const addCity = city => ({
  type: weather.ADD_CITY,
  payload: city
});

export const removeCity = city => ({
  type: weather.REMOVE_CITY,
  payload: city
});

export const updateCity = city => ({
  type: weather.UPDATE_CITY,
  payload: city
});

export const fetchCity = city => async dispatch => {
  dispatch(loading());

  const data = await fetch(createForecastRequest(city)).catch(error =>
    dispatch(setError(error))
  );
  const parsed = await data.json();
  dispatch(addCity([parsed]));

  dispatch(loaded());
};

export const fetchCities = cities => async dispatch => {
  dispatch(loading());

  const data = await fetch(createForecastRequest(...cities)).catch(error =>
    dispatch(setError(error))
  );
  const parsed = await data.json();

  if (Array.isArray(parsed)) {
    dispatch(setCities([parsed]));
  } else {
    dispatch(setCities(parsed.list));
  }

  dispatch(loaded());
};

export const fetchCityStorage = () => async dispatch => {
  dispatch(loading());

  const data = await import("static/city.list.json").catch(error =>
    dispatch(setError(error))
  );
  dispatch(setCityStorage(data));

  dispatch(loaded());
};
