import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import heroReducer from "../reducers/heroReducer";
import experienceReducer from "../reducers/experienceReducer";

const rootReducer = combineReducers({
  // hero: heroReducer,
  experience: experienceReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
