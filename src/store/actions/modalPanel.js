import { modalPanel } from "constants/actionTypes";

export const open = modal => ({
  type: modalPanel.OPEN,
  payload: modal
});

export const close = () => ({
  type: modalPanel.CLOSE
});
