import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setClearValues,
  setClosestValues,
  setIncrement,
  setNewRow,
  setRowPercentage,
} from "../../../../store/matrixReducer";
import Button from "../../../UI/Button/Button";

import s from "./MatrixResult.module.scss";

const MatrixResult = () => {
  const matrix = useSelector((state) => state.matrix.matrix);
  const newRowData = useSelector((state) => state.matrix.newRowData);
  const dispatch = useDispatch();

  const handleClosestValues = (item) => {
    dispatch(setClosestValues(item));
  };
  const handleClearValues = (item) => {
    dispatch(setClearValues(item));
  };
  const handleSumDeposit = (id) => {
    dispatch(setRowPercentage(id));
  };
  const addNewRow = () => {
    const newRow = [];
    for (let i = 0; i < newRowData; i++) {
      newRow[i] = {
        id: Date.now(),
        amount: Math.round(Math.random() * (999 - 100 + 1) + 100),
        closest: false,
        deposit: 0,
      };
    }
    dispatch(setNewRow(newRow));
  };
  // const deleteRow = () => {};
  // dispatch(setClosestValues(findClosestValues));
  // console.log(findClosestValues);
  // const handleSumDeposit = (event, id) => {
  //   setAverage(event.target.innerText);
  //   const findRow = matrix.map((x) => x)[id];
  //   const findRowPercentage = findRow.map((x) => (x.amount / average) * 100);
  //   console.log(findRow);
  //   console.log(findRowPercentage);
  // };
  return (
    <>
      <Button onClick={addNewRow} title="Add new row" />
      <table>
        <thead>
          <tr className={s.TableColumnIndices}>
            <td>№</td>
            {matrix.map((_, rowIndex) => (
              <td>{rowIndex + 1}</td>
            ))}
            <td>Sum</td>
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className={s.TableRowIndices}>{rowIndex + 1}</td>
              {row.map((item, index) => (
                <td
                  onClick={() => dispatch(setIncrement(item.id))}
                  onMouseEnter={() => handleClosestValues(item)}
                  onMouseLeave={() => handleClearValues(item)}
                  key={index}
                  className={s.TableRowData}
                  style={{ background: item.closest && "red" }}
                >
                  {item.amount}
                </td>
              ))}
              <td
                onMouseEnter={() => handleSumDeposit(row, rowIndex)}
                className={s.TableRowSum}
              >
                {row.reduce((a, b) => a + b.amount, 0)}
              </td>
              {/* <Button title="DL Row" /> */}
            </tr>
          ))}
          <tr>
            <td className={s.TableAverageName}>Avg</td>
            {matrix
              .map((item) => item.map((x) => x.amount))
              .reduce((a, b) => a.map((x, i) => x + b[i]))
              .map((item) => Math.round(item / matrix.length))
              .map((item, index) => (
                <td key={index} className={s.TableColumnAverage}>
                  {item}
                </td>
              ))}
            <td className={s.TableColumnAverageSum}>
              {matrix
                .map((item) => item.map((x) => x.amount))
                .reduce((a, b) => a.map((x, i) => x + b[i]))
                .map((item) => Math.round(item / matrix.length))
                .reduce((a, b) => a + b, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MatrixResult;
