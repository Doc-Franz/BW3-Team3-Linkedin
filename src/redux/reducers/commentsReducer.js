const SET_COMMENTS = "SET_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_COMMENT = "UPDATE_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const initialState = {
  comments: {}
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.postId]: action.payload.comments
        }
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.postId]: [...(state.comments[action.payload.postId] || []), action.payload.comment]
        }
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.postId]: state.comments[action.payload.postId].map((comment) =>
            comment._id === action.payload.comment._id ? action.payload.comment : comment
          )
        }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.postId]: state.comments[action.payload.postId].filter((comment) => comment._id !== action.payload.commentId)
        }
      };
    default:
      return state;
  }
};

export default commentsReducer;

export const setComments = (postId, comments) => ({
  type: SET_COMMENTS,
  payload: { postId, comments }
});

export const addCommentAction = (postId, comment) => ({
  type: ADD_COMMENT,
  payload: { postId, comment }
});

export const updateCommentAction = (postId, comment) => ({
  type: UPDATE_COMMENT,
  payload: { postId, comment }
});

export const deleteCommentAction = (postId, commentId) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentId }
});
