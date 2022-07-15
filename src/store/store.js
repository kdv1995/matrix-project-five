import { legacy_createStore as createStore } from "redux";

const initialState = {
  matrix: [],
};

const SET_MATRIX = "SET_MATRIX";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATRIX:
      return { ...state, matrix: action.payload };
    default:
      return state;
  }
};
export const setMatrixDispatch = (payload) => ({ type: SET_MATRIX, payload });

export const store = createStore(reducer);
