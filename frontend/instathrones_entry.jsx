import React from "react";
import ReactDOM from "react-dom";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import Root from "./components/root";
import reducer from "./reducers/root_reducer";

const middleware = [
  ...getDefaultMiddleware()
  // process.env.NODE_ENV !== "production" && logger
].filter(Boolean);

const getStore = preloadedState =>
  configureStore({
    reducer,
    middleware,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production"
  });

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = getStore(preloadedState);
    delete window.currentUser;
  } else {
    store = getStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
