import React from 'react'
import type { ReactElement } from 'react'
import { Header } from '../components/header'
import { EmployeeForm } from '../components/employeeForm'

export function Home(): ReactElement {
  return (
    <>
      <Header title='HRnet' linkLabel='View Current Employees' linkPath='/employees' />
      <EmployeeForm />
    </>
  )
}
