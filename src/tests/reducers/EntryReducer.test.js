import entryReducer from '../../reducers/EntryReducer';
import {
  FETCH_ALL_ENTRIES_SUCCESS,
  FETCH_ALL_ENTRIES_INITIATED,
} from '../../actions/types';

describe('entryReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      entriesPayload: [],
      fetchAllEntriesError: {},
      loading: false,
    };
  });

  it('should run initial state', () => {
    expect(entryReducer(initialState, {})).toEqual(initialState);
  });

  it('should return all entries of a user', () => {
    const action = {
      type: FETCH_ALL_ENTRIES_SUCCESS,
      payload: [{ description: 'Description', title: 'Title' }],
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      entriesPayload: action.payload,
    });
  });

  it('should set the loader when FETCH_ALL_ENTRIES_INITIATED is true', () => {
    const action = {
      type: FETCH_ALL_ENTRIES_INITIATED,
      payload: true,
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });
});
