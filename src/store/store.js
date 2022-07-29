import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { matrixReducer } from './matrixReducer';

const rootReducer = combineReducers({
  storeMatrix: matrixReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
