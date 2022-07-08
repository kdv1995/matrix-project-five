import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {
  rows: 0,
  columns: 0,
  cells: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROWS":
      return { ...state, rows: action.payload };
    case "SET_COLUMNS":
      return { ...state, columns: action.payload };
    case "SET_CELLS":
      return { ...state, cells: action.payload };
    default:
      return state;
  }
};

export const setRows = (payload) => ({ type: "SET_ROWS", payload });
export const setColumns = (payload) => ({ type: "SET_COLUMNS", payload });
export const setCells = (payload) => ({ type: "SET_CELLS", payload });

export const store = createStore(reducer, composeWithDevTools());
