import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import CreateTable from "./components/Matrix/CreateTable/CreateTable";
import Matrix from "./components/Matrix/Matrix";
const App = () => {
  return (
    <div className={s.App}>
      <div className={s.AppContainer}>
        <Routes>
          <Route path="createtable" element={<CreateTable />} />
          <Route path="matrix" element={<Matrix />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
