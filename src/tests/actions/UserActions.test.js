import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  registerUser,
} from '../../actions/userActions';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_INITIATED,
  REGISTER_USER_ERROR,
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

  it('should not register a user with invalid email', async () => {
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
});
