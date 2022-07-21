import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setClosestCellsHovered, setIncrement } from "../../../../store/store";

import s from "./MatrixResult.module.scss";

const MatrixResult = () => {
  const [value, setValue] = useState("");
  console.log(value);
  // const [average, setAverage] = useState("");
  const matrix = useSelector((state) => state.matrix);
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

  const handleClosestCells = (event) => {
    setValue(event.target.dataset);
    const closestCellsResult = matrix
      .flat()
      .filter((x) => x.id !== value.id)
      .map((y) => ({ id: y.id, amount: Math.abs(value.amount - y.amount) }))
      .sort((a, b) => a.amount - b.amount)
      .slice(0, closestCells);
    console.log(closestCellsResult);
    const initialMatrix = matrix
      .flat()
      .map((x) => closestCellsResult.map((c) => c.id).includes(x.id));
    console.log(initialMatrix);
    const arr = [];
    const setIndicesOfClosest = initialMatrix.forEach((item, index) =>
      item === true ? arr.push(index) : null
    );
    console.log(arr);
    // const hoveredValue = matrix.
    // dispatch(setClosestCellsHovered(hoveredValue));
  };
  const handleClosestClear = () => {
    matrix.flat().map((item) => ({ ...item, closest: false }));
  };

  // const initialMatrix = matrix
  //   .flat()
  //   .map((x) => closestCellsResult.map((c) => c.id).includes(x.id));
  // console.log(initialMatrix);

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
                onMouseEnter={handleClosestCells}
                onMouseLeave={handleClosestClear}
                key={index}
                className={s.TableRowData}
                data-id={item.id}
                data-amount={item.amount}
                style={{ background: !item.closest ? "" : "green" }}
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
