export const initialState = {
  app: {
    error: null,
    isLoading: false
  },
  geoLocation: {
    city: null,
    isLoading: false
  },
  searchCity: {
    list: []
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
