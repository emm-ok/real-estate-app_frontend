"use client"
import { useListing } from '@/hooks/useListing'
import React from 'react'
import ListingGrid from '../listing/ListingGrid';

const Listing = () => {
    const { listings } = useListing();
  return (
    <div className='p-20'>
        <ListingGrid listings={listings.slice(0, 6)} />
    </div>
  )
}

export default Listing