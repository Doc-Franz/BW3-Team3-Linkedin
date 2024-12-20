import { FILL_JOBS_MORE_CHANCE } from "../actions/jobActions";

const initialState = {
  content: []
};

const jobMoreChanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_JOBS_MORE_CHANCE:
      return {
        ...state,
        content: action.payload
      };

    default:
      return state;
  }
};

export default jobMoreChanceReducer;
