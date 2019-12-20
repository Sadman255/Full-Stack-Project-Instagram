// import { push } from 'react-router-redux';

import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

const removeUser = user => ({
    type: REMOVE_USER,
    user
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch => (
    UserApiUtil.fetchUsers()
        .then(users =>( dispatch(receiveAllUsers(users)))
))

export const fetchUser = (userId) => dispatch => (
    UserApiUtil.fetchUsers()
        .then(user => (dispatch(receiveUser(user)))
))

export const deleteUser = (id) => dispatch => (
    UserApiUtil.deleteUser(id)
        .then(() => (dispatch(removeUser(user)))
 ))

export const updateUser = (user) => dispatch => (
    UserApiUtil.updateUser(user)
        .then((user) => (dispatch(receiveUser(user)))
 ))
