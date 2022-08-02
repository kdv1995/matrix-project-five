import * as types from 'store/types/index';

const INITIAL_STATE = {
  matrix: [],
  newRowData: {},
  numberToCut: 0,
};
// eslint-disable-next-line default-param-last
const MatrixReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_MATRIX:
      return { ...state, matrix: payload };
    case types.SET_INCREMENT:
      return {
        ...state,
        matrix: state.matrix.map((rowIncrement) => ({
          ...rowIncrement,
          cells: rowIncrement.cells.map((cellIncrement) => {
            if (cellIncrement.id === payload) {
              return { ...cellIncrement, amount: cellIncrement.amount + 1 };
            }
            return cellIncrement;
          }),
        })),
      };
    case types.SET_NUMBER_TO_CUT:
      return {
        ...state,
        numberToCut: payload,
      };
    case types.SET_CLOSEST_VALUES: {
      const { id, amount } = payload;
      const findClosestCells = state.matrix
        .map((row) => row.cells)
        .flat()
        .filter((cell) => cell.id !== id)
        .map((cell) => ({
          id: cell.id,
          amount: Math.abs(cell.amount - amount),
        }))
        .sort((a, b) => a.amount - b.amount)
        .slice(0, state.numberToCut);
      return {
        ...state,
        matrix: state.matrix.map((rowClosest) => ({
          ...rowClosest,
          cells: rowClosest.cells.map((cellClosest) => ({
            ...cellClosest,
            closest: findClosestCells.find((item) => item.id === cellClosest.id),
          })),
        })),
      };
    }
    case types.SET_CLEAR_VALUES:
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
    case types.SET_ROW_PERCENTAGE: {
      const rowId = action.payload;
      const rowFindPassed = state.matrix.find((rowFind) => rowFind.id === rowId);
      const rowSum = rowFindPassed.cells.reduce((a, b) => a + b.amount, 0);
      return {
        ...state,
        matrix: state.matrix.map((rowPercentage) => {
          if (rowId === rowPercentage.id) {
            return {
              ...rowPercentage,
              showDeposit: true,
              cells: rowPercentage.cells.map((cell) => ({
                ...cell,
                deposit: Math.round((cell.amount / rowSum) * 100),
              })),
            };
          }
          return rowPercentage;
        }),
      };
    }
    case types.SET_CLEAR_DEPOSIT:
      return {
        ...state,
        matrix: state.matrix.map((row) => ({
          ...row,
          showDeposit: false,
        })),
      };
    case types.SET_NEW_ROW_DATA:
      return {
        ...state,
        newRowData: action.payload,
      };
    case types.SET_NEW_ROW:
      return {
        ...state,
        matrix: [...state.matrix, action.payload],
      };

    case types.SET_DELETE_ROW:
      return {
        ...state,
        matrix: state.matrix.filter((row) => row.id !== action.payload),
      };
    default:
      return state;
  }
};
export default MatrixReducer;
