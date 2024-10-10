import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/rootReducer';
import favMiddleware from '../middleware/favMiddleware';

const enhancers = composeWithDevTools(applyMiddleware(favMiddleware));

const store = createStore(reducer, enhancers);

export default store;
