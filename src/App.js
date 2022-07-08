import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./App.module.scss";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import CreateTable from "./CreateTable";
import { setRows, setColumns, setCells } from "./store/store";

const App = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [cells, setCells] = useState(0);
  const dispatch = useDispatch();
  const onCLick = () => {
    dispatch(setRows(rows));
    dispatch(setColumns(columns));
    dispatch(setCells(cells));
  };
  return (
    <div className={s.App}>
      <div className={s.AppContainer}>
        <h1 className={s.AppHeading}>Matrix builder</h1>
        <div className={s.RowsName}>
          <Input
            title="Enter the number of rows"
            value={rows}
            onChange={(event) => setRows(event.target.value)}
          />
        </div>
        <div className={s.RowsName}>
          <Input
            title="Enter the number of columns"
            value={columns}
            onChange={(event) => setColumns(event.target.value)}
          />
        </div>
        <div className={s.RowsName}>
          <Input
            title="Enter the number of cells"
            value={cells}
            onChange={(event) => setCells(event.target.value)}
          />
        </div>
        <Button title="Create matrix" onClick={onCLick} />
        <CreateTable />
      </div>
    </div>
  );
};

export default App;
