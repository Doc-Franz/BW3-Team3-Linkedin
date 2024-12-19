import { combineReducers, configureStore } from "@reduxjs/toolkit";
import heroReducer from "../reducers/heroReducer";
import experienceReducer from "../reducers/experienceReducer";
import homepageReducer from "../reducers/homepageReducer";
import sideBarRightReducer from "../reducers/SideBarRightReducer";

const rootReducer = combineReducers({
  hero: heroReducer,
  experience: experienceReducer,
  homepage: homepageReducer,
  sideBarRightReducer: sideBarRightReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
