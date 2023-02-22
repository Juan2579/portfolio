import React, { useEffect, useState } from 'react'
import { useLettersAnimation } from '../hooks/useLettersAnimation';

export const ContentHomeVideo = ({showApp}) => {

  const {showName, showRole, showButtons} = useLettersAnimation()
  const [srcVideo, setSrcVideo] = useState("")
  const [screenSize, getDimension] = useState(window.innerWidth);

  const setDimension = () => {
    getDimension(window.innerWidth)
    if(screenSize < 600){
      setSrcVideo("/assets/videos/mobile.mp4")
    }else{
      setSrcVideo("/assets/videos/desktop.mp4")
    }
  }
  useEffect(() => {
    if(screenSize < 600){
      setSrcVideo("/assets/videos/mobile.mp4")
    }else{
      setSrcVideo("/assets/videos/desktop.mp4")
    }
  }, [screenSize])
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  
  return (
    <section className='w-full bg-[#110938] relative h-[90vh] flex flex-col '>
      <video preload="auto" playsInline={true} autoPlay={true}  loop={true} muted={true} className='w-full h-full absolute z-0 object-cover' src={srcVideo} />
      {showApp &&
        <div className='w-[98%] flex flex-col items-center px-5 z-10'>
          <h1 className="w-full flex flex-col text-2xl font-bold text-white font-orbitron md:text-4xl xl:text-6xl">
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
      }
      
    </section>
  )
}
