export const findClosestValues = (matrix, selectedValue, cutClosest) => {
  const res = matrix
    .flat()
    .filter((x) => x.id !== selectedValue.id)
    .map((item) => ({
      id: item.id,
      amount: Math.abs(selectedValue.amount - item.amount),
    }))
    .sort((a, b) => a.amount - b.amount)
    .slice(0, cutClosest);
  const initialMatrix = matrix
    .flat()
    .map((x) => res.map((c) => c.id).includes(x.id));
  const arr = [];
  const getIndices = initialMatrix.forEach((item, index) =>
    item === true ? arr.push(index) : null
  );
  const hoveredValue = matrix
    .flat()
    .map((item, index) =>
      arr.includes(index) ? (item.closest = true) : (item.closest = false)
    );
  return hoveredValue;
};
