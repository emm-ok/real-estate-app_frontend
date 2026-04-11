"use client"

import React, { useEffect, useState } from 'react'
import PageLoader from './PageLoader'
import { usePathname } from 'next/navigation'

const RouteLoader = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [pathname]);

    if(!loading) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur'>
        <PageLoader />
    </div>
  )
}

export default RouteLoader