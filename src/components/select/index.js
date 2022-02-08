import React from "react";

import style from "./select.module.scss";

const Select = ({
  label,
  options,
  name,
  onBlur,
  inputRef,
  select,
  placeHolder,
  errorMessage,
  error,
}) => {
  return (
    <div className={`${style.generalSettingsInputContainer} ${select}`}>
      {label && (
        <label style={{ color: error ? "#ff5050" : "" }}>{label}</label>
      )}
      <select
        name={name}
        onBlur={onBlur}
        className={style.select}
        ref={inputRef}
        style={{ border: error ? "1px solid #ff5050" : " 1px solid #d9d9d9" }}
      >
        <option value="" style={{ textTransform: "capitalize" }}>
          {placeHolder}
        </option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && errorMessage && (
        <span className={style.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Select;
