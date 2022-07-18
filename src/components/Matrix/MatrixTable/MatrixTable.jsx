import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../UI/Button/Button";

import MatrixResult from "./MatrixResult/MatrixResult";

import s from "./MatrixTable.module.scss";

const MatrixTable = () => {
  const navigate = useNavigate();
  return (
    <div className={s.MatrixContainer}>
      <Button title="Add a row" />
      <MatrixResult />
      <Button title="Set another data" onClick={() => navigate("/")} />
    </div>
  );
};

export default MatrixTable;
