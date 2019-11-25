import { geoLocation } from "constants/actionTypes";
import { getCurrentGeoPosition } from "api/GeoAPI";
import { createForecastRequestByPosition } from "api/WeatherAPI";
import { setError } from "./app";

export const setCity = city => ({
  type: geoLocation.SET,
  payload: city
});

export const loading = () => ({
  type: geoLocation.LOADING
});

export const loaded = () => ({
  type: geoLocation.LOADED
});

export const fetchGeoLocation = () => async dispatch => {
  try {
    dispatch(loading());

    const position = await getCurrentGeoPosition();
    const { coords } = position;
    const { latitude: lat, longitude: lon } = coords;

    const city = await fetch(createForecastRequestByPosition(lat, lon));
    const parsed = await city.json();

    dispatch(setCity(parsed));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(loaded());
  }
};
