import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCells, getColumns, getRows } from "../../store/store";
import s from "../UI/Input/Input.module.scss";

import Heading from "../UI/Heading/Heading";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
const CreateMatrix = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [cells, setCells] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(getCells(cells));
  dispatch(getRows(rows));
  dispatch(getColumns(columns));

  return (
    <>
      <Heading title="Matrix builder" />
      <div>
        <Input
          title="Enter the number of rows"
          value={rows}
          onChange={(event) => setRows(event.target.value)}
          className={s.RowsNaming}
        />
      </div>
      <div>
        <Input
          title="Enter the number of columns"
          value={columns}
          onChange={(event) => setColumns(event.target.value)}
          className={s.ColumnsNaming}
        />
      </div>
      <div>
        <Input
          title="Enter the number of cells"
          value={cells}
          onChange={(event) => setCells(event.target.value)}
          className={s.CellsNaming}
        />
      </div>
      <div>
        <Button
          title="Create a matrix"
          onClick={() => {
            navigate("matrixtable");
          }}
        />
      </div>
    </>
  );
};

export default CreateMatrix;
