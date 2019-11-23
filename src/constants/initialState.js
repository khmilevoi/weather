export const initialState = {
  app: {
    error: null,
    isLoading: false
  },
  searchCityPanel: {
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
