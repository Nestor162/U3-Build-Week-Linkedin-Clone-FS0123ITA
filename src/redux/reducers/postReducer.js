import { ADD_POST, GET_POSTS, POST_IMAGE } from '../actions';

const initialState = {
	posts: [],
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, action.payload],
			};
		case POST_IMAGE:
			return {
				...state,
				posts: [...state.posts, action.payload],
			};
		default:
			return state;
	}
};
export default postReducer;
