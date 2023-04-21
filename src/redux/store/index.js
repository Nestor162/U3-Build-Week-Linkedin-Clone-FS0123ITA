import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from '../reducers/profileReducer';
import postReducer from '../reducers/postReducer';
import experiencesReducers from '../reducers/experiencesReducers';
import profileImgReducer from '../reducers/profileImgReducer';
import jobsReducer from '../reducers/jobsReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoritesReducer from '../reducers/favoritesReducer';
import queriesReducer from '../reducers/queriesReducer';
import followReducer from '../reducers/followReducer';
import commentReducer from '../reducers/commentReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['favorites', 'following', 'queries'],
};

const rootReducer = combineReducers({
	personalProfile: profileReducer,
	experienceList: experiencesReducers,
	postsList: postReducer,
	jobsList: jobsReducer,
	isShowing: profileImgReducer,
	favorites: favoritesReducer,
	following: followReducer,
	queries: queriesReducer,
	commentList: commentReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
