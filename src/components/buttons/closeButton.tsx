'use client'

import React from 'react'

export default function CloseButton({setShowRegistry, setShowRSVP}: {setShowRegistry: any, setShowRSVP: any}) {
  function handleClose() {
    setShowRSVP(false)
    setShowRegistry(false)
  }
  
  return (
    <div className="cursor-pointer" onClick={handleClose}>
      <svg className='fill-purple-400' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
    </div>
  )
}