import { legacy_createStore as createStore } from "redux";

const initialState = {
  rows: 0,
  columns: 0,
  cells: 0,
  matrix: [],
};

const SET_ROWS = "SET_ROWS";
const SET_COLUMNS = "SET_COLUMNS";
const SET_CELLS = "SET_CELLS";
const SET_MATRIX = "SET_MATRIX";
// const INCREMENTED_CELLS = "INCREMENTED_CELLS";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROWS:
      return { ...state, rows: action.payload };
    case SET_COLUMNS:
      return { ...state, columns: action.payload };
    case SET_CELLS:
      return { ...state, cells: action.payload };
    case SET_MATRIX:
      return { ...state, matrix: action.payload };
    // case INCREMENTED_CELLS:
    //   return { ...state, matrix: [action.payload + 1] };
    default:
      return state;
  }
};

export const setRowsDispatch = (payload) => ({ type: SET_ROWS, payload });
export const setColumnsDispatch = (payload) => ({ type: SET_COLUMNS, payload });
export const setCellsDispatch = (payload) => ({ type: SET_CELLS, payload });
export const setMatrixDispatch = (payload) => ({ type: SET_MATRIX, payload });
// export const setIncrementedCells = (payload) => ({
//   type: INCREMENTED_CELLS,
//   payload,
// });
export const store = createStore(reducer);
