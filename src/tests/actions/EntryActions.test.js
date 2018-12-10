import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../config/axiosInstance';
import {
  fetchAllEntries,
} from '../../actions/entryActions';
import {
  FETCH_ALL_ENTRIES_SUCCESS,
  FETCH_ALL_ENTRIES_INITIATED,
} from '../../actions/types';

let store;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
const middleware = [thunk];
const mock = new MockAdapter(axiosInstance);
const mockStore = configureMockStore(middleware);

beforeEach(() => {
  store = mockStore({});
});

describe('entryActions', () => {
  it('should return all entries of a user', async () => {
    const response_data = {
      entries: [
        {
          title: 'Title',
          description: 'Description',
        },
      ],
    };

    mock.onGet('/api/v1/entries')
      .reply(200, response_data);
    fetchAllEntries()(store.dispatch);

    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { payload: true, type: FETCH_ALL_ENTRIES_INITIATED },
        {
          payload: [{ description: 'Description', title: 'Title' }], type: FETCH_ALL_ENTRIES_SUCCESS,
        }],
    );
  });
});
