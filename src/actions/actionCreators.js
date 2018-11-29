import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_INITIATED,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_INITIATED,
  LOGIN_USER_ERROR,
} from './types';

export const registerUserSuccess = payload => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserInitiated = payload => ({
  type: REGISTER_USER_INITIATED,
  payload,
});

export const registerUserError = payload => ({
  type: REGISTER_USER_ERROR,
  payload,
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserInitiated = payload => ({
  type: LOGIN_USER_INITIATED,
  payload,
});

export const loginUserError = payload => ({
  type: LOGIN_USER_ERROR,
  payload,
});
