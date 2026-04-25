import MainAnimate from '@/components/layout/MainAnimate'
import React from 'react'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainAnimate>{children}</MainAnimate>
  )
}

export default ProtectedLayout