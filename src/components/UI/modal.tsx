import React, { type ReactElement } from 'react'

interface ModalProps {
  open: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  content: string
}

export function Modal({ open, setOpenModal, content }: ModalProps): ReactElement | null {
  if (open) {
    return (
      <div className="w-screen h-screen absolute inset-0 z-30 overflow-hidden flex items-center justify-center">
        <div className='w-1/2 h-1/3 bg-white border border-gray-200 rounded-md shadow-md relative flex items-center justify-center'>
          <button
            onClick={() => { setOpenModal(false) }}
            className='rounded-full py-2 px-4 shadow-xl absolute -right-4 -top-4 bg-blue-600 text-white'
          >
            X
          </button>
          <div>
            {content}
          </div>
        </div>
      </div>
    )
  }
  return null
}
