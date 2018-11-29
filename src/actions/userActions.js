import { toast } from 'react-toastify';
import {
  registerUserSuccess,
  registerUserInitiated,
  registerUserError,
} from './actionCreators';

import axiosInstance from '../config/axiosInstance';

export const registerUser = (postData) => dispatch => {
  toast.dismiss();
  dispatch(registerUserInitiated(true));
  axiosInstance
    .post('api/v1/auth/signup', postData)
    .then((response) => {
      dispatch(registerUserSuccess(true));
      toast.success(response.data.message, { autoClose: 3500, hideProgressBar: true });
    })
    .catch((error) => {
      dispatch(registerUserError(error.response.data.message));
      toast.error(error.response.data.message, { autoClose: false, hideProgressBar: true });
    });
};

export default registerUser;
