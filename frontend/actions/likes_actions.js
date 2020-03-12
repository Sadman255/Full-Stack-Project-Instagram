import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = payload => ({
  type: RECEIVE_LIKE,
  payload
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const createLike = like => dispatch => {
  return LikeAPIUtil.createLike(like).then(like => {
    console.log("fake like >>", like);
    return dispatch(receiveLike(like));
  });
};
export const deleteLike = postId => dispatch =>
  LikeAPIUtil.deleteLike(postId).then(like => dispatch(removeLike(like)));
