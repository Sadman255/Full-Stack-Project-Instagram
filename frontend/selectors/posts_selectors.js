import { createSelector } from "@reduxjs/toolkit";
import { defaultTo, size } from "lodash";

import { getCommentsByIds } from "./comments_selector";
import { getSessionId } from "./users_selectors";

const getRoot = state => state.entities.posts;

const getId = (_, { id }) => id;

export const getPosts = state => {
  const posts = getRoot(state);

  return Object.values(posts)
    .reverse()
    .map(post => {
      const comments = getCommentsByIds(state, {
        ids: post.commentIds
      });
      return { ...post, comments };
    });
};

export const getPostById = createSelector(getPosts, getId, (posts, id) =>
  posts.find(post => post.id === id)
);

export const getIsLikedPost = createSelector(
  getPostById,
  getSessionId,
  (post, sessionId) => {
    const userLike = defaultTo(post && post.likers, []).find(
      like => like.user_id === sessionId
    );
    return Boolean(userLike);
  }
);

export const getNumberOfLikes = createSelector(getPostById, post =>
  size(post.likers)
);
