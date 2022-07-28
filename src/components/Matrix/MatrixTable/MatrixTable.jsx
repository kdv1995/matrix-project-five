import React from "react";

import MatrixResult from "components/Matrix/MatrixTable/MatrixResult/MatrixResult";
import styles from "App.module.scss";
const MatrixTable = () => {
  return (
    <div className={styles.Container}>
      <MatrixResult />
    </div>
  );
};

export default MatrixTable;
