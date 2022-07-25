import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { matrixReducer } from "./matrixReducer";

const rootReducer = combineReducers({
  storeMatrix: matrixReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
