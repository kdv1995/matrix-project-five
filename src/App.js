import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";

import CreateMatrix from "./components/Matrix/CreateMatrix";

import MatrixTable from "./components/Matrix/MatrixTable/MatrixTable";

const App = () => {
  return (
    <div className={s.App}>
      <div className={s.AppContainer}>
        <CreateMatrix />
        <Routes>
          <Route path="matrixtable" element={<MatrixTable />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
