import { searchCity } from "constants/actionTypes";
import { createSearchRequest } from "api/citiesSearchAPI";

export const setList = list => ({
  type: searchCity.SET_LIST,
  payload: list
});

export const fetchCityList = name => async (dispatch, getState) => {
  const data = await fetch(createSearchRequest(name));
  const parsed = await data.json();

  if (parsed.list) {
    dispatch(
      setList(
        parsed.list.filter(
          (city, index, list) =>
            !getState().localStorage.cities.includes(city.id)
        )
      )
    );
  }
};
