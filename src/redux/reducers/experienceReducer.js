export const SET_EXPERIENCES = "SET_EXPERIENCES";

const initialState = {
  experiences: []
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload
      };
    default:
      return state;
  }
};

export default experienceReducer;
