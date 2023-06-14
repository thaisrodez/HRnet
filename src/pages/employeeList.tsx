import React, { type ReactElement } from 'react'
import { Header } from '../components/header'
import { EmployeeTable } from '../components/employeeTable'

export function EmployeeList(): ReactElement {
  return (
    <>
      <Header title='Current Employees' linkLabel='Home' linkPath='/' />
      <div className='px-8'>
        <EmployeeTable />
      </div>
    </>
  )
}
