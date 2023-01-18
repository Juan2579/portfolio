import React from 'react'
import { useLettersAnimation } from '../hooks/useLettersAnimation'

export const TitleHome = ({showApp}) => {

  const {showName, showRole} = useLettersAnimation()

  return (
    <>
      {showApp && 
        <h1 className="w-11/12 flex flex-col text-2xl font-bold text-white font-orbitron md:text-4xl xl:text-6xl">
          <span onChange={(e) => console.log(e)} className={`letters ${showApp && 'greeting-animation'}`}>
            ¡Hola!,
          </span>
          {showName && 
          <span className="letters name-animation">
            soy <span className='text-[#ed05f9] font-black'>Juan David,</span>
          </span> }
        
          {showRole && 
          <span className='letters role-animation'>
            Front-End Developer 
          </span>}
        
      </h1>}
    </>
  )
}
