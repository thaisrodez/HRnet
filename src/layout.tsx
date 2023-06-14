import React, { type ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export function Layout(): ReactElement {
  return (
    <div className="my-4">
      <Outlet />
    </div>
  )
}
