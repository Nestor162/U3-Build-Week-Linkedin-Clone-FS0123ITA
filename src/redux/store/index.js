import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import postReducer from "../reducers/postReducer";
import experiencesReducers from "../reducers/experiencesReducers";
import profileImgReducer from "../reducers/profileImgReducer";
import jobsReducer from "../reducers/jobsReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoritesReducer from "../reducers/favoritesReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"]
};

const rootReducer = combineReducers({
  personalProfile: profileReducer,
  experienceList: experiencesReducers,
  postsList: postReducer,
  jobsList: jobsReducer,
  isShowing: profileImgReducer,
  favorites: favoritesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
