import React from 'react'
import { useLettersAnimation } from '../hooks/useLettersAnimation'

export const ContentHome = ({showApp}) => {

  const {showName, showRole, showButtons} = useLettersAnimation()

  return (
    <>
      {showApp &&
        <div className='w-full flex flex-col-reverse items-center justify-center gap-10 px-5 pb-10 sm:flex-row md:pb-0 md:px-10 xl:pr-36'>
          <div className='w-full min-w-[280px] min-h-[180px] flex flex-col items-center  px-5'>
            <h1 className="home-text min-w-[236px] min-h-[108px]  flex flex-col items-start text-3xl font-bold text-white font-orbitron md:mx-0 md:w-full md:text-4xl xl:text-6xl">
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
            <div className='flex  gap-8 pt-4 text-white font-bold md:w-full md:justify-start md:pl-20'>
              <a href='/assets/docs/CVJuanGualdronSpanish.pdf' target="_blank" rel='noopener noreferrer' className='
              onLoad home-buttons h-14 bg-[#160d45] rounded-lg border-2 transition-all duration-350 text-center p-[13px] md:p-4
              md:w-48 md:text-xl md:h-16 hover:opacity-50' 
              >Currículum</a>
              <a href='#contact' className='
              onLoad home-buttons h-14 bg-[#160d45] rounded-lg border-2 transition-all duration-350 text-center p-[13px] md:p-4
              md:w-48 md:text-xl md:h-16  
              hover:opacity-50'>
              Contacto</a>
            </div>
            }
          </div>
          <div className='box-animation onLoad justify-center items-center p-12 transition-all duration-350 md:p-14 lg:p-16 flex'>
              <img className='w-full 
              min-w-[80px] min-h-[50px] max-w-[100px] max-h-[100px] 
              md:max-w-[200px] md:max-h-[170px] 
              lg:max-w-[300px] lg:max-h-[200px]
              z-20' src="/assets/images/robot.png" alt="Profile image animated" />
          </div>
          <a className='absolute bottom-5' href="#aboutme">
            <svg className='w-12  text-white  fill-current first-load transition-all duration-300 md:w-16 hover:text-[#ed05f9]' viewBox="0 0 66.915 66.915" >
              <g>
                <g>
                  <path d="M32.745,43.348c0.383,0.348,0.863,0.519,1.342,0.519c0.076,0,0.151-0.015,0.228-0.023
                  c0.028,0.001,0.057,0.008,0.085,0.008c0.545,0,1.088-0.222,1.482-0.657l15.231-16.804c0.742-0.818,0.68-2.083-0.139-2.824
                  c-0.818-0.743-2.083-0.679-2.824,0.139L34.113,39.191L18.626,25.154c-0.819-0.744-2.083-0.68-2.824,0.139
                  c-0.742,0.818-0.68,2.083,0.139,2.824L32.745,43.348z"/>
                  <path d="M33.457,66.915c18.449,0,33.458-15.009,33.458-33.457C66.915,15.009,51.906,0,33.457,0C15.009,0,0,15.009,0,33.458
                  C0,51.906,15.009,66.915,33.457,66.915z M33.457,4C49.7,4,62.915,17.215,62.915,33.458c0,16.242-13.215,29.457-29.458,29.457
                  C17.215,62.915,4,49.7,4,33.458C4,17.215,17.215,4,33.457,4z"/>
                </g>
              </g>
            </svg>
          </a>
        </div>
      }
    </>
  )
}
