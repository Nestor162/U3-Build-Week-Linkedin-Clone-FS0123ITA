import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import postReducer from "../reducers/postReducer";
import experiencesReducers from "../reducers/experiencesReducers";
import profileImgReducer from "../reducers/profileImgReducer";

const rootReducer = combineReducers({
  personalProfile: profileReducer,
  experienceList: experiencesReducers,
  postsList: postReducer,
  isShowing: profileImgReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
