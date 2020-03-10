import merge from "lodash/merge";

import {
  RECEIVE_COMMENT,
  RECEIVE_POST_COMMENTS,
  REMOVE_COMMENT
} from "../actions/comments_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;

  switch (action.type) {
    case RECEIVE_POST_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return merge({}, state, {
        [action.payload.comment.id]: action.payload.comment
      });
    // case REMOVE_COMMENT:
    //    newState = merge({},state)
    //    delete newState[action.commentId]
    //    return newState
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.comment.comment.id];
      return newState;
    default:
      return state;
  }
};
export default commentsReducer;
