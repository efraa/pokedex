import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export const PokeSelect = ({
  placeholder,
  wrapper,
  onChange,
  onClick,
  value,
  name,
  options,
  children,
}) => (
  <div className={`col-12 ${wrapper || ''}`}>
    <div className="form__field">
      <Dropdown 
        placeholder={placeholder || ''}
        options={options}
        onChange={onChange}
        onClick={onClick}
        value={value}
        name={name}
        selection
        className="form__control"
      />
      {children}
    </div>
  </div>
)
