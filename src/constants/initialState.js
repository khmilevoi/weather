export const initialState = {
  app: {
    errors: [],
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
