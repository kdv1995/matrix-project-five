import React from "react";
import s from "components/UI/Input/Input.module.scss";
const Input = ({ title, value, onChange }) => {
  return (
    <>
      <div className={s.InputContainer}>
        <div>{title}</div>

        <input
          className={s.Input}
          type="number"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
