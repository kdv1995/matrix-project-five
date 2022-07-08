import React from "react";
import { useSelector } from "react-redux";

const CreateTable = () => {
  const rows = useSelector((state) => state.rows);
  console.log(rows);
  const columns = useSelector((state) => state.columns);
  console.log(columns);
  const cells = useSelector((state) => state.cells);
  console.log(cells);

  let matrix = [];
  for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
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
          {row.map((cell) => (
            <div
              style={{
                padding: 15,
                margin: 15,
                textAlign: "center",
                cursor: "pointer",
                border: "2px solid black",
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
      <span>
        {matrix.reduce((initial, current) =>
          current.reduce((start, accum) => start + accum)
        )}
      </span>
    </div>
  );
};

export default CreateTable;
