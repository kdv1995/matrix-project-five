import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Heading from "../../UI/Heading/Heading";
import s from "./CreateTable.module.scss";

import { useGenerateMatrix } from "../../../functions/useGenerateMatrix";
import { useColumnsIndices } from "../../../functions/useColumnsIndices";
import { useColumnsAverage } from "../../../functions/useColumnsAverage";

const CreateTable = () => {
  const navigate = useNavigate();
  const matrix = useGenerateMatrix();
  const columnsIndices = useColumnsIndices();
  const columnsAverage = useColumnsAverage();
  return (
    <>
      <Heading title="Matrix" />
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
            <td>res</td>
          </tr>
        </thead>
      </table>
      <div>
        <Button
          onClick={() => {
            navigate("/matrix");
          }}
          title="Set another data"
        />
      </div>
    </>
  );
};

export default CreateTable;
