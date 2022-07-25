const initialState = {
  matrix: [],
};

const SET_MATRIX = "SET_MATRIX";
// const SET_NEW_ROW_DATA = "SET_NEW_ROW_DATA";
const SET_INCREMENT = "SET_INCREMENT";
const SET_CLOSEST_VALUES = "SET_CLOSEST_VALUES";
const SET_CLEAR_VALUES = "SET_CLEAR_VALUES";
const SET_ROW_PERCENTAGE = "SET_ROW_PERCENTAGE";
// const SET_NEW_ROW = "SET_NEW_ROW";
// const SET_DELETE_ROW = "SET_DELETE_ROW";

export const matrixReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATRIX:
      return { ...state, matrix: action.payload };
    // case SET_NEW_ROW_DATA:
    //   return { ...state, newRowData: action.payload };
    case SET_INCREMENT:
      return {
        ...state,
        matrix: state.matrix.map((row) => ({
          ...row,
          cells: row.cells.map((cell) =>
            cell.id === action.payload
              ? { ...cell, amount: cell.amount + 1 }
              : cell
          ),
        })),
      };

    case SET_CLOSEST_VALUES:
      const { id, amount } = action.payload;
      const findClosestCells = state.matrix
        .map((row) => row.cells)
        .flat()
        .filter((cell) => cell.id !== id)
        .map((cell) => ({
          id: cell.id,
          amount: Math.abs(cell.amount - amount),
        }))
        .sort((a, b) => a.amount - b.amount)
        .slice(0, state.matrix[0].cutClosestCells);
      return {
        ...state,
        matrix: state.matrix.map((row) => ({
          ...row,
          cells: row.cells.map((cell) => ({
            ...cell,
            closest: findClosestCells.find((item) => item.id === cell.id),
          })),
        })),
      };
    case SET_CLEAR_VALUES:
      return {
        ...state,
        matrix: state.matrix.map((row) => ({
          ...row,
          cells: row.cells.map((cell) => ({
            ...cell,
            closest: false,
          })),
        })),
      };
    case SET_ROW_PERCENTAGE:
      // console.log(action.payload);
      const { row } = action.payload;
      console.log(row);
      const rowSum = row.cells.reduce((a, b) => a + b.amount, 0);
      // console.log(rowSum);
      const findCellDeposit = row.cells.map((cell) =>
        Math.round((cell.amount / rowSum) * 100)
      );

      // console.log(findCellDeposit);
      return {
        ...state,
        // matrix: state.matrix.map((row, rowIndex) => {
        //   if (rowIndex === action.payload.rowIndex) {
        //     return row.map((cell) => ({
        //       ...cell,
        //       deposit: findPercentage[action.payload.rowIndex],
        //       showDeposit: true,
        //     }));
        //   }
        //   return row;
        // }),
        matrix: state.matrix.map((row) => ({
          ...row,
          cells: row.cells.map((cell) => ({
            ...cell,
            deposit: findCellDeposit[row.id],
            // showDeposit: true,
          })),
        })),
      };
    // case SET_NEW_ROW:
    //   return {
    //     ...state,
    //   };
    // case SET_DELETE_ROW:
    //   return {};
    default:
      return state;
  }
};

export const setMatrix = (payload) => ({ type: SET_MATRIX, payload });
// export const setNewRowData = (payload) => ({ type: SET_NEW_ROW_DATA, payload });
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
// export const setNewRow = (payload) => ({
//   type: SET_NEW_ROW,
//   payload,
// });
// export const setDeleteRow = (payload) => ({
//   type: SET_DELETE_ROW,
//   payload,
// });
