import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
// import { setMatrixDispatch } from "../../../store/store";

import Button from "../../UI/Button/Button";
import Heading from "../../UI/Heading/Heading";
import MatrixResult from "./MatrixResult/MatrixResult";

const MatrixTable = () => {
  return (
    <>
      <Heading title="Matrix" />
      <Button title="Add a row" />
      <MatrixResult />
      <Button title="Set another data" />
    </>
  );
};

export default MatrixTable;
