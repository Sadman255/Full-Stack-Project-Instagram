import { createSelector } from "@reduxjs/toolkit";

const getRoot = state => state.entities.comments;

const getId = (_, { id }) => id;
const getIds = (_, { ids = [] }) => ids;

export const getComments = createSelector(getRoot, comments =>
  Object.values(comments)
);

export const getCommentById = createSelector(
  getRoot,
  getId,
  (comments, id) => comments[id]
);

export const getCommentsByIds = createSelector(
  getRoot,
  getIds,
  (comments, ids) => ids.map(id => comments[id]).filter(Boolean)
);
