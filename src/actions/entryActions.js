import { toast } from 'react-toastify';
import {
  fetchAllEntriesSuccess,
  fetchAllEntriesInitiated,
} from './actionCreators';

import axiosInstance from '../config/axiosInstance';

export const fetchAllEntries = () => dispatch => {
  toast.dismiss();
  dispatch(fetchAllEntriesInitiated(true));
  axiosInstance
    .get('/api/v1/entries')
    .then((response) => {
      dispatch(fetchAllEntriesSuccess(response.data.entries));
    });
};

export default fetchAllEntries;
