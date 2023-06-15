import React, { type ReactElement } from 'react'
import { type Employee, mockEmployees } from '../../data/mockData'

export function EmployeeTable(): ReactElement {
  return (
    <table className="table-auto w-full border-y-2">
      <thead>
        <tr>
          <th className='py-4'>First name</th>
          <th className='py-4'>Last Name</th>
          <th className='py-4'>Start Date</th>
          <th className='py-4'>Department</th>
          <th className='py-4'>Date of Birth</th>
          <th className='py-4'>Street</th>
          <th className='py-4'>City</th>
          <th className='py-4'>State</th>
          <th className='py-4'>Zip Code</th>
        </tr>
      </thead>
      <tbody className='border-y-2'>
        {mockEmployees.map((employee: Employee, index: number) => (
          <tr key={employee.id} className={`${index % 2 === 0 ? 'bg-slate-100' : ''} border-y`}>
            <td className='p-2'>{employee.firstname}</td>
            <td className='p-2'>{employee.lastname}</td>
            <td className='p-2'>{employee.startDate.toString()}</td>
            <td className='p-2'>{employee.department}</td>
            <td className='p-2'>{employee.dateOfBirth.toString()}</td>
            <td className='p-2'>{employee.street}</td>
            <td className='p-2'>{employee.city}</td>
            <td className='p-2'>{employee.state}</td>
            <td className='p-2'>{employee.zipCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
