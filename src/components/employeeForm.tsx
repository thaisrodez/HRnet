import React, { type ReactElement } from 'react'
import { AddressForm } from './addressForm'
import { Select } from './UI/select'
import { departments } from '../data/selectData'

export function EmployeeForm(): ReactElement {
  return (
    <div className='mx-auto w-1/2'>
      <h2 className='h2'>Create Employee</h2>
      <form className='flex flex-col space-y-4'>
        <div>
          <label htmlFor="first-name" className='label'>First Name</label>
          <input type="text" id="first-name" className="input" />
        </div>
        <div>

          <label htmlFor="last-name" className='label'>Last Name</label>
          <input type="text" id="last-name" className="input" />
        </div>
        <div>

          <label htmlFor="date-of-birth" className='label'>Date of Birth</label>
          <input id="date-of-birth" type="data" className="input" />
        </div>
        <div>

          <label htmlFor="start-date" className='label'>Start Date</label>
          <input id="start-date" type="data" className="input" />
        </div>

        <AddressForm />

        <div>
          <Select label="Deparment" name="department" id="department" options={departments} />
        </div>

        <button className='btn'>Save</button>

      </form>
    </div>
  )
}
