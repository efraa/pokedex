import React from 'react'
import PokeDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'

export const Datepicker = ({
  placeholder,
  wrapper,
  onChange,
  children,
}) => (
  <div className={`col-12 ${wrapper || ''}`}>
    <div className="form__field">
      <PokeDatepicker 
        onDateChange={onChange}
        placeholder={placeholder}
      />
      {children}
    </div>
  </div>
)
