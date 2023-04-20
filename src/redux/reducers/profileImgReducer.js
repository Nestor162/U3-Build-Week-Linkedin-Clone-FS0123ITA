import { SET_SHOWING } from "../actions";

const initialState = {
  isShowing: false
};

const experiencesReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOWING:
      return {
        ...state,
        isShowing: action.payload
      };

    default:
      return state;
  }
};

export default experiencesReducers;
