import React from 'react'
import type { ReactElement } from 'react'

export function Header({ title }: { title: string }): ReactElement {
  return (
    <div className='p-4 w-full text-center'>
      <h1 className='h1'>{title}</h1>
    </div>
  )
}
