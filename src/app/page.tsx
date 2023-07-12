'use client'

import RSVPButton from "@/components/buttons/rsvpButton";
import RegistryButton from "@/components/buttons/registryButton";
import { useState } from "react";
import RSVP from "@/components/modals/rsvpModal";
import Registry from "@/components/modals/registryModal";


export default function Home() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [showRegistry, setShowRegistry] = useState(false)

  function toggleRSVP() {
    setShowRSVP(true)
    console.log('RSVP:' + showRSVP);
  }

  function toggleRegistry() {
    setShowRegistry(true)
    console.log('Registry:' + showRegistry);
  }

  return (
    <div className="h-screen relative flex justify-center items-center bg-butterfly">
      {showRSVP && <RSVP setShowRSVP={setShowRSVP} setShowRegistry={setShowRegistry} />}
      {showRegistry && <Registry setShowRSVP={setShowRSVP} setShowRegistry={setShowRegistry} />}
      <div className="h-full w-full flex flex-col justify-center items-center gap-6 text-center bg-container">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-purple-400 text-2xl md:text-3xl">A little</p>
          <p className="text-pink-300 text-6xl md:text-8xl font-greatVibes">Butterfly</p>
          <p className="text-purple-400 text-2xl md:text-3xl -mt-2">is on the way!</p>
        </div>
        <p className="text-black text-xl md:text-2xl">Join us for a baby shower in honor of:</p>
        <h1 className="text-pink-300 text-6xl md:text-8xl font-greatVibes">Kensley-Lincoln Alisa Dunn</h1>
        <div>
          <p className="text-purple-400 text-xl md:text-3xl">When:</p>
          <p className="text-black text-md md:text-xl">Saturday, September 30<sup>th</sup>, 2023</p>
          <p className="text-black text-md md:text-xl">2-5pm</p>
        </div>
        <div>
          <p className="text-purple-400 text-xl md:text-3xl">Where:</p>
          <p className="text-black text-md md:text-xl">1365 W Orange St, Jesup, GA 31545</p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <RSVPButton toggleRSVP={toggleRSVP} />
          <RegistryButton toggleRegistry={toggleRegistry} />
        </div>
      </div>
    </div>
  )
}
