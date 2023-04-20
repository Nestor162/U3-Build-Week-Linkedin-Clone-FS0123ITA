import { GET_EXPERIENCES, SET_LOADING } from "../actions";

const initialState = {
  isLoading: true,
  experiences: [],
  experienceImg: ""
};

const experiencesReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
};

export default experiencesReducers;
