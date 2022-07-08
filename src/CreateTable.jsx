import React from "react";
import { useSelector } from "react-redux";

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const CreateTable = () => {
  const rows = useSelector((state) => state.rows);
  // for (let i = 0; i < 1; i++) {
  //   const row = matrix[i];
  //   for (let j = 0; j < 3; j++) {
  //     matrix[i][j] = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  //   }
  //   matrix.push(row);
  // }
  // console.log(matrix);
  return (
    <div style={{ display: "flex" }}>
      {/* {matrix.map((submatrix, index) => (
        <div key={index}>
          {submatrix.map((elem, key) => (
            <button key={key}>{elem}</button>
          ))}
        </div>
      ))} */}
    </div>
  );
};

export default CreateTable;
