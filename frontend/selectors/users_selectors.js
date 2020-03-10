import { createSelector } from "@reduxjs/toolkit";

const getRoot = state => state.entities.users;

const getSessionId = state => state.session.id;

export const getCurrentUser = createSelector(
  getRoot,
  getSessionId,
  (users, sessionId) => users[sessionId]
);

export const getUsers = createSelector(getRoot, users => Object.values(users));
