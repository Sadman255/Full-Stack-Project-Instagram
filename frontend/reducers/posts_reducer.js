import merge from "lodash/merge";
import { defaultTo } from "lodash";
import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from "../actions/posts_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/likes_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comments_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    case RECEIVE_COMMENT:
      newState[action.payload.comment.post_id].commentIds.push(
        action.payload.comment.id
      );

      return newState;
    case RECEIVE_LIKE:
      defaultTo(newState[action.like.post_id].likers, []).push(
        action.like.user_id
      );
      //  newState[action.like.post_id].likers.push(action.like.user_id)
      return newState;
    //  case REMOVE_LIKE:
    //      newState[action.like.post_id].likers.filter(userId => userId !== action.like.user_id);
    //      return newState

    default:
      return state;
  }
};
export default postsReducer;
