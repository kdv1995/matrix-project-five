/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo } from 'react';

import deleteIcon from 'assets/icons/deleteIcon.svg';
import classNames from 'classnames';
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
      <div className={classNames('matrix__container')}>
        <table>
          <thead>
            <tr>
              <td>№</td>
              {matrix[0].cells.map((cell, cellIndex) => (
                <td key={cell.headNumber}>{cellIndex + 1}</td>
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
                    className={classNames('table__cell', {
                      table__cell_closest: cell.closest,
                    })}
                    style={{
                      background: row.showDeposit
                        ? `linear-gradient(0deg, rgba(203,13,13,1) ${cell.deposit}%,
                        rgba(0,212,255,0) ${cell.deposit}%)`
                        : '',
                    }}
                  >
                    {row.showDeposit ? `${cell.deposit}%` : cell.amount}
                  </td>
                ))}
                <td
                  onMouseEnter={() => handleSumDeposit(row.id)}
                  onMouseLeave={handleClearDeposit}
                  className={classNames('table__cell_sum')}
                >
                  {row.cells.reduce((a, b) => a + b.amount, 0)}
                </td>
                <td>
                  <button type="button" onClick={() => deleteRow(row.id)}>
                    <img src={deleteIcon} alt="delete_icon" width="35px" height="35px" />
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Avg</td>
              {findRes.map((item) => (
                <td className={classNames('table__columns_average')}>{item}</td>
              ))}
              <td className={classNames('table__columns_average_sum')}>
                {findRes.reduce((a, b) => a + b, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Matrix;
