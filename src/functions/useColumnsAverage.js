import { useGenerateMatrix } from "./useGenerateMatrix";

export const useColumnsAverage = () => {
  const rows = useGenerateMatrix();
  const arr1 = new Array(rows.length).fill(0).map((column, i) => i + 1);
  arr1.unshift("Avg");
  return arr1;
};
