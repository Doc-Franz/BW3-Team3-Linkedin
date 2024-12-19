import {
  FILL_PROFILE_ASIDE,
  UPDATE_PROFILE_ASIDE,
} from "../actions/SideBarRightAction";

const initialState = {
  content: null,
};

const sideBarRightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_PROFILE_ASIDE:
      return {
        ...state,
        content: action.payload,
      };

    case UPDATE_PROFILE_ASIDE:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default sideBarRightReducer;
