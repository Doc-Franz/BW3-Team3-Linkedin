import { FILL_HOMEPAGE } from "../actions/homepageActions";

const initialState = {
  content: []
};

const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_HOMEPAGE:
      return {
        ...state,
        content: action.payload
      };

    default:
      return state;
  }
};

export default homepageReducer;
