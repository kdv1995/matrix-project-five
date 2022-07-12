import { useGenerateMatrix } from "./useGenerateMatrix";

export const useColumnsIndices = () => {
  const rows = useGenerateMatrix();
  const arr1 = new Array(rows.length).fill(0).map((x, index) => index + 1);
  arr1.unshift("№");
  arr1.push("Sum");
  return arr1;
};
