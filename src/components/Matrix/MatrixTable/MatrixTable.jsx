import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Heading from "../../UI/Heading/Heading";
import MatrixResult from "./MatrixResult/MatrixResult";

const MatrixTable = () => {
  const navigate = useNavigate();
  return (
    <>
      <Heading title="Matrix" />
      <Button title="Add a row" />
      <MatrixResult />
      <Button
        onClick={() => {
          navigate("creatematrix");
        }}
        title="Set another data"
      />
    </>
  );
};

export default MatrixTable;
