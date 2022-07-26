import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../UI/Button/Button";
import Heading from "../UI/Heading/Heading";
import Input from "../UI/Input/Input";

import { useDispatch } from "react-redux";
import s from "../UI/Input/Input.module.scss";

import { nanoid } from "nanoid";
import {
  setMatrix,
  setNewRowData,
  setNumberToCut,
} from "../../store/matrixReducer";

const CreateMatrix = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState({
    rows: 0,
    columns: 0,
    cells: 0,
  });
  const newRowData = { rows: initialData.rows, columns: initialData.columns };
  dispatch(setNewRowData(newRowData));
  const numberToCut = initialData.cells;
  dispatch(setNumberToCut(numberToCut));
  const onHandleChange = (event, key) => {
    setInitialData((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };

  const matrix = [];
  for (let i = 0; i < initialData.rows; i++) {
    matrix.push({
      id: nanoid(),
      showDeposit: false,
      cells: [],
    });
    for (let j = 0; j < initialData.columns; j++) {
      matrix[i].cells.push({
        id: nanoid(),
        amount: Math.round(Math.random() * (999 - 100 + 1) + 100),
        closest: false,
        deposit: 0,
      });
    }
  }
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
          onClick={() => dispatch(setMatrix(matrix), navigate("matrixtable"))}
        />
      </div>
    </>
  );
};

export default CreateMatrix;
