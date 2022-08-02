import { nanoid } from 'nanoid';

const useGenerateRow = (newRowData) => {
  const newRow = {
    id: nanoid(),
    cells: [],
    showDeposit: false,
  };

  for (let j = 0; j < newRowData.columns; j += 1) {
    newRow.cells.push({
      id: nanoid(),
      amount: Math.round(Math.random() * (999 - 100 + 1) + 100),
      closest: false,
      deposit: 0,
    });
  }
  return newRow;
};

export default useGenerateRow;
