import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Heading from "../UI/Heading/Heading";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import s from "../UI/Input/Input.module.scss";
import { useDispatch } from "react-redux";

// import { setMatrixDispatch } from "../../store/store";
// import MatrixResult from "./MatrixTable/MatrixResult/MatrixResult";
import { setMatrixDispatch } from "../../store/store";
// import { useNavigate } from "react-router-dom";
// import MatrixResult from "./MatrixTable/MatrixResult/MatrixResult";
// import MatrixTable from "./MatrixTable/MatrixTable";

const CreateMatrix = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [rows, setRows] = useState(0);
  // const [columns, setColumns] = useState(0);
  // const [cells, setCells] = useState(0);

  const [initialData, setInitialData] = useState({
    rows: 0,
    columns: 0,
    cells: 0,
  });
  const onHandleChange = (event, key) => {
    setInitialData((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };

  const matrix = [];
  for (let i = 0; i < initialData.rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < initialData.columns; j++) {
      matrix[i][j] = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }
  }
  console.log(matrix);

  const sendData = () => {
    dispatch(setMatrixDispatch(matrix));
  };
  return (
    <>
      <Heading title="Matrix builder" />
      <div>
        <Input
          title="Enter the number of rows"
          name="rows"
          value={initialData.rows}
          onChange={(event) => onHandleChange(event, "rows")}
          className={s.RowsNaming}
        />
      </div>
      <div>
        <Input
          title="Enter the number of columns"
          name="columns"
          value={initialData.columns}
          onChange={(event) => onHandleChange(event, "columns")}
          className={s.ColumnsNaming}
        />
      </div>
      <div>
        <Input
          title="Enter the number of cells"
          name="cells"
          value={initialData.cells}
          onChange={(event) => onHandleChange(event, "cells")}
          className={s.CellsNaming}
        />
      </div>
      <div>
        <Button
          title="Create a matrix"
          onClick={() => dispatch(setMatrixDispatch(matrix), navigate('matrixtable'))}
        />
      </div>
    </>
  );
};

export default CreateMatrix;
