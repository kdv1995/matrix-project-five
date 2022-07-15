import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setMatrixDispatch } from "../../../store/store";

import Button from "../../UI/Button/Button";
import Heading from "../../UI/Heading/Heading";
import MatrixResult from "./MatrixResult/MatrixResult";

const MatrixTable = () => {
  const navigate = useNavigate();
  const rows = useSelector((state) => state.rows);
  const columns = useSelector((state) => state.columns);
  const dispatch = useDispatch();
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }
  }
  dispatch(setMatrixDispatch(matrix));
  return (
    <>
      <Heading title="Matrix" />
      <Button title="Add a row" />
      <MatrixResult />
      <Button
        onClick={() => {
          navigate("creatematrix");
        }}
        title="Set another data"
      />
    </>
  );
};

export default MatrixTable;
