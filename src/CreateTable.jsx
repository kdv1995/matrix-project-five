import React from "react";
import { useSelector } from "react-redux";

const CreateTable = () => {
  const rows = useSelector((state) => state.rows);
  const columns = useSelector((state) => state.columns);
  // const cells = useSelector((state) => state.cells);

  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {matrix.map((row) => (
        <div>
          {row.map((columns) => (
            <div
              style={{
                padding: 15,
                margin: 15,
                textAlign: "center",
                cursor: "pointer",
                border: "2px solid black",
              }}
            >
              {columns}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CreateTable;
