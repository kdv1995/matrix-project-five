import React from "react";
import { useSelector } from "react-redux";

// import { useColumnsIndices } from "../../../../functions/useColumnsIndices";
// import { useCreateMatrix } from "../../../../functions/useCreateMatrix";

import s from "./MatrixResult.module.scss";

const MatrixResult = () => {
  const matrix = useSelector((state) => state.matrix);
  console.log(matrix);
  //   const columns = useSelector((state) => state.columns);
  //   console.log(columns);
  const columnsIndices = new Array(matrix.length)
    .fill(0)
    .map((_, index) => index + 1);
  const columnsAverage = matrix
    .reduce((a, b) => a.map((x, i) => x + b[i]))
    .map((item) => Math.round(item / matrix.length));

  

    const columnsAverageSum = columnsAverage.reduce((a, b) => a + b);

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
            {row.map((item) => (
              <td className={s.TableRowData}>{item}</td>
            ))}
            <td className={s.TableRowSum}>{row.reduce((a, b) => a + b)}</td>
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
