import React from 'react'
import { useLettersAnimation } from '../hooks/useLettersAnimation'

export const ContentHome = ({showApp}) => {

  const {showName, showRole, showButtons} = useLettersAnimation()

  return (
    <>
      {showApp &&
        <div className='w-full flex flex-col items-center md:flex-row md:px-10'>
          <div className='w-[98%] flex flex-col items-center px-5'>
            <h1 className="home-text w-full flex flex-col text-2xl font-bold text-white font-orbitron md:text-4xl xl:text-6xl">
              <span className={`letters ${showApp && 'greeting-animation'}`}>
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
              
            </h1>
            {showButtons && 
            <div className='w-full flex justify-start gap-8 pt-4 text-white font-bold md:pl-20'>
              <button className='onLoad w-36 h-14 bg-[#160d45] md:w-48 md:text-xl md:h-16 rounded-lg border-2 hover:opacity-50 transition-all duration-350' type='button'>Currículum</button>
              <button className='onLoad w-36 h-14 bg-[#160d45] md:w-48 md:text-xl md:h-16 rounded-lg border-2 hover:opacity-50 transition-all duration-350' type='button'>Contacto</button>
            </div>
            }
            
          </div>
          <div className='hidden  rounded-full border-8  justify-center items-center p-10 md:flex'>
              <img className='w-64' src="/public/assets/images/robot.png" alt="" />
          </div>
        </div>
      }
    </>
  )
}
