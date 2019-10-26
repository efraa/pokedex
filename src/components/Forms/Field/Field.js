import React from 'react'

export const Field = ({
  placeholder,
  label,
  type,
  wrapper,
  onChange,
  onClick,
  value,
  name,
  children,
}) => (
  <div className={`col-12 ${wrapper || ''}`}>
    <div className="form__field">
      {label ? <label>{label}</label> : ''}
      <input
        type={type || 'text'}
        className="form__control"
        placeholder={placeholder || ''}
        onChange={onChange}
        onClick={onClick}
        value={value}
        name={name}
      ></input>
      {children}
    </div>
  </div>
)
