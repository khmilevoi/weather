import { initialState } from "constants/initialState";
import { weather } from "constants/actionTypes";

export const weatherReducer = (
  state = initialState.weather,
  { type, payload }
) => {
  switch (type) {
    case weather.LOADING: {
      const cities = Array.from(state.cities);

      payload.forEach(id => {
        const index = cities.findIndex(city => city.id === id);

        if (index !== -1) {
          cities[index].isLoading = true;
        }
      });

      return { ...state, cities };
    }

    case weather.LOADED: {
      const cities = Array.from(state.cities);

      payload.forEach(id => {
        const index = cities.findIndex(city => city.id === id);

        if (index !== -1) {
          cities[index].isLoading = false;
        }
      });

      return { ...state, cities };
    }

    case weather.ADD_CITIES: {
      const cities = Array.from(state.cities);

      payload.forEach(newCity => {
        const index = cities.findIndex(city => city.id === newCity.id);

        if (index !== -1) {
          cities[index] = newCity;
        } else {
          cities.unshift(newCity);
        }
      });

      return { ...state, cities };
    }

    case weather.REMOVE_CITY: {
<<<<<<< HEAD
      const cities = Array.from(state.cities);
      const index = cities.findIndex(city => city.id === payload.id);

      if (index !== -1) {
        cities.splice(index, 1);
      }
=======
      const cities = Array.from(state.cities).filter(
        city => city.id !== payload
      );
>>>>>>> dev

      return { ...state, cities };
    }

    default: {
      return state;
    }
  }
};
