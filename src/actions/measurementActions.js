import {
  LOAD_MEASUREMENTS_START,
  LOAD_MEASUREMENTS_SUCCESS,
  LOAD_MEASUREMENTS_FAILURE,
} from './types';
import getLogoutClient from '../func/loggedOutClient';

const loadMeasurements = (callback) => async (dispatch, getState) => {
  dispatch({type: LOAD_MEASUREMENTS_START});
  const stranger = getLogoutClient();
  stranger
    .get('/measurements')
    .then((response) => {
      dispatch({type: LOAD_MEASUREMENTS_SUCCESS, payload: response.data.data});
    })
    .catch(function (error) {
      dispatch({type: LOAD_MEASUREMENTS_FAILURE, payload: error});
    });
};

export default {
  loadMeasurements,
};
