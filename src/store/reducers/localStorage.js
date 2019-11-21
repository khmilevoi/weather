import { initialState } from "constants/initialState";
import { weather } from "constants/actionTypes";
import { setItem, NAME_OF_ITEM } from "api/localStorage";

const loadToLocalStorage = data => setItem(NAME_OF_ITEM, data);

const loadToLocalStorage = data =>
  setItem(process.env.LOCAL_STORAGE, JSON.stringify(data));

export const localStorageReducer = (
  state = initialState.localStorage,
  { type, payload }
) => {
  switch (type) {
    case weather.ADD_CITIES: {
      const cities = Array.from(state.cities);

      payload.forEach(city => {
        const id = city.id;

        if (!cities.includes(id)) {
          cities.push(id);
        }
      });
      loadToLocalStorage(cities);

      return { cities };
    }

    case weather.REMOVE_CITY: {
<<<<<<< HEAD
      const cities = Array.from(state.cities);
      const index = cities.indexOf(payload);

      if (index !== -1) {
        cities.splice(index, 1);
        loadToLocalStorage(cities);
      }
=======
      const cities = Array.from(state.cities).filter(city => city !== payload);
      loadToLocalStorage(cities);
>>>>>>> dev

      return { cities };
    }
    default: {
      return state;
    }
  }
};
