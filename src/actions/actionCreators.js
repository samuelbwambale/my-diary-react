import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_INITIATED,
  REGISTER_USER_ERROR,
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
