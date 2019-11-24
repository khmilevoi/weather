import { initialState } from "constants/initialState";
import { modalPanel } from "constants/actionTypes";

export const modalPanelReducer = (
  state = initialState.modalPanel,
  { type, payload }
) => {
  switch (type) {
    case modalPanel.OPEN: {
      return {
        ...state,
        opened: true,
        modal: payload
      };
    }

    case modalPanel.CLOSE: {
      return {
        ...state,
        opened: false,
        modal: ""
      };
    }

    default: {
      return state;
    }
  }
};
