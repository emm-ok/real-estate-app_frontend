import { AgentApplicationProvider } from '@/context/AgentApplicationContext'
import React from 'react'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AgentApplicationProvider>
        {children}
    </AgentApplicationProvider>
  )
}

export default ProtectedLayout