import { useSelector } from "react-redux";

export const useCreateMatrix = () => {
  const rows = useSelector((state) => state.rows);
  const columns = useSelector((state) => state.columns);
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }
  }
  return matrix;
};
