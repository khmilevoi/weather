import { app } from "constants/actionTypes";

export const setError = error => ({
  type: app.SET_ERROR,
  payload: error
});

export const loading = () => ({
  type: app.LOADING
});

export const loaded = () => ({
  type: app.LOADED
});
