import { SEARCH_JOB } from "../actions/jobActions";

const initialState = {
  content: []
};

const searchProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOB:
      return {
        ...state,
        content: action.payload
      };

    default:
      return state;
  }
};

export default searchProfileReducer;
