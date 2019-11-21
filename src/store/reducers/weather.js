import { initialState } from "constants/initialState";
import { weather } from "constants/actionTypes";

export const weatherReducer = (
  state = initialState.weather,
  { type, payload }
) => {
  switch (type) {
    case weather.SET_CITIES: {
      return { cities: payload };
    }

    case weather.ADD_CITY: {
      const cities = Array.from(state.cities);
      const index = cities.findIndex(city => city.id === payload.id);

      if (index !== -1) {
        cities[index] = payload;
      } else {
        cities.push(payload);
      }

      return { cities };
    }

    case weather.REMOVE_CITY: {
      const cities = Array.from(state.cities);
      const index = cities.findIndex(city => city.id === payload.id);

      if (index !== -1) {
        cities.splice(index, 1);
      }

      return { cities };
    }

    default: {
      return state;
    }
  }
};
