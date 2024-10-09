import { combineReducers } from 'redux';

import markReducer from './markReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  mark: markReducer,
  user: userReducer,
});

export default rootReducer;
