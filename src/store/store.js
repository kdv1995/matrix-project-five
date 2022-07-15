import { legacy_createStore as createStore } from "redux";

const initialState = {
  matrix: [],
};
console.log(initialState.matrix);
const SET_MATRIX = "SET_MATRIX";
const SET_INCREMENTED_CELL = "INCREMENTED_CELL";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATRIX:
      return { ...state, matrix: action.payload };
    case SET_INCREMENTED_CELL: {
      return { ...state, matrix: action.payload };
    }
    default:
      return state;
  }
};
export const setMatrix = (payload) => ({ type: SET_MATRIX, payload });
export const setIncrement = (payload) => ({
  type: SET_INCREMENTED_CELL,
  payload,
});
export const store = createStore(reducer);
