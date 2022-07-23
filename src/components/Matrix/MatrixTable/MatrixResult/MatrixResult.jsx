import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setClosestValues,
  setIncrement,
} from "../../../../store/matrixReducer";

import s from "./MatrixResult.module.scss";

const MatrixResult = () => {
  const matrix = useSelector((state) => state.matrix.matrix);
  console.log(matrix);
  const dispatch = useDispatch();
  const columnsIndices = new Array(matrix.length)
    .fill(0)
    .map((_, index) => index + 1);
  const columnsAverage = matrix.map((item) => item.map((x) => x.amount));
  const columnsAverageRes = columnsAverage.reduce((a, b) =>
    a.map((x, i) => x + b[i])
  );
  const columnsAverageFinal = columnsAverageRes.map((item) =>
    Math.round(item / matrix.length)
  );
  const columnsAverageSum = columnsAverageFinal.reduce((a, b) => a + b);

  const handleClosestValues = (item) => {
    dispatch(setClosestValues(item));
  };

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
    <table>
      <thead>
        <tr className={s.TableColumnIndices}>
          <td>№</td>
          {columnsIndices.map((item, index) => (
            <td key={index}>{item}</td>
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
                key={index}
                className={s.TableRowData}
                style={{ background: item.closest === true ? "red" : "" }}
              >
                {item.amount}
              </td>
            ))}
            <td
              // onMouseEnter={(event) => handleSumDeposit(event, rowIndex)}
              className={s.TableRowSum}
            >
              {row.reduce((a, b) => a + b.amount, 0)}
            </td>
          </tr>
        ))}
        <tr>
          <td className={s.TableAverageName}>Avg</td>
          {columnsAverageFinal.map((item, index) => (
            <td key={index} className={s.TableColumnAverage}>
              {item}
            </td>
          ))}
          <td className={s.TableColumnAverageSum}>{columnsAverageSum}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MatrixResult;
