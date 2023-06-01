import React, { type ReactElement } from 'react'
import { states } from '../data/selectData'
import { Select } from './UI/select'
import { formatState } from '../utils/formatState'

export function AddressForm(): ReactElement {
  return (
    <fieldset className='border border-solid border-blue-100 p-4 border-spacing-y-4'>
      <legend>Address</legend>
      <div>
        <label htmlFor="street" className='label'>Street</label>
        <input id="street" type="text" className='input' />
      </div>
      <div>
        <label htmlFor="city" className='label'>City</label>
        <input id="city" type="text" className='input' />
      </div>
      <div>
        <Select label="State" name="state" id="state" options={formatState(states)} />
      </div>
      <div>

        <label htmlFor="zip-code" className='label'>Zip Code</label>
        <input id="zip-code" type="number" className='input' />
      </div>
    </fieldset>
  )
}
