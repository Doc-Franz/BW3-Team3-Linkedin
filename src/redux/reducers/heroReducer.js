import { FILL_PROFILE_HERO } from "../actions";

const initialState = {
  content: null
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_PROFILE_HERO:
      return {
        ...state,
        content: action.payload
      };

    default:
      return state;
  }
};

export default heroReducer;
