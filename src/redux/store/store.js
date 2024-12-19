import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroReducer from "../reducers/heroReducer";
import experienceReducer from "../reducers/experienceReducer";
import homepageReducer from "../reducers/homepageReducer";
import jobReducer from "../reducers/jobReducer";
import sideBarRightReducer from "../reducers/SideBarRightReducer";
import jobMoreChanceReducer from "../reducers/JobMoreChanceReducer";

const rootReducer = combineReducers({
  hero: heroReducer,
  experience: experienceReducer,
  homepage: homepageReducer,
  jobs: jobReducer,
  jobMoreChance: jobMoreChanceReducer,
  sideBarRightReducer: sideBarRightReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
