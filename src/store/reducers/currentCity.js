import { initialState } from "constants/initialState";
import { currentCity } from "constants/actionTypes";

export const currentCityReducer = (
  state = initialState.currentCity,
  { type, payload }
) => {
  switch (type) {
    case currentCity.SET: {
      return {
        ...state,
        city: payload
      };
    }

    case currentCity.SET_LIST: {
      return {
        ...state,
        list: payload
      };
    }

    case currentCity.LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }

    case currentCity.LOADED: {
      return {
        ...state,
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
};
