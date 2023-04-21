import { ADD_POST_COMMENT, GET_POST_COMMENTS } from '../actions';

const initialState = {
	comments: [],
	addedComments: [],
};

const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POST_COMMENTS:
			return {
				...state,
				comments: action.payload,
			};
		case ADD_POST_COMMENT:
			return {
				...state,
				addedComments: [...state.addedComments, action.payload],
			};
		default:
			return state;
	}
};
export default commentReducer;
