export const initialState = {
  app: {
    error: null,
    isLoading: 0
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
