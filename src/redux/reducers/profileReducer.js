import {
	SET_PROFILE_AREA,
	SET_PROFILE_BIO,
	SET_PROFILE_EMAIL,
	SET_PROFILE_ID,
	SET_PROFILE_IMG,
	SET_PROFILE_LASTNAME,
	SET_PROFILE_NAME,
	SET_PROFILE_TITLE,
	SET_PROFILE_USERNAME,
} from '../actions';

const initialState = {
	name: '',
	surname: '',
	email: '',
	bio: '',
	title: '',
	area: '',
	username: '',
	id: '',
	img: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE_NAME:
			return {
				...state,
				name: action.payload,
			};
		case SET_PROFILE_LASTNAME:
			return {
				...state,
				surname: action.payload,
			};
		case SET_PROFILE_EMAIL:
			return {
				...state,
				email: action.payload,
			};
		case SET_PROFILE_BIO:
			return {
				...state,
				bio: action.payload,
			};
		case SET_PROFILE_TITLE:
			return {
				...state,
				title: action.payload,
			};
		case SET_PROFILE_AREA:
			return {
				...state,
				area: action.payload,
			};
		case SET_PROFILE_USERNAME:
			return {
				...state,
				username: action.payload,
			};
		case SET_PROFILE_ID:
			return {
				...state,
				id: action.payload,
			};
		case SET_PROFILE_IMG:
			return {
				...state,
				img: action.payload,
			};
		default:
			return state;
	}
};

export default profileReducer;
