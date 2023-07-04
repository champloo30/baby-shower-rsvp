import React from 'react'
import CloseButton from '../buttons/closeButton'

export default function Registry({setShowRSVP, setShowRegistry}: {setShowRSVP: any, setShowRegistry: any}) {
  return (
    <div className='h-full w-full absolute flex flex-col justify-center items-center gap-4 bg-container'>
      <CloseButton setShowRSVP={setShowRSVP} setShowRegistry={setShowRegistry} />
      <div className="h-[32rem] md:h-[36rem] w-96 md:w-[46rem] bg-pink-300 container">
        <div className="h-full p-8 flex flex-col justify-evenly items-center">
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl md:text-5xl text-center'>Here are the links to our registries</h1>
            <p className='text-xl text-center'>We appreciate any and every contribution. Thank you!</p>
          </div>
          <div className='w-full flex justify-evenly'>
            <a className='flex flex-col items-center' href='https://www.target.com/gift-registry/gift/kensley-lincoln' target="_blank" rel="noopener noreferrer">
              <svg className='w-24' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#000000" stroke="#000000" stroke-width="0" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="#f9a8d4" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#000000" stroke="#000000" stroke-width="0" stroke-miterlimit="10" stroke-linejoin="round"/></svg>
              <p className='text-xl'>Target</p>
            </a>
            <a className='flex flex-col items-center' href='https://www.amazon.com/baby-reg/okeia-dunn-january-2024-hinesville/1GSW4XPGPQ052' target="_blank" rel="noopener noreferrer">
              <svg className='w-24' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="none"/>
                <path d="M15.93,17.09a.54.54,0,0,1-.63.06,6.55,6.55,0,0,1-1.54-1.79,5.31,5.31,0,0,1-4.42,1.95,3.8,3.8,0,0,1-4-4.17A4.55,4.55,0,0,1,8.19,8.76a18.39,18.39,0,0,1,5-.93V7.5a3.42,3.42,0,0,0-.33-2,1.79,1.79,0,0,0-1.5-.7A2,2,0,0,0,9.25,6.45a.6.6,0,0,1-.47.49l-2.6-.28a.47.47,0,0,1-.4-.56C6.38,3,9.23,2,11.78,2a6.1,6.1,0,0,1,4,1.33C17.11,4.55,17,6.18,17,8v4.17a3.6,3.6,0,0,0,1,2.48c.17.25.21.54,0,.71l-2.06,1.78h0m-2.7-6.53V10c-1.94,0-4,.39-4,2.67,0,1.16.61,1.95,1.63,1.95a2.19,2.19,0,0,0,1.86-1.22,5.32,5.32,0,0,0,.5-2.84m6.93,9A14.29,14.29,0,0,1,12.1,22a14.59,14.59,0,0,1-9.85-3.76c-.2-.18,0-.43.25-.29a19.68,19.68,0,0,0,9.83,2.61A19.69,19.69,0,0,0,19.84,19c.37-.16.66.24.32.51m.91-1c-.28-.36-1.85-.17-2.57-.08-.19,0-.22-.16,0-.3A3.92,3.92,0,0,1,22,17.79a3.86,3.86,0,0,1-1.24,3.32c-.18.16-.35.07-.26-.11C20.76,20.33,21.35,18.86,21.07,18.5Z"/>
              </svg>
              <p className='text-xl'>Amazon</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
