import { FILL_HOMEPAGE } from "../actions/homepageActions";

const initialState = {};

const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_HOMEPAGE:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default homepageReducer;
