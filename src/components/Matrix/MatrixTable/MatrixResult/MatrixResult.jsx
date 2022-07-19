import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIncrement } from "../../../../store/store";
import s from "./MatrixResult.module.scss";

const MatrixResult = () => {
  const dispatch = useDispatch();
  const matrix = useSelector((state) => state.matrix);
  console.log(matrix);
  const [value, setValue] = useState("");
  const handleMouseOver = (event) => {
    setValue(event.target.dataset);
  };
  const res = matrix
    .flat()
    .filter((x) => x.id !== value.id)
    .map((y) => ({ id: y.id, amount: Math.abs(value.amount - y.amount) }))
    .sort((a, b) => a.amount - b.amount);

  console.log(res);
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
              <td
                onClick={() => dispatch(setIncrement(item.id))}
                onMouseEnter={handleMouseOver}
                key={item.id}
                className={s.TableRowData}
                data-id={item.id}
                data-amount={item.amount}
              >
                {item.amount}
              </td>
            ))}
            <td className={s.TableRowSum}>
              {row.reduce((a, b) => a + b.amount, 0)}
            </td>
          </tr>
        ))}
        <tr>
          <td className={s.TableAverageName}>Avg</td>
          {columnsAverageFinal.map((item, index) => (
            <td className={s.TableColumnAverage}>{item}</td>
          ))}
          <td className={s.TableColumnAverageSum}>{columnsAverageSum}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MatrixResult;
