import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  matrix: [],
};

const SET_MATRIX = "SET_MATRIX";
const SET_INCREMENT = "SET_INCREMENT";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATRIX:
      return { ...state, matrix: action.payload };
    case SET_INCREMENT:
      return {
        ...state,
        matrix: state.matrix.map((item) =>
          item.map((x) =>
            x.id === action.payload ? { ...x, amount: x.amount + 1 } : x
          )
        ),
      };
    default:
      return state;
  }
};

export const setMatrix = (payload) => ({ type: SET_MATRIX, payload });
export const setIncrement = (payload) => ({ type: SET_INCREMENT, payload });
export const store = createStore(reducer, composeWithDevTools());
