import Footer from '@/components/layout/Footer'
import MainAnimate from '@/components/layout/MainAnimate'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar />
    <MainAnimate>{children}</MainAnimate>
    <Footer />
    </>
  )
}

export default ProtectedLayout