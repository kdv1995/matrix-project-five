import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./CreateTable.module.scss";
import Button from "../../UI/Button/Button";
import Heading from "../../UI/Heading/Heading";
const CreateTable = () => {
  const rows = useSelector((state) => state.rows);
  const columns = useSelector((state) => state.columns);
  const cells = useSelector((state) => state.cells);
  const navigate = useNavigate();

  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }
  }
  return (
    <div className={s.CreateTable}>
      <Heading title="Matrix" />
      <div className={s.CreateTableContainer}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {matrix.map((_, index) => (
            <span>{index + 1}</span>
          ))}
        </div>
        <div>
          {matrix.map((row, rowIndex) => (
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {rowIndex + 1}
              </div>
              {row.map((column) => (
                <>
                  <div>
                    <div className={s.CellValue}>{column}</div>
                  </div>
                </>
              ))}
              <div
                className={s.RowSum}
                style={{ display: "flex", alignItems: "center" }}
              >
                {row.reduce((a, b) => a + b)}
              </div>
            </div>
          ))}
          <div>
            {matrix.reduce((a, b) => a.map((x, i) => (x + b[i]) / rows.length))}
          </div>
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate("/matrix");
          }}
          title="Set another data"
        />
      </div>
    </div>
  );
};

export default CreateTable;
