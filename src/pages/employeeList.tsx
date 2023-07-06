import React, { useMemo } from 'react'
import { Header } from '../components/header'
import { mockEmployees, tableHeaders } from '../data/mockData'
import { useAppSelector } from '../hooks/reduxHooks'
import { Table } from 'paginated-table-pkg'

export function EmployeeList() {
  const newEmployees = useAppSelector((state) => state.employees)
  const getEmployees = useMemo(() => newEmployees.concat(mockEmployees), [newEmployees])
  return (
    <>
      <Header title='Current Employees' linkLabel='Home' linkPath='/' />
      <Table data={getEmployees} tableHeaders={tableHeaders} />
    </>
  )
}
