import React, { type ReactElement } from 'react'
import ReactDatePicker, { type ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { months, years } from '../../utils/datesHelper'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

interface CustomDatePickerProps {
  id: string
  name: string
  startDate: Date
  handleDateChange: (name: string, date: Date | null) => void
}

export function CustomDatePicker({ id, name, startDate, handleDateChange }: CustomDatePickerProps): ReactElement {
  const customHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: ReactDatePickerCustomHeaderProps): JSX.Element => (
    <div
      className='m-2 flex justify-center space-x-2'
    >
      <button type='button' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        <ChevronLeftIcon className='w-4 h-4' />
      </button>
      <select
        className='input'
        value={date.getFullYear()}
        onChange={({ target: { value } }) => { changeYear(parseInt(value)) }}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        className='input'
        value={months[date.getMonth()]}
        onChange={({ target: { value } }) => { changeMonth(months.indexOf(value)) }
        }
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <button type='button' onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        <ChevronRightIcon className='w-4 h-4' />
      </button>
    </div>
  )

  const handleChange = (date: Date | null): void => {
    handleDateChange(name, date)
  }

  return (
    <ReactDatePicker
      id={id}
      name={name}
      selected={startDate}
      onChange={handleChange}
      todayButton="Today"
      renderCustomHeader={customHeader}
      className='input'
      showPopperArrow={false}
    />

  )
}
