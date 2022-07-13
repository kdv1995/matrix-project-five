import React from "react";
import { useSelector } from "react-redux";

import { useColumnsIndices } from "../../../../functions/useColumnsIndices";
import { useCreateMatrix } from "../../../../functions/useCreateMatrix";

import s from "./MatrixResult.module.scss";

const MatrixResult = () => {
  const columns = useSelector((state) => state.columns);
  // const cells = useSelector((state) => state.cells);
  const matrix = useCreateMatrix();
  const columnsIndices = useColumnsIndices();
  const columnsAverage = () => {
    const res = [];
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (res[i]) {
          res[i] += matrix[j][i];
        } else {
          res[i] = matrix[j][i];
        }
      }
    }
    const average = res.map((item) => Math.round(item / matrix.length));
    average.unshift("Avg");
    return average;
  };
  return (
    <table>
      <thead>
        <tr className={s.TableColumnIndices}>
          {columnsIndices.map((item) => (
            <td>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className={s.TableRowIndices}>{rowIndex + 1}</td>
            {row.map((item) => (
              <td className={s.TableRowData} key={item}>
                {item}
              </td>
            ))}
            <td className={s.TableRowSum}>{row.reduce((a, b) => a + b)}</td>
          </tr>
        ))}
        <tr>
          {columnsAverage().map((item) => (
            <td className={s.TableColumnAverage}>{item}</td>
          ))}
          {/* <td>{columnsAverage.map((elem, index) => elem[index - 1])}</td> */}
        </tr>
      </tbody>
    </table>
  );
};

export default MatrixResult;
