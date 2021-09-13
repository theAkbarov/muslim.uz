import { action_types } from "../constants/action_types";
const initialState = {
  times: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case action_types.SET_DATE:
      return {
        ...state,
        times: payload,
      };

    default:
      return state;
  }
};
