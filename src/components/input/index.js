import React from 'react';

import style from './input.module.scss';

const Input = ({
  label,
  name,
  type,
  placeholder,
  error,
  errorMessage,
  ...restOfProps
}) => {
  return (
    <>
      <div className={style.inputContainer}>
        {label && (
          <label style={{ color: error ? '#ff5050' : '' }}>{label}</label>
        )}

        <input
          style={{
            border: error ? '1px solid #ff5050' : ' 1px solid #d9d9d9',
            color: error ? '#ff5050' : '#6e6d6d',
          }}
          name={name}
          type={type}
          placeholder={placeholder}
          {...restOfProps}
        />

        {error && errorMessage && (
          <span className={style.errorMessage}>{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default Input;
