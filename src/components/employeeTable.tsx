import React, { type ReactElement } from 'react'

export function EmployeeTable(): ReactElement {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tony</td>
          <td>Stark</td>
          <td>01/02/2023</td>
          <td>Marketing</td>
          <td>01/02/2023</td>
          <td>Bd Vauban</td>
          <td>Marseille</td>
          <td>France</td>
          <td>13000</td>
        </tr>
        <tr>
          <td>Stark</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>01/02/2023</td>
          <td>01/02/2023</td>
          <td>01/02/2023</td>
        </tr>
        <tr>
          <td>Marketing</td>
          <td>Marketing</td>
          <td>Marketing</td>
        </tr>
      </tbody>
    </table>
  )
}
