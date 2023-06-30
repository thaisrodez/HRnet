import React from 'react'
import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export function Header({ title, linkLabel, linkPath }: { title: string, linkLabel: string, linkPath: string }): ReactElement {
  return (
    <div className='p-4 text-center space-y-4 mx-auto w-fit'>
      <h1 className='h1'>{title}</h1>
      <Link to={linkPath} className='link block'>{linkLabel}</Link>
    </div>
  )
}
