import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import postReducer from "../reducers/postReducer";

const rootReducer = combineReducers({
  personalProfile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
  posts: postReducer,
});

export default store;
