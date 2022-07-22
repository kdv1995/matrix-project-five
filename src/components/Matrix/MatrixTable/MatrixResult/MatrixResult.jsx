import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setHoveredValue, setIncrement } from "../../../../store/store";

import s from "./MatrixResult.module.scss";

const MatrixResult = () => {
  const matrix = useSelector((state) => state.matrix);
  console.log(matrix);
  const closestCells = useSelector((state) => state.closestCells);
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
  const hoveredValue = useSelector((state) => state.hoveredValue);
  const findTheClosest = matrix
    .flat()
    .filter((x) => x.id !== hoveredValue.id)
    .map((item) => ({
      id: item.id,
      amount: Math.abs(hoveredValue.amount - item.amount),
    }))
    .sort((a, b) => a.amount - b.amount)
    .slice(0, closestCells);

  // const findClosest = matrix.flat();
  // const nextStep = findClosest.filter((elem) => elem.id !== value.id);
  // console.log(nextStep);
  // console.log(findClosest);
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
                onMouseEnter={() =>
                  dispatch(
                    setHoveredValue({ id: item.id, amount: item.amount })
                  )
                }
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
