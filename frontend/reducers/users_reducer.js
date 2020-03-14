import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  REMOVE_USER
} from "../actions/users_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case REMOVE_USER:
      delete newState[action.user.id];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
