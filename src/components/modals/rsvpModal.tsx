'use client'

import React, { FormEvent, useState } from 'react'
import CloseButton from '@/components/buttons/closeButton'

export default function RSVP({setShowRSVP, setShowRegistry}: {setShowRSVP: any, setShowRegistry: any}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState('')
  const [allergies, setAllergies] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    let form = {
      name, email, people, allergies
    }

    const rawResponse = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    const content = await rawResponse.json()

    alert(content.data.tableRange)

    setName('')
    setEmail('')
    setPeople('')
    setAllergies('')
  }

  return (
    <div className='h-full w-full absolute flex justify-center items-center bg-container'>
      <div className="h-[45.5rem] w-96 bg-pink-300 container">
        <div className="m-8 flex flex-col justify-center items-start gap-4 text-neutral-50">
          <h1 className='text-4xl'>RSVP</h1>
          <form className='h-20 w-full flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-start gap-px">
              <label className='text-lg' htmlFor="name">Name:</label>
              <input className='p-2 w-full border-2 border-purple-300 text-gray-500 placeholder-gray-500 bg-neutral-50' type="text" name="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="flex flex-col justify-center items-start gap-px">
              <label className='text-lg' htmlFor="email">Email:</label>
              <input className='p-2 w-full border-2 border-purple-300 text-gray-500 placeholder-gray-500 bg-neutral-50' type="text" name="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col justify-center items-start gap-px">
              <label className='text-lg' htmlFor="people">How many in your household plan to attend?:</label>
              <textarea className='h-32 p-2 w-full border-2 border-purple-300 text-gray-500 placeholder-gray-500 bg-neutral-50' name="people" placeholder='Please limit to 5 people.' value={people} onChange={e => setPeople(e.target.value)}></textarea>
            </div>
            <div className="flex flex-col justify-center items-start gap-px">
              <label className='text-lg' htmlFor="allergies">Any food allergies/restrictions?:</label>
              <textarea className='h-32 p-2 w-full border-2 border-purple-300 text-gray-500 placeholder-gray-500 bg-neutral-50' name="allergies" placeholder='Please list any and all restrictions.' value={allergies} onChange={e => setAllergies(e.target.value)}></textarea>
            </div>
            <div className='flex gap-2'>
              <CloseButton setShowRSVP={setShowRSVP} setShowRegistry={setShowRegistry} />
              <button className='border-2 border-neutral-50 py-2 px-4 bg-neutral-50 hover:bg-purple-300 text-pink-300 hover:text-neutral-50 text-lg transition linear duration-300 cursor-pointer' type="submit">RSVP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
