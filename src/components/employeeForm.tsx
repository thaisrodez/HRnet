import React, { useState, type ReactElement } from 'react'
import { AddressForm } from './addressForm'
import { Select } from './UI/select'
import { departments } from '../data/selectData'
import { Modal } from './UI/modal'
import { CustomDatePicker } from './UI/datePicker'

export interface FormInputs {
  firstname: string
  lastname: string
  dateOfBirth: Date
  startDate: Date
  street: string
  city: string
  zipCode: string
  state: string
  department: string
}

export function EmployeeForm(): ReactElement {
  const [openModal, setOpenModal] = useState(false)
  const [formInputs, setFormsInputs] = useState({
    firstname: '',
    lastname: '',
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: '',
    city: '',
    zipCode: '',
    state: '',
    department: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormsInputs({ ...formInputs, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFormsInputs({ ...formInputs, [e.target.name]: e.target.value })
  }

  const handleDateChange = (name: string, date: Date | null): void => {
    setFormsInputs({ ...formInputs, [name]: date })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setOpenModal(true)
    console.log(formInputs)
  }

  return (
    <>
      <div className='mx-auto w-1/2'>
        <h2 className='h2'>Create Employee</h2>
        <form className='flex flex-col space-y-8' onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div>
              <label htmlFor="first-name" className='label'>First Name</label>
              <input type="text" id="first-name" name="firstname" value={formInputs.firstname} onChange={handleChange} className="input" />
            </div>
            <div>

              <label htmlFor="last-name" className='label'>Last Name</label>
              <input type="text" id="last-name" name="lastname" value={formInputs.lastname} onChange={handleChange} className="input" />
            </div>
            <div>

              <label htmlFor="date-of-birth" className='label'>Date of Birth</label>
              <CustomDatePicker name='dateOfBirth' startDate={formInputs.dateOfBirth} handleDateChange={handleDateChange} />
            </div>
            <div>

              <label htmlFor="start-date" className='label'>Start Date</label>
              <CustomDatePicker name='startDate' startDate={formInputs.startDate} handleDateChange={handleDateChange} />
            </div>

            <AddressForm handleChange={handleChange} handleSelectChange={handleSelectChange} formInputs={formInputs} />

            <div>
              <Select label="Deparment" name="department" id="department" options={departments} onChange={handleSelectChange} />
            </div>

          </div>

          <button className='btn'>Save</button>
        </form>
      </div>
      <Modal open={openModal} setOpenModal={setOpenModal} content='Employee Created!' />
    </>
  )
}
