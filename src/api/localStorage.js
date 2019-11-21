export const NAME_OF_ITEM = "weather_cities";

export const getItem = key => JSON.parse(window.localStorage.getItem(key));

export const setItem = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const removeItem = key => window.localStorage.removeItem(key);
