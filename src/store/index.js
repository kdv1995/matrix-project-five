import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import MatrixReducer from 'store/reducers/MatrixReducer';

const rootReducer = combineReducers({
  storeMatrix: MatrixReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
