import { initialState } from "constants/initialState";
import { app } from "constants/actionTypes";

export const appReducer = (state = initialState.app, { type, payload }) => {
  switch (type) {
    case app.SET_ERROR: {
      return {
        ...state,
        error: payload
      };
    }

    case app.LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }

    case app.LOADED: {
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
