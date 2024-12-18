import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroReducer from "../reducers/heroReducer";
import experienceReducer from "../reducers/experienceReducer";
import homepageReducer from "../reducers/homepageReducer";
import searchJobReducer from "../reducers/searchJobReducer";

const rootReducer = combineReducers({
  hero: heroReducer,
  experience: experienceReducer,
  homepage: homepageReducer,
  searchJob: searchJobReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
