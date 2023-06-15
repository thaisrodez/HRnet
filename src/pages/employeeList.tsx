import React, { type ReactElement } from 'react'
import { Header } from '../components/header'
import { EmployeeTable } from '../components/UI/employeeTable'

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
