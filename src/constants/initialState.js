export const initialState = {
  app: {
    error: null,
    isLoading: true
  },
  geoLocation: {
    city: null,
    isLoading: true
  },
  searchCity: {
    list: []
  },
  currentCity: {
    city: null,
    isLoading: true,
    list: []
  },
  weather: {
    cities: []
  },
  localStorage: {
    cities: []
  }
};
