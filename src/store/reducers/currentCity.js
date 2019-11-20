import { initialState } from "constants/initialState";
import { currentCity } from "constants/actionTypes";

export const currentCityReducer = (
  state = initialState.currentCity,
  { type, payload }
) => {
  switch (type) {
    case currentCity.SET: {
      return {
        city: payload
      };
    }

    case currentCity.SET_LIST: {
      return {
        list: payload
      };
    }

    case currentCity.LOADING: {
      return {
        isLoading: true
      };
    }

    case currentCity.LOADED: {
      return {
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
};
