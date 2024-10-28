import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/rootReducer';
import favMiddleware from '../middleware/favMiddleware';
import authMiddleware from '../middleware/authMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(favMiddleware, authMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;
