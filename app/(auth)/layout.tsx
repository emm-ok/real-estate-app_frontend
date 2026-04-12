import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen bg-image'>
      <div className='absolute inset-0 bg-black/80' />

      <div className='relative z-40'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout