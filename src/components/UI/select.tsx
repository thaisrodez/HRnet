import React, { type ReactElement } from 'react'

interface Option {
  key: string
  name: string
}

interface SelectProps {
  label: string
  name: string
  id: string
  options: Option[]
}

export function Select({ label, name, id, options }: SelectProps): ReactElement {
  return (
    <>
      <label htmlFor={id} className='label'>{label}</label>
      <select name={name} id={id} className='input'>
        {options.map((option) => (
          <option key={option.key} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
}
