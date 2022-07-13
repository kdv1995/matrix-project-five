import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {
  rows: 0,
  columns: 0,
  cells: 0,
  columnsIndices: [],
  nearestCells: [],
};

const GET_ROWS = "GET_ROWS";
const GET_COLUMNS = "GET_COLUMNS";
const GET_CELLS = "GET_CELLS";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROWS:
      return { ...state, rows: action.payload };
    case GET_COLUMNS:
      return { ...state, columns: action.payload };
    case GET_CELLS:
      return { ...state, cells: action.payload };
    default:
      return state;
  }
};

export const getRows = (payload) => ({ type: GET_ROWS, payload });
export const getColumns = (payload) => ({ type: GET_COLUMNS, payload });
export const getCells = (payload) => ({ type: GET_CELLS, payload });

export const store = createStore(reducer, composeWithDevTools());
