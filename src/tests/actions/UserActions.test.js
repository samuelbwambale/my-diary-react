import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  registerUser,
  loginUser,
} from '../../actions/userActions';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_INITIATED,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_INITIATED,
  LOGIN_USER_ERROR,
} from '../../actions/types';
import axiosInstance from '../../config/axiosInstance';

describe('userAction', () => {
  let store;
  let mock;
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance);
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
  });

  it('should register a user', async () => {
    const response_data = {
      message: 'Account successfully created',
      status: 'success',
    };
    mock.onPost('api/v1/auth/signup').reply(201, response_data);
    registerUser()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: REGISTER_USER_INITIATED, payload: true },
        { type: REGISTER_USER_SUCCESS, payload: true },
      ],
    );
  });

  it('should not register a user with invalid email or password', async () => {
    const response_data = {
      message: 'Provided email is not a valid email address',
      status: 'failed',
    };
    mock.onPost('api/v1/auth/signup').reply(400, response_data);
    registerUser()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: REGISTER_USER_INITIATED, payload: true },
        { type: REGISTER_USER_ERROR, payload: response_data.message },
      ],
    );
  });

  it('should login a user', async () => {
    const response_data = {
      message: 'Account successfully created',
      status: 'success',
      token: 'sample-token',
    };
    mock.onPost('api/v1/auth/login').reply(200, response_data);
    loginUser(response_data)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: LOGIN_USER_INITIATED, payload: true },
        { type: LOGIN_USER_SUCCESS, payload: true },
      ],
    );
  });

  it('should not login a user without a valid email and password', async () => {
    const response_data = {
      message: 'Invalid username or password.',
      status: 'failed',
    };
    mock
      .onPost('api/v1/auth/login')
      .reply(401, response_data);
    loginUser(response_data)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: LOGIN_USER_INITIATED, payload: true },
      { type: LOGIN_USER_ERROR, payload: response_data.message },
    ]);
  });
});
