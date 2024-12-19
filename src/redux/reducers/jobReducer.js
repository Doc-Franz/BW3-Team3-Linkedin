import { FILL_JOBS } from "../actions/jobActions";

const initialState = {
  content: []
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_JOBS:
      return {
        ...state,
        content: action.payload
      };

    default:
      return state;
  }
};

export default jobReducer;
