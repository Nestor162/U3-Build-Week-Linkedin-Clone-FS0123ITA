import { REMOVE_FOLLOW, SET_FOLLOW } from "../actions";

const initialState = {
  following: []
};

const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOLLOW:
      return {
        ...state,
        following: [...state.following, action.payload]
      };
    case REMOVE_FOLLOW:
      return {
        ...state,
        following: state.following.filter(user => {
          console.log(user._id, action.payload._id);
          return user._id !== action.payload._id;
        })
      };

    default:
      return state;
  }
};

export default followReducer;
