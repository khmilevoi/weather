export const initialState = {
  app: {
    error: null,
    isLoading: false
  },
  modalPanel: {
    opened: false,
    modal: ""
  },
  searchCity: {
    list: []
  },
  currentCity: {
    city: null,
    isLoading: false,
    list: [],
    opened: false
  },
  weather: {
    cities: []
  },
  localStorage: {
    cities: []
  }
};
