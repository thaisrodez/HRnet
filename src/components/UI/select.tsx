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
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select({ label, name, id, options, onChange }: SelectProps): ReactElement {
  return (
    <>
      <label htmlFor={id} className='label'>{label}</label>
      <select name={name} id={id} className='input' onChange={onChange}>
        {options.map((option) => (
          <option key={option.key} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
}
