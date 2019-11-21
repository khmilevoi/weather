import { initialState } from "constants/initialState";
import { searchCityPanel } from "constants/actionTypes";

export const searchCityPanelReducer = (
  state = initialState.searchCityPanel,
  { type }
) => {
  switch (type) {
    case searchCityPanel.OPEN: {
      return {
        opened: true
      };
    }

    case searchCityPanel.CLOSE: {
      return {
        opened: false
      };
    }

    default: {
      return state;
    }
  }
};
