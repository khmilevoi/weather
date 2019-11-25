import { initialState } from "constants/initialState";
import { geoLocation } from "constants/actionTypes";

export const geoLocationReducer = (
  state = initialState.geoLocation,
  { type, payload }
) => {
  switch (type) {
    case geoLocation.SET: {
      return {
        ...state,
        city: payload
      };
    }

    case geoLocation.LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }

    case geoLocation.LOADED: {
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
