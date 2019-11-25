import { initialState } from "constants/initialState";
import { app } from "constants/actionTypes";

export const appReducer = (state = initialState.app, { type, payload }) => {
  switch (type) {
    case app.SET_ERROR: {
      const errors = Array.from(state.errors);

      errors.unshift(payload);

      return { ...state, errors };
    }

    case app.LOADING: {
      return { ...state, isLoading: true };
    }

    case app.LOADED: {
      return { ...state, isLoading: false };
    }

    default: {
      return state;
    }
  }
};
