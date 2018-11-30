import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_INITIATED,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_INITIATED,
  LOGIN_USER_ERROR,
} from '../../actions/types';
import UserReducer from '../../reducers/UserReducer';

describe('UserReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      registerUserSuccess: false,
      registerUserError: {},
      loading: false,
      isLoggedIn: false,
      loginUserError: {},
    };
  });

  it('should run initial state', () => {
    expect(UserReducer(initialState, {})).toEqual(initialState);
  });

  it('should add user when REGISTER_USER_SUCCESS is passed', () => {
    const action = {
      type: REGISTER_USER_SUCCESS,
      payload: true,
    };
    const currentState = UserReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      registerUserSuccess: true,
    });
  });

  it('should add an error when REGISTER_USER_ERROR is passed', () => {
    const errorData = 'This email is already used';
    const action = {
      type: REGISTER_USER_ERROR,
      payload: errorData,
    };
    const currentState = UserReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      registerUserError: errorData,
    });
  });

  it('should set the loader when REGISTER_USER_INITIATED is True', () => {
    const action = {
      type: REGISTER_USER_INITIATED,
      payload: true,
    };
    const currentState = UserReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should set isLoggedIn to true if login was successful', () => {
    const action = {
      type: LOGIN_USER_SUCCESS,
      payload: true,
    };
    const currentState = UserReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      isLoggedIn: true,
    });
  });

  it('should set the loader when LOGIN_USER_INITIATED is True', () => {
    const action = {
      type: LOGIN_USER_INITIATED,
      payload: true,
    };
    const currentState = UserReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should add an error when LOGIN_USER_ERROR is passed', () => {
    const errorData = 'Invalid username or password.';
    const action = {
      type: LOGIN_USER_ERROR,
      payload: errorData,
    };
    const currentState = UserReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loginUserError: errorData,
    });
  });
});
