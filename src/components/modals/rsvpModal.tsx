'use client'

import React, { FormEvent, useState } from 'react'
import CloseButton from '@/components/buttons/closeButton'

export default function RSVP({setShowRSVP, setShowRegistry}: {setShowRSVP: any, setShowRegistry: any}) {

  return (
    <div className='h-full w-full absolute flex flex-col justify-center items-center gap-4 bg-container'>
      <CloseButton setShowRSVP={setShowRSVP} setShowRegistry={setShowRegistry} />
      <div className="h-[45.5rem] md:h-[36rem] w-96 md:w-[46rem] bg-pink-300 container">
        <iframe className='h-full w-full' src="https://docs.google.com/forms/d/e/1FAIpQLSfssL0mdtzV-U6DQU_Q9oc-cxErGXOtdU6DwvJKDBWsk7SWOQ/viewform?embedded=true">Loading…</iframe>
      </div>
    </div>
  )
}
