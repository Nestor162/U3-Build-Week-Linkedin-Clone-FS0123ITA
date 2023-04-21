import { ADD_POST, GET_POSTS, GET_POST_COMMENTS, POST_IMAGE } from '../actions';

const initialState = {
	posts: [],
	comments: [],
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
		case GET_POST_COMMENTS:
			return {
				...state,
				comments: action.payload,
			};
		default:
			return state;
	}
};
export default postReducer;
