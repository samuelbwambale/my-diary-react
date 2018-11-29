import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_INITIATED,
  REGISTER_USER_ERROR,
} from '../../actions/types';
import UserReducer from '../../reducers/UserReducer';

describe('UserReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      registerUserSuccess: false,
      registerUserError: {},
      loading: false,
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
});
