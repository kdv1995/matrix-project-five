// import React from 'react';
// import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setClearDeposit,
//   setClearValues,
//   setClosestValues,
//   setDeleteRow,
//   setIncrement,
//   setNewRow,
//   setRowPercentage,
// } from 'store/matrixReducer';

// import deleteicon from 'assets/icons8-trash.svg';

// import Button from 'components/UI/Button';

// function Matrix() {
//   const dispatch = useDispatch();
//   const matrix = useSelector((state) => state.storeMatrix.matrix);
//   const newRowData = useSelector((state) => state.storeMatrix.newRowData);
//   const handleClosestValues = (cell) => {
//     dispatch(setClosestValues(cell));
//   };
//   const handleClearValues = (cell) => {
//     dispatch(setClearValues(cell));
//   };
//   const handleSumDeposit = (rowDepositId) => {
//     dispatch(setRowPercentage(rowDepositId));
//   };
//   const handleClearDeposit = () => {
//     dispatch(setClearDeposit());
//   };
//   const addNewRow = () => {
//     const newRow = {
//       id: nanoid(),
//       cells: [],
//       showDeposit: false,
//     };

//     for (let j = 0; j < newRowData.columns; j += 1) {
//       newRow.cells.push({
//         id: nanoid(),
//         amount: Math.round(Math.random() * (999 - 100 + 1) + 100),
//         closest: false,
//         deposit: 0,
//       });
//     }

//     dispatch(setNewRow(newRow));
//   };
//   const deleteRow = (rowId) => {
//     dispatch(setDeleteRow(rowId));
//   };

//   return (
//     <>
//       <Button onClick={addNewRow} title="Add a new row" />
//       <table>
//         <thead>
//           <tr>
//             <td>№</td>
//             {matrix[0].cells.map((_, cellIndex) => (
//               <td>{cellIndex + 1}</td>
//             ))}
//             <td>Sum</td>
//           </tr>
//         </thead>
//         <tbody>
//           {matrix.length > 0
//             ? matrix.map((row, rowIndex) => (
//                 <tr key={row}>
//                   <td>{rowIndex}</td>
//                   {row.cells.map((cell) => (
//                     <td
//                       onClick={() => dispatch(setIncrement(cell.id))}
//                       onMouseEnter={() => handleClosestValues(cell)}
//                       onMouseLeave={() => handleClearValues(cell)}
//                       key={cell.id}
//                     >
//                       {row.showDeposit ? `${cell.deposit}%` : cell.amount}
//                     </td>
//                   ))}
//                   <td
//                     onMouseEnter={() => handleSumDeposit(row.id)}
//                     onMouseLeave={handleClearDeposit}
//                   >
//                     {row.cells.reduce((a, b) => a + b.amount, 0)}
//                   </td>
//                   <td>
//                     <button type="button" onClick={() => deleteRow(row.id)}>
//                       <img src={deleteicon} alt="delete_icon" width="30px" height="25px" />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             : 'Matrix is empty'}
//           <tr>
//             <td>Avg</td>
//             {matrix
//               .map((item) => item.cells.map((x) => x.amount))
//               .reduce((a, b) => a.map((x, i) => x + b[i]))
//               .map((item) => Math.round(item / matrix.length))
//               .map((item) => (
//                 <td key={item.id}>{item}</td>
//               ))}
//             <td>
//               {matrix
//                 .map((item) => item.cells.map((x) => x.amount))
//                 .reduce((a, b) => a.map((x, i) => x + b[i]))
//                 .map((item) => Math.round(item / matrix.length))
//                 .reduce((a, b) => a + b, 0)}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default Matrix;
