import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_INITIATED,
  REGISTER_USER_ERROR,
} from '../actions/types';

const initialState = {
  registerUserSuccess: false,
  registerUserError: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUserSuccess: action.payload,
        loading: false,
      };
    case REGISTER_USER_INITIATED:
      return {
        ...state,
        loading: action.payload,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        registerUserError: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
