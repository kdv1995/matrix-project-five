import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Heading from "../../UI/Heading/Heading";
import Table from "./Table/Table";

const CreateTable = () => {
  const navigate = useNavigate();
  return (
    <>
      <Heading title="Matrix" />
      <Table />
      <Button
        onClick={() => {
          navigate("/matrix");
        }}
        title="Set another data"
      />
    </>
  );
};

export default CreateTable;
