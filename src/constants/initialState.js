export const initialState = {
  app: {
    error: null,
    isLoading: 0
  },
  addCityPanel: {
    opened: false
  },
  currentCity: {
    city: null,
    isLoading: false,
    list: []
  },
  weather: {
    cities: []
  },
  localStorage: {
    cities: []
  }
};
