import React from "react";
import s from "../Table/Table.module.scss";

import { useColumnsAverage } from "../../../../functions/useColumnsAverage";
import { useColumnsIndices } from "../../../../functions/useColumnsIndices";
import { useGenerateMatrix } from "../../../../functions/useGenerateMatrix";

const Table = () => {
  const matrix = useGenerateMatrix();
  const columnsIndices = useColumnsIndices();
  const columnsAverage = useColumnsAverage();

  return (
    <table>
      <thead>
        <tr className={s.ColumnsName}>
          {columnsIndices.map((x) => (
            <td>{x}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {matrix.map((row, rowIndex) => (
          <tr className={s.TableRow} key={rowIndex}>
            <td>{rowIndex + 1}</td>
            {row.map((item) => (
              <td className={s.TableData} key={item}>
                {item}
              </td>
            ))}
            <td className={s.RowSum}>{row.reduce((a, b) => a + b)}</td>
          </tr>
        ))}
      </tbody>
      <thead>
        <tr className={s.ColumnsAverage}>
          {columnsAverage.map((x) => (
            <td>{x}</td>
          ))}
          <td>{}</td>
        </tr>
      </thead>
    </table>
  );
};

export default Table;
