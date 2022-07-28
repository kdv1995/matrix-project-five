import React from "react";

const Loading = (props) => {
  const { title } = props;
  return (
    <>
      <h3 style={{ textAlign: "center", color: "yellow" }}>{title}</h3>
    </>
  );
};

export default Loading;
