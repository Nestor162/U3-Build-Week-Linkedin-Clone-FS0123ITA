import { ADD_POST, GET_POSTS, POST_IMAGE } from "../actions";

const initialState = {
  post: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        post: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        post: [...state.post, action.payload],
      };
    case POST_IMAGE:
      return {
        ...state,
        post: [...state.post, action.payload],
      };

    default:
      return state;
  }
};
export default postReducer;
