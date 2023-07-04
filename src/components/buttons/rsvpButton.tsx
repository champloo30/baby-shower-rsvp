'use client'

import React from 'react'

export default function RSVPButton({toggleRSVP}: {toggleRSVP: any}) {
  
  return (
    <div className="border-2 border-pink-300 py-2 px-4 hover:bg-pink-300 text-pink-300 hover:text-neutral-50 text-lg md:text-2xl transition linear duration-300 cursor-pointer" onClick={toggleRSVP}>RSVP</div>
  )
}
