import { CompanyApplicationProvider } from '@/context/CompanyApplicationContext'
import React from 'react'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CompanyApplicationProvider>
        {children}
    </CompanyApplicationProvider>
  )
}

export default ProtectedLayout