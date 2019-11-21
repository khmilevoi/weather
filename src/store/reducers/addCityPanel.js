import { initialState } from "constants/initialState";
import { addCityPanel } from "constants/actionTypes";

export const addCityPanelReducer = (
  state = initialState.addCityPanel,
  { type }
) => {
  switch (type) {
    case addCityPanel.OPEN: {
      return {
        opened: true
      };
    }
    case addCityPanel.CLOSE: {
      return {
        opened: false
      };
    }
    default: {
      return state;
    }
  }
};
