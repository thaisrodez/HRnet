import React from 'react'
import type { ReactElement } from 'react'
import { Header } from '../components/header'
import { Link } from 'react-router-dom'
import { EmployeeForm } from '../components/employeeForm'

export function Home(): ReactElement {
  return (
    <>
      <Header title='HRnet' />
      <Link to="/employees" className='link'> View Current Employees</Link>
      <EmployeeForm />
    </>
  )
}
