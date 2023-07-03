'use client'

import React from 'react'

export default function CloseButton({setShowRegistry, setShowRSVP}: {setShowRegistry: any, setShowRSVP: any}) {
  function handleClose() {
    setShowRSVP(false)
    setShowRegistry(false)
  }
  
  return (
    <div className="border-2 border-neutral-50 py-2 px-4 text-neutral-50 text-lg transition linear duration-300 cursor-pointer" onClick={handleClose}>Close</div>
  )
}