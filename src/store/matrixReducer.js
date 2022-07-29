// const initialState = {
//     matrix: [],
//     newRowData: {},
//     numberToCut: 0,
// };

// const SET_MATRIX = 'SET_MATRIX';
// const SET_INCREMENT = 'SET_INCREMENT';
// const SET_NUMBER_TO_CUT = 'SET_NUMBER_TO_CUT';
// const SET_CLOSEST_VALUES = 'SET_CLOSEST_VALUES';
// const SET_CLEAR_VALUES = 'SET_CLEAR_VALUES';
// const SET_ROW_PERCENTAGE = 'SET_ROW_PERCENTAGE';
// const SET_CLEAR_DEPOSIT = 'SET_CLEAR_DEPOSIT';
// const SET_NEW_ROW = 'SET_NEW_ROW';
// const SET_NEW_ROW_DATA = 'SET_NEW_ROW_DATA';
// const SET_DELETE_ROW = 'SET_DELETE_ROW';

// export const matrixReducer = (action, state = initialState) => {
//   switch (action.type) {
//     case SET_MATRIX:
//       return { ...state, matrix: action.payload };
//     case SET_INCREMENT: {
//       return {
//         ...state,
//         matrix: state.matrix.map((row) => ({
//           ...row,
//           cells: row.cells.map((cell) => {
//             if (cell.id === action.payload) {
//               return { ...cell, amount: cell.amount + 1 };
//             }
//             return cell;
//           }),
//         })),
//       };
//     }
//     case SET_NUMBER_TO_CUT:
//       return {
//         ...state,
//         numberToCut: action.payload,
//       };
//     case SET_CLOSEST_VALUES: {
//       const { id, amount } = action.payload;
//       const findClosestCells = state.matrix
//         .map((row) => row.cells)
//         .flat()
//         .filter((cell) => cell.id !== id)
//         .map((cell) => ({
//           id: cell.id,
//           amount: Math.abs(cell.amount - amount),
//         }))
//         .sort((a, b) => a.amount - b.amount)
//         .slice(0, state.numberToCut);
//       return {
//         ...state,
//         matrix: state.matrix.map((row) => ({
//           ...row,
//           cells: row.cells.map((cell) => ({
//             ...cell,
//             closest: findClosestCells.find((item) => item.id === cell.id),
//           })),
//         })),
//       };
//     }
//     case SET_CLEAR_VALUES: {
//       return {
//         ...state,
//         matrix: state.matrix.map((row) => ({
//           ...row,
//           cells: row.cells.map((cell) => ({
//             ...cell,
//             closest: false,
//           })),
//         })),
//       };
//     }
//     case SET_ROW_PERCENTAGE: {
//       const rowId = action.payload;
//       const rowFindPassed = state.matrix.find((rowFind) => rowFind.id === rowId);
//       const rowSum = rowFindPassed.cells.reduce((a, b) => a + b.amount, 0);
//       return {
//         ...state,
//         matrix: state.matrix.map((rowPercentage) => {
//           if (rowId === rowPercentage.id) {
//             return {
//               ...rowPercentage,
//               showDeposit: true,
//               cells: rowPercentage.cells.map((cell) => ({
//                 ...cell,
//                 deposit: Math.round((cell.amount / rowSum) * 100),
//               })),
//             };
//           }
//           return rowPercentage;
//         }),
//       };
//     }
//     case SET_CLEAR_DEPOSIT:
//       return {
//         ...state,
//         matrix: state.matrix.map((row) => ({
//           ...row,
//           showDeposit: false,
//         })),
//       };
//     case SET_NEW_ROW_DATA:
//       return {
//         ...state,
//         newRowData: action.payload,
//       };
//     case SET_NEW_ROW:
//       return {
//         ...state,
//         matrix: [...state.matrix, action.payload],
//       };

//     case SET_DELETE_ROW:
//       return {
//         ...state,
//         matrix: state.matrix.filter((row) => row.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export const setMatrix = (payload) => ({ type: SET_MATRIX, payload });
// export const setIncrement = (payload) => ({ type: SET_INCREMENT, payload });
// export const setNumberToCut = (payload) => ({
//   type: SET_NUMBER_TO_CUT,
//   payload,
// });
// export const setClosestValues = (payload) => ({
//   type: SET_CLOSEST_VALUES,
//   payload,
// });
// export const setClearValues = (payload) => ({
//   type: SET_CLEAR_VALUES,
//   payload,
// });
// export const setRowPercentage = (payload) => ({
//   type: SET_ROW_PERCENTAGE,
//   payload,
// });
// export const setClearDeposit = (payload) => ({
//   type: SET_CLEAR_DEPOSIT,
//   payload,
// });
// export const setNewRow = (payload) => ({
//   type: SET_NEW_ROW,
//   payload,
// });
// export const setNewRowData = (payload) => ({
//   type: SET_NEW_ROW_DATA,
//   payload,
// });
// export const setDeleteRow = (payload) => ({
//   type: SET_DELETE_ROW,
//   payload,
// });
