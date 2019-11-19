export const initialState = {
  app: {
    error: null,
    isLoading: false
  },
  currentCity: {
    city: null,
    isLoading: false,
    list: []
  },
  weather: {
    cities: [],
    cityStorage: []
  },
  localStorage: {
    cities: []
  }
};
