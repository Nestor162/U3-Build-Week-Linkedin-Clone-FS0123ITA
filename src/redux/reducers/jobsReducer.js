import { GET_JOBS, GET_SEARCHED_JOBS, SEARCHED_QUERIES } from '../actions';

const initialState = {
	jobs: [],
	searchedJobs: [],
	searchedQueries: [],
};

const jobsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_JOBS:
			return {
				...state,
				jobs: action.payload,
			};
		case GET_SEARCHED_JOBS:
			return {
				...state,
				searchedJobs: action.payload,
			};
		case SEARCHED_QUERIES:
			return {
				...state,
				searchedQueries: [...state.searchedQueries, action.payload],
			};
		default:
			return state;
	}
};
export default jobsReducer;
