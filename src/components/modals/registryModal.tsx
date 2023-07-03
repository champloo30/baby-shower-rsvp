import React from 'react'
import CloseButton from '../buttons/closeButton'

export default function Registry({setShowRSVP, setShowRegistry}: {setShowRSVP: any, setShowRegistry: any}) {
  return (
    <div className='h-full w-full absolute flex justify-center items-center bg-container'>
      <div className="h-[32rem] w-96 bg-pink-300 container">
        <div className="mx-8 flex flex-col justify-center items-center">
          <h1>Registry</h1>
          <CloseButton setShowRSVP={setShowRSVP} setShowRegistry={setShowRegistry} />
        </div>
      </div>
    </div>
  )
}
