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

    const position = await getCurrentGeoPosition().catch(error => {
      throw new Error(error.message);
    });
    const { coords } = position;
    const { latitude: lat, longitude: lon } = coords;

    const response = await fetch(createForecastRequestByPosition(lat, lon));
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    dispatch(setCity(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(loaded());
  }
};
