import { useCreateMatrix } from "./useCreateMatrix";

export const useColumnsIndices = () => {
  const matrix = useCreateMatrix;
  const arr = new Array(matrix.length).fill(0).map((_, index) => index + 1);
  //   arr.unshift("№");
  //   arr.push("Sum");
  return arr;
};
