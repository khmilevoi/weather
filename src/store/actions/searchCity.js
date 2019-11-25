import { searchCity } from "constants/actionTypes";
import { createSearchRequest } from "api/citiesSearchAPI";
import { setError } from "./app";

export const setList = list => ({
  type: searchCity.SET_LIST,
  payload: list
});

export const fetchCityList = name => async (dispatch, getState) => {
  try {
    const data = await fetch(createSearchRequest(name));
    const parsed = await data.json();

    dispatch(
      setList(
        parsed.list.filter(
          (city, index, list) =>
            !getState().localStorage.cities.includes(city.id)
        )
      )
    );
  } catch (error) {
    dispatch(setError(error));
  }
};
