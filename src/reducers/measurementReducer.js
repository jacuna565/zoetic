import {
  LOAD_MEASUREMENTS_START,
  LOAD_MEASUREMENTS_SUCCESS,
  LOAD_MEASUREMENTS_FAILURE,
} from '../actions/types';

let initialState = {
  measurements: {},
  isLoading: false,
  error: null,
};

export default measurements = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEASUREMENTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_MEASUREMENTS_SUCCESS:
      return {
        ...state,
        measurements: action.payload,
        isLoading: false,
      };
    case LOAD_MEASUREMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
