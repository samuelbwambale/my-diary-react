import {
  FETCH_ALL_ENTRIES_SUCCESS,
  FETCH_ALL_ENTRIES_INITIATED,
  FETCH_ALL_ENTRIES_ERROR,
} from '../actions/types';

const initialState = {
  entriesPayload: [],
  fetchAllEntriesError: {},
  loading: false,
};

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ENTRIES_SUCCESS:
      return {
        ...state,
        entriesPayload: action.payload,
        loading: false,
      };
    case FETCH_ALL_ENTRIES_INITIATED:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_ALL_ENTRIES_ERROR:
      return {
        ...state,
        fetchAllEntriesError: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default entryReducer;
