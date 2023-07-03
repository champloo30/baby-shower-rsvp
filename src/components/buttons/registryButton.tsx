import React from 'react'

export default function RegistryButton({toggleRegistry}: {toggleRegistry: any}) {
  
  return (
    <div className="border-2 border-pink-300 py-2 px-4 hover:bg-pink-300 text-pink-300 hover:text-neutral-50 text-lg transition linear duration-300 cursor-pointer" onClick={toggleRegistry}>Registry</div>
  )
}