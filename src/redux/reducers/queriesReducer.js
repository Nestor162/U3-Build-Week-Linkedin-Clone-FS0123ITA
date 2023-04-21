import { SEARCHED_QUERIES } from '../actions';

const initialState = {
	searchedQueries: [],
};

const queriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCHED_QUERIES:
			return {
				...state,
				searchedQueries: [...state.searchedQueries, action.payload],
			};
		default:
			return state;
	}
};
export default queriesReducer;
