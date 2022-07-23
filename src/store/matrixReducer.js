const initialState = {
  matrix: [],
};
const SET_MATRIX = "SET_MATRIX";
const SET_INCREMENT = "SET_INCREMENT";
const SET_CLOSEST_VALUES = "SET_CLOSEST_VALUES";
const SET_CLEAR_VALUES = "SET_CLEAR_VALUES";

export const matrixReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATRIX:
      return { ...state, matrix: action.payload };
    case SET_INCREMENT:
      return {
        ...state,
        matrix: state.matrix.map((row) =>
          row.map((cell) =>
            cell.id === action.payload
              ? { ...cell, amount: cell.amount + 1 }
              : cell
          )
        ),
      };

    case SET_CLOSEST_VALUES:
      const { id, amount } = action.payload;
      const closestCellsResult = state.matrix
        .flat()
        .filter((value) => id !== value.id)
        .map((cell) => ({
          id: cell.id,
          amount: Math.abs(amount - cell.amount),
        }))
        .sort((a, b) => a.amount - b.amount)
        .slice(0, state.matrix[0][0].cutClosestCells);

      console.log(closestCellsResult);
      return {
        ...state,
        matrix: state.matrix.map((row) =>
          row.map((cell) => ({
            ...cell,
            closest: closestCellsResult.find((item) => item.id === cell.id),
          }))
        ),
      };
    case SET_CLEAR_VALUES:
      return {
        ...state,
        matrix: state.matrix.map((row) =>
          row.map((cell) => ({
            ...cell,
            closest: false,
          }))
        ),
      };
    default:
      return state;
  }
};

export const setMatrix = (payload) => ({ type: SET_MATRIX, payload });
export const setIncrement = (payload) => ({ type: SET_INCREMENT, payload });
export const setClosestValues = (payload) => ({
  type: SET_CLOSEST_VALUES,
  payload,
});
export const setClearValues = (payload) => ({
  type: SET_CLEAR_VALUES,
  payload,
});
