import React from 'react'

interface useScrollLockType {
  lockScroll: () => void
  unlockScroll: () => void
}

export const useScrollLock = (): useScrollLockType => {
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = ''
  }, [])

  return {
    lockScroll,
    unlockScroll,
  }
}
