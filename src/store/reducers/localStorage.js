import { initialState } from "constants/initialState";
import { weather } from "constants/actionTypes";
import { setItem } from "api/localStorage";

export const localStorageReducer = (
  state = initialState.localStorage,
  { type, payload }
) => {
  switch (type) {
    case weather.ADD_CITY: {
      const cities = Array.from(state.cities);
      const id = payload.id;

      if (!cities.includes(id)) {
        cities.push(id);
        setItem(process.env.LOCAL_STORAGE, JSON.stringify(cities));
      }

      return { cities };
    }

    case weather.REMOVE_CITY: {
      const cities = Array.from(state.cities);
      const index = cities.indexOf(payload);

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
