import React from 'react'
import Loader from './Loader'

const PageLoader = ({ text }: { text?: string}) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-transparent'>
        <Loader size={32} text={text} />
    </div>
  )
}

export default PageLoader