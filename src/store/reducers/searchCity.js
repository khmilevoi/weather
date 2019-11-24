import { initialState } from "constants/initialState";
import { searchCity } from "constants/actionTypes";

export const searchCityReducer = (
  state = initialState.searchCity,
  { type, payload }
) => {
  switch (type) {
    case searchCity.SET_LIST: {
      return {
        ...state,
        list: payload
      };
    }

    default: {
      return state;
    }
  }
};
