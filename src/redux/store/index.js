import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import experiencesReducers from "../reducers/experiencesReducers";

const rootReducer = combineReducers({
  personalProfile: profileReducer,
  experienceList: experiencesReducers
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
