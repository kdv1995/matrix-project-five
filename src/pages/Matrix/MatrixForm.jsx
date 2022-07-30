import Input from 'components/Form/Input';
import Button from 'components/UI/Button/Button';
import Heading from 'components/UI/Heading/Heading';
import Loading from 'components/UI/Loading/Loading';

import { nanoid } from 'nanoid';
import Matrix from 'pages/Matrix/Matrix';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setMatrix, setNewRowData, setNumberToCut } from 'store/matrixReducer';

function MatrixForm() {
  // const dispatch = useDispatch();
  const [initialData, setInitialData] = useState({
    rows: 0,
    columns: 0,
    cells: 0,
  });
  const [matrixVisible, setMatrixVisible] = useState(false);
  // const newRowData = { rows: initialData.rows, columns: initialData.columns };
  // const numberToCut = initialData.cells;

  // useEffect(() => {
  //   dispatch(setNewRowData(newRowData));
  //   dispatch(setNumberToCut(numberToCut));
  // });

  const onHandleChange = (event, key) => {
    setInitialData((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };

  const matrix = [];
  for (let i = 0; i < initialData.rows; i += 1) {
    matrix.push({
      id: nanoid(),
      showDeposit: false,
      cells: [],
    });
    for (let j = 0; j < initialData.columns; j += 1) {
      matrix[i].cells.push({
        id: nanoid(),
        amount: Math.round(Math.random() * (999 - 100 + 1) + 100),
        closest: false,
        deposit: 0,
      });
    }
  }
  const onHandleMatrix = () => {
    // dispatch(setMatrix(matrix));
    setMatrixVisible(true);
  };
  return (
    <div>
      <Heading title="Matrix builder" />
      <Input
        title="Enter the number of rows"
        name="rows"
        value={initialData.rows}
        onChange={(event) => onHandleChange(event, 'rows')}
      />
      <Input
        title="Enter the number of columns"
        name="columns"
        value={initialData.columns}
        onChange={(event) => onHandleChange(event, 'columns')}
      />
      <Input
        title="Enter the number of cells"
        name="cells"
        value={initialData.cells}
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
