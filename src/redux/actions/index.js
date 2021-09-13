import { action_types } from "../constants/action_types";

export const set_date = (product) => {
  return {
    type: action_types.SET_DATE,
    payload: product,
  };
};
