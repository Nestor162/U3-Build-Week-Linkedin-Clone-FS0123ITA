import { REMOVE_FAVORITE, SET_FAVORITE } from "../actions";

const initialState = {
  favorites: []
};

const experiencesReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case REMOVE_FAVORITE:
      console.log(action.payload);
      return {
        ...state,
        favorites: state.favorites.filter(jobId => {
          console.log(jobId);
          return jobId !== action.payload;
        })
      };

    default:
      return state;
  }
};

export default experiencesReducers;
