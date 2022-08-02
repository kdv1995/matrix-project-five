import Input from 'components/Form/Input';
import Button from 'components/UI/Button/Button';
import Heading from 'components/UI/Heading/Heading';
import Loading from 'components/UI/Loading/Loading';
import useGenerateMatrix from 'hooks/useGenerateMatrix';

import Matrix from 'pages/Matrix/Matrix';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMatrix, setNewRowData, setNumberToCut } from 'store/actions';

function MatrixForm() {
  const dispatch = useDispatch();
  const [initialData, setInitialData] = useState({
    rows: 0,
    columns: 0,
    cells: 0,
  });
  const newRowData = { rows: initialData.rows, columns: initialData.columns };
  const numberToCut = initialData.cells;
  const [matrixVisible, setMatrixVisible] = useState(false);
  const matrix = useGenerateMatrix(initialData);
  const onHandleChange = (event, key) => {
    setInitialData((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };
  const onHandleMatrix = () => {
    dispatch(setMatrix(matrix));
    setMatrixVisible(true);
    dispatch(setNumberToCut(numberToCut));
    dispatch(setNewRowData(newRowData));
  };
  return (
    <div>
      <Heading title="Matrix builder" />
      <Input
        title="Enter the number of rows"
        name="rows"
        value={initialData.rows.toString()}
        onChange={(event) => onHandleChange(event, 'rows')}
      />
      <Input
        title="Enter the number of columns"
        name="columns"
        value={initialData.columns.toString()}
        onChange={(event) => onHandleChange(event, 'columns')}
      />
      <Input
        title="Enter the number of cells"
        name="cells"
        value={initialData.cells.toString()}
        onChange={(event) => onHandleChange(event, 'cells')}
      />
      <Button title="Create matrix" onClick={onHandleMatrix} />
      {matrixVisible === true ? (
        <Matrix />
      ) : (
        <Loading title="Please, set the inputs to build Matrix" />
      )}
    </div>
  );
}

export default MatrixForm;
