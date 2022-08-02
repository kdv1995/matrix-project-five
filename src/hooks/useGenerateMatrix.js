import { nanoid } from 'nanoid';

const useGenerateMatrix = (initialData) => {
  const matrix = [];
  for (let i = 0; i < initialData.rows; i += 1) {
    matrix.push({
      id: nanoid(),
      showDeposit: false,
      cells: [],
      rowId: `${i + 1}=${i + 1}`,
      rowNumber: `${i + 1}+${i + 1}`,
    });
    for (let j = 0; j < initialData.columns; j += 1) {
      matrix[i].cells.push({
        id: nanoid(),
        amount: Math.round(Math.random() * (999 - 100 + 1) + 100),
        closest: false,
        deposit: 0,
        cellId: `${j + 1}_${j + 1}`,
        headNumber: `${i + 1}/${j + 1}`,
      });
    }
  }
  return matrix;
};

export default useGenerateMatrix;
