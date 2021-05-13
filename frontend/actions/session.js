import { signUp, login, logout } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const createNewUser = formUser => dispatch =>
  signUp(formUser)
    .then(user => {
      dispatch(receiveCurrentUser(user));
      dispatch(clearErrors());
    })
    .fail(err => dispatch(receiveErrors(err)));

export const loginUser = formUser => dispatch =>
  login(formUser)
    .then(user => {
      dispatch(receiveCurrentUser(user));
      dispatch(clearErrors());
    })
    .fail(err => dispatch(receiveErrors(err)));

export const logoutUser = () => dispatch =>
  logout().then(() => dispatch(logoutCurrentUser()));
