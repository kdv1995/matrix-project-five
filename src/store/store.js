import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { matrixReducer } from "./matrixReducer";

const rootReducer = combineReducers({
  matrix: matrixReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
