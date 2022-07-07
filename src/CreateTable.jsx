import React from "react";
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const CreateTable = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: 120 }}>
      <>
        {matrix.map((submatrix) =>
          submatrix.map((elem) => <button>{elem}</button>)
        )}
      </>
    </div>
  );
};

export default CreateTable;
