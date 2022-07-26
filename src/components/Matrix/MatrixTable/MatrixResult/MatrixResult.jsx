import { nanoid } from "nanoid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setClearDeposit,
  setClearValues,
  setClosestValues,
  setDeleteRow,
  setIncrement,
  setNewRow,
  setRowPercentage,
} from "../../../../store/matrixReducer";

import Button from "../../../UI/Button/Button";
import deleteicon from "./MatrixResultImg/icons8-trash.svg";

import s from "./MatrixResult.module.scss";

const MatrixResult = () => {
  const dispatch = useDispatch();
  const matrix = useSelector((state) => state.storeMatrix.matrix);
  const newRowData = useSelector((state) => state.storeMatrix.newRowData);
  console.log(matrix);
  const handleClosestValues = (cell) => {
    dispatch(setClosestValues(cell));
  };
  const handleClearValues = (cell) => {
    dispatch(setClearValues(cell));
  };
  const handleSumDeposit = (row_id) => {
    dispatch(setRowPercentage(row_id));
  };
  const handleClearDeposit = () => {
    dispatch(setClearDeposit());
  };
  const addNewRow = () => {
    const newRow = {
      id: nanoid(),
      cells: [],
      showDeposit: false,
    };

    for (let j = 0; j < newRowData.columns; j++) {
      newRow.cells.push({
        id: nanoid(),
        amount: Math.round(Math.random() * (999 - 100 + 1) + 100),
        closest: false,
        deposit: 0,
      });
    }

    dispatch(setNewRow(newRow));
  };
  const deleteRow = (row_id) => {
    dispatch(setDeleteRow(row_id));
  };

  return (
    <>
      <Button onClick={addNewRow} title="Add a new row" />
      <table>
        <thead>
          <tr className={s.TableColumnIndices}>
            <td>№</td>
            {matrix[0].cells.map((_, cellIndex) => (
              <td>{cellIndex + 1}</td>
            ))}
            <td>Sum</td>
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className={s.TableRowIndices}>{rowIndex + 1}</td>
              {row.cells.map((cell, index) => (
                <td
                  onClick={() => dispatch(setIncrement(cell.id))}
                  onMouseEnter={() => handleClosestValues(cell)}
                  onMouseLeave={() => handleClearValues(cell)}
                  key={index}
                  className={s.TableRowData}
                  style={{
                    backgroundColor: cell.closest && "red",
                    background:
                      row.showDeposit &&
                      `linear-gradient(0deg, rgba(203,13,13,1) ${cell.deposit}%, rgba(0,212,255,0) ${cell.deposit}%)`,
                  }}
                >
                  {row.showDeposit ? `${cell.deposit}%` : cell.amount}
                </td>
              ))}
              <td
                onMouseEnter={() => handleSumDeposit(row.id)}
                onMouseLeave={handleClearDeposit}
                className={s.TableRowSum}
              >
                {row.cells.reduce((a, b) => a + b.amount, 0)}
              </td>
              <td>
                <button
                  onClick={() => deleteRow(row.id)}
                  className={s.TableRowDataDelete}
                >
                  <img
                    src={deleteicon}
                    alt="delete_icon"
                    width="30px"
                    height="25px"
                  />
                </button>
              </td>
            </tr>
          ))}
          {
            <tr>
              <td className={s.TableAverageName}>Avg</td>
              {matrix
                .map((item) => item.cells.map((x) => x.amount))
                .reduce((a, b) => a.map((x, i) => x + b[i]))
                .map((item) => Math.round(item / matrix.length))
                .map((item, index) => (
                  <td key={index} className={s.TableColumnAverage}>
                    {item}
                  </td>
                ))}
              <td className={s.TableColumnAverageSum}>
                {matrix
                  .map((item) => item.cells.map((x) => x.amount))
                  .reduce((a, b) => a.map((x, i) => x + b[i]))
                  .map((item) => Math.round(item / matrix.length))
                  .reduce((a, b) => a + b, 0)}
              </td>
            </tr>
          }
        </tbody>
      </table>
    </>
  );
};

export default MatrixResult;
