import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./MatrixResult.module.scss";

const MatrixResult = () => {
  const matrix = useSelector((state) => state.matrix);
  console.log(matrix);
  const columnsIndices = new Array(matrix.length)
    .fill(0)
    .map((_, index) => index + 1);

  const columnsAverage = matrix
    .reduce((a, b) => a.map((x, i) => x + b[i].amount))
    .map((item) => Math.round(item / matrix.length));
    console.log(columnsAverage)
  const columnsAverageSum = columnsAverage.reduce((a, b) => a + b.amount,0);

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
          <tr>
            <td className={s.TableRowIndices}>{rowIndex + 1}</td>
            {row.map((item, index) => (
              <td className={s.TableRowData}>{item.amount}</td>
            ))}
            <td className={s.TableRowSum}>{row.reduce((a, b) => a + b.amount,0)}</td>
          </tr>
        ))}
        <tr>
          <td className={s.TableAverageName}>Avg</td>
          {columnsAverage.map((item, index) => (
            <td className={s.TableColumnAverage}>{item}</td>
          ))}
          <td className={s.TableColumnAverageSum}>{columnsAverageSum}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MatrixResult;
