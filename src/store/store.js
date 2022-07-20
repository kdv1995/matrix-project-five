import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  matrix: [],
  closestCells: 0,
};

const SET_MATRIX = "SET_MATRIX";
const SET_INCREMENT = "SET_INCREMENT";
const SET_CLOSEST_CELLS = "SET_CLOSEST_CELLS";
const SET_CLOSEST_CELLS_HOVERED = "SET_CLOSEST_CELLS_HOVERED";
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
    // case SET_CLOSEST_CELLS_HOVERED:
    //   return {
    //     ...state,
    //     matrix: state.matrix.map((item) =>
    //       item.map((x) =>
    //         x.id === action.payload ? { ...x, closest: true } : x
    //       )
    //     ),
    //   };
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
// export const setClosestCellsHovered = (payload) => ({
//   type: SET_CLOSEST_CELLS_HOVERED,
//   payload,
// });
export const store = createStore(reducer, composeWithDevTools());
