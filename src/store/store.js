import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import reducer from '../reducers/rootReducer';

const store = createStore(reducer, devToolsEnhancer());

export default store;
