import {combineReducers} from 'redux';
import measurementReducer from './measurementReducer';

const rootReducer = combineReducers({
  measurementReducer,
});

export default rootReducer;
