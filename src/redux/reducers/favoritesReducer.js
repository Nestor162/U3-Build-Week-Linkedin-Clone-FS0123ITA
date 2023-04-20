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
      const index = state.favorites.findIndex(item => item.id === action.payload);
      return {
        ...state,
        favorites: state.favorites.filter((item, i) => i !== index)
      };

    default:
      return state;
  }
};

export default experiencesReducers;
