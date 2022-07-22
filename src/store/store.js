import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  matrix: [],
  closestCells: 0,
  hoveredValue: {},
};

const SET_MATRIX = "SET_MATRIX";
const SET_INCREMENT = "SET_INCREMENT";
const SET_CLOSEST_CELLS = "SET_CLOSEST_CELLS";
const SET_HOVERED_VALUE = "SET_HOVERED_VALUE";

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
    case SET_CLOSEST_CELLS:
      return {
        ...state,
        closestCells: action.payload,
      };
    case SET_HOVERED_VALUE:
      return {
        ...state,
        hoveredValue: action.payload,
      };
    default:
      return state;
  }
};

export const setMatrix = (payload) => ({ type: SET_MATRIX, payload });
export const setIncrement = (payload) => ({ type: SET_INCREMENT, payload });
export const setClosestCells = (payload) => ({
  type: SET_CLOSEST_CELLS,
  payload,
});
export const setHoveredValue = (payload) => ({
  type: SET_HOVERED_VALUE,
  payload,
});

export const store = createStore(reducer, composeWithDevTools());
