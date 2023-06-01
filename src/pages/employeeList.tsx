import React, { type ReactElement } from 'react'
import { Header } from '../components/header'
import { Link } from 'react-router-dom'
import { EmployeeTable } from '../components/employeeTable'

export function EmployeeList(): ReactElement {
  return (
    <>
      <Header title='Current Employees' />
      <Link to='/'>Home</Link>
      <div className='px-8'>
        <EmployeeTable />
      </div>
    </>
  )
}
