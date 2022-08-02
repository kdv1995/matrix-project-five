/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useMemo } from 'react';

import deleteIcon from 'assets/icons/deleteIcon.svg';
import Button from 'components/UI/Button/Button';
import useGenerateRow from 'hooks/useGenerateRow';
import { useDispatch, useSelector } from 'react-redux';
import {
  setClearDeposit,
  setClearValues,
  setClosestValues,
  setDeleteRow,
  setIncrement,
  setNewRow,
  setRowPercentage,
} from 'store/actions';

function Matrix() {
  const dispatch = useDispatch();
  const matrix = useSelector((state) => state.storeMatrix.matrix);
  const newRowData = useSelector((state) => state.storeMatrix.newRowData);
  const findRes = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      matrix
        .map((rowFindRes) => rowFindRes.cells.map((cellFindRes) => cellFindRes.amount))
        .reduce((a, b) => a.map((x, i) => x + b[i]))
        .map((item) => Math.round(item / matrix.length)),
    [matrix],
  );
  const onHandleIncrement = (cellIncrement) => {
    dispatch(setIncrement(cellIncrement));
  };
  const handleClosestValues = (cellClosest) => {
    dispatch(setClosestValues(cellClosest));
  };
  const handleClearValues = () => {
    dispatch(setClearValues());
  };
  const handleSumDeposit = (rowDepositId) => {
    dispatch(setRowPercentage(rowDepositId));
  };
  const handleClearDeposit = () => {
    dispatch(setClearDeposit());
  };
  const newRow = useGenerateRow(newRowData);
  const addNewRow = () => {
    dispatch(setNewRow(newRow));
  };
  const deleteRow = (rowId) => {
    dispatch(setDeleteRow(rowId));
  };

  return (
    <>
      <Button onClick={addNewRow} title="Add a new row" />
      <table>
        <thead>
          <tr>
            <td>№</td>
            {matrix[0].cells.map((_, cellIndex) => (
              <td>{cellIndex + 1}</td>
            ))}
            <td>Sum</td>
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={row.rowId}>
              <td key={row.rowNumber}>{rowIndex + 1}</td>
              {row.cells.map((cell) => (
                <td
                  key={cell.cellId}
                  onClick={() => onHandleIncrement(cell.id)}
                  onMouseEnter={() => handleClosestValues(cell)}
                  onMouseLeave={() => handleClearValues()}
                  style={{ background: cell.closest && 'red' }}
                >
                  {row.showDeposit ? `${cell.deposit}%` : cell.amount}
                </td>
              ))}
              <td onMouseEnter={() => handleSumDeposit(row.id)} onMouseLeave={handleClearDeposit}>
                {row.cells.reduce((a, b) => a + b.amount, 0)}
              </td>
              <td>
                <button type="button" onClick={() => deleteRow(row.id)}>
                  <img src={deleteIcon} alt="delete_icon" width="30px" height="25px" />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Avg</td>
            {findRes.map((item) => (
              <td>{item}</td>
            ))}
            <td>{findRes.reduce((a, b) => a + b, 0)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Matrix;
