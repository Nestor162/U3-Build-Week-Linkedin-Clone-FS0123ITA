import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from '../reducers/profileReducer';
import postReducer from '../reducers/postReducer';
import experiencesReducers from '../reducers/experiencesReducers';
import profileImgReducer from '../reducers/profileImgReducer';
import jobsReducer from '../reducers/jobsReducer';
import commentReducer from '../reducers/commentReducer';

const rootReducer = combineReducers({
	personalProfile: profileReducer,
	experienceList: experiencesReducers,
	postsList: postReducer,
	jobsList: jobsReducer,
	isShowing: profileImgReducer,
	commentList: commentReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
