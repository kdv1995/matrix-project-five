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
        {matrix.map((r, index) => (
          <div style={{ display: "flex" }}>
            {r.map((clmn, index) => (
              <div>
                <div className={s.Value}>
                  <div>{clmn}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div>
          <Button
            onClick={() => {
              navigate("/matrix");
            }}
            title="Set another data"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTable;
