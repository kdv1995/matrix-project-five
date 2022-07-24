const initialState = {
  matrix: [],
};
const SET_MATRIX = "SET_MATRIX";
const SET_INCREMENT = "SET_INCREMENT";
const SET_CLOSEST_VALUES = "SET_CLOSEST_VALUES";
const SET_CLEAR_VALUES = "SET_CLEAR_VALUES";
const SET_ROW_PERCENTAGE = "SET_ROW_PERCENTAGE";

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
    case SET_ROW_PERCENTAGE:
      console.log(action.payload);
      const rowSum = action.payload.reduce((row, cell) => row + cell.amount, 0);
      const findPercentage = action.payload.map((row) =>
        Math.round((row.amount / rowSum) * 100)
      );
      console.log(findPercentage);
      return {
        ...state,
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
export const setRowPercentage = (payload) => ({
  type: SET_ROW_PERCENTAGE,
  payload,
});
