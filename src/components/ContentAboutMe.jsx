import React, { useEffect } from 'react'
import { useIsVisible } from '../hooks/useIsVisible'

export const ContentAboutMe = () => {
  const {ref, isVisible} = useIsVisible(0.3)
  return (
    <div ref={ref} className={`w-full flex flex-col gap-4 lg:gap-7 ${
      isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
      }`}>
      <h2 className='text-xl font-bold underline underline-offset-8 decoration-[#ed05f9] md:text-2xl lg:text-3xl lg:pt-4 xl:text-4xl'>Sobre mí</h2>
      <p className='text-gray-300 text-md pb-4 md:text-lg lg:text-xl xl:text-2xl'>
        Soy un apasionado por el <span className='text-[#ed05f9]'>desarrollo web</span> y el mundo de la <span className='text-[#ed05f9]'>programación</span>. Mi interés por esta profesión empezó hace dos años cuando escribí mi primer linea de código, desde entonces me he enfocado en desarrollar <span className='text-[#ed05f9]'>aplicaciones web</span>  eficaces, accesibles y divertidos. Tengo habilidades para resolver problemas, encontrar nuevos desafios y aprender diariamente.
      </p>
      <div className='w-full flex flex-col items-center gap-8 lg:flex-row lg:gap-16'>
        <div className='w-52 h-48 mx-auto rounded-[50%] border-8 bg-personalImage bg-cover bg-no-repeat md:min-w-[250px] md:min-h-[250px] lg:min-w-[300px] lg:min-h-[300px] xl:min-w-[400px] xl:min-h-[400px]'></div>
        <ul className='w-full flex flex-col gap-4 lg:gap-10'>
          <li className='w-full flex items-center justify-start gap-4'>
            <svg className='w-[40%] max-w-[35px] fill-current text-[#ed05f9] pb-10 md:max-w-[40px] lg:max-w-[50px] xl:max-w-[55px]' viewBox="0 0 48 48">
              <g>
                <path d="M47,24a1,1,0,0,0,1-1V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V33a5.006,5.006,0,0,0,5,5H16v4.465l-2.555,1.7A1,1,0,0,0,13,45v1a2,2,0,0,0,2,2H33a2,2,0,0,0,2-2V45a1,1,0,0,0-.445-.832L32,42.465V41a1,1,0,0,0-2,0v2a1,1,0,0,0,.445.832L33,45.535V46H15v-.465l2.555-1.7A1,1,0,0,0,18,43V38H43a5.006,5.006,0,0,0,5-5V28a1,1,0,0,0-1-1H6a1,1,0,0,0,0,2H46v4a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H43a3,3,0,0,1,3,3V23A1,1,0,0,0,47,24Z"/><path d="M19.707,7.293a1,1,0,0,0-1.414,0l-6,6a1,1,0,0,0,0,1.414l6,6a1,1,0,0,0,1.414-1.414L14.414,14l5.293-5.293A1,1,0,0,0,19.707,7.293Z"/><path d="M28.293,20.707a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0,0-1.414l-6-6a1,1,0,1,0-1.414,1.414L33.586,14l-5.293,5.293A1,1,0,0,0,28.293,20.707Z"/>
              </g>
            </svg>
            <p className='md:text-lg lg:text-xl xl:text-2xl'>
              Mi tecnología favorita es 
              <span className='text-[#ed05f9]'> React.js </span> 
              ya que me permite desarrollar productos increibles de manera ágil y productiva.
            </p>
          </li>

          <li className='w-full flex items-center justify-start gap-4'>
            <svg className='w-[30%] max-w-[35px] fill-current text-[#ed05f9] pb-10 md:max-w-[40px] lg:max-w-[50px] xl:max-w-[55px]' viewBox="0 0 48 48">
              <g><path d="M43,12H42V3a2.916,2.916,0,0,0-3-3H8A2.916,2.916,0,0,0,5,3V13a1,1,0,0,0,2,0V3A.915.915,0,0,1,8,2H39a.915.915,0,0,1,1,1V13a1,1,0,0,0,1,1h2a2.987,2.987,0,0,1,2.21.974L24,28.806,1.546,14.163A1,1,0,0,0,0,15V43a5.006,5.006,0,0,0,5,5H43a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,43,12Zm3,31a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V16.846l15.579,10.16L6.293,38.293a1,1,0,1,0,1.414,1.414L19.291,28.123l4.163,2.714a1,1,0,0,0,1.092,0l4.163-2.714L40.293,39.707a1,1,0,0,0,1.414-1.414L30.421,27.006,46,16.849c0,.05,0,.1,0,.151Z"/><path d="M21,9a4,4,0,1,0-4,4A4,4,0,0,0,21,9ZM15,9a2,2,0,1,1,2,2A2,2,0,0,1,15,9Z"/><path d="M25,7h9a1,1,0,0,0,0-2H25a1,1,0,0,0,0,2Z"/><path d="M25,13h9a1,1,0,0,0,0-2H25a1,1,0,0,0,0,2Z"/><path d="M25,19h5a1,1,0,0,0,0-2H25a1,1,0,0,0,0,2Z"/></g>
            </svg>
            <p className='md:text-lg lg:text-xl xl:text-2xl'>
              Estoy familiarizado con el 
              <span className='text-[#ed05f9]'> trabajo en equipo </span>  
              y la 
              <span className='text-[#ed05f9]'> buena comunicación </span> 
              en entornos de trabajo.
            </p>
          </li>

          <li className='w-full flex items-center justify-start gap-4'>
            <svg className='w-[45%] max-w-[35px] fill-current text-[#ed05f9] pb-10 md:max-w-[40px] lg:max-w-[50px] xl:max-w-[55px]' viewBox="0 0 48 48">
              <g>
                <path d="M47,12a1,1,0,0,0-1,1V33.586l-11,11V38a3,3,0,0,1,3-3h3a1,1,0,0,0,0-2H38a5.006,5.006,0,0,0-5,5v8H5a3,3,0,0,1-3-3V13.005A2.853,2.853,0,0,1,5,10h8a1,1,0,0,0,0-2H5a4.821,4.821,0,0,0-5,5V43a5.006,5.006,0,0,0,5,5H34a.988.988,0,0,0,.385-.078,1,1,0,0,0,.323-.216l13-13A1,1,0,0,0,48,34V13A1,1,0,0,0,47,12Z"/><path d="M38.707,13.293a1,1,0,0,0-1.414,0l-3,3a1,1,0,0,0,0,1.416l3,3a1,1,0,0,0,1.414-1.414L37.414,18H41a2.916,2.916,0,0,0,3-3V7a2.916,2.916,0,0,0-3-3H35a1,1,0,0,0,0,2h5.988A.919.919,0,0,1,42,7v7.988A.918.918,0,0,1,41,16H37.414l1.293-1.293A1,1,0,0,0,38.707,13.293Z"/><path d="M7,18h6a1,1,0,0,0,0-2H7a2.916,2.916,0,0,0-3,3v8a2.916,2.916,0,0,0,3,3h3.586L9.293,31.293a1,1,0,1,0,1.414,1.414l3-3a1,1,0,0,0,0-1.416l-3-3a1,1,0,0,0-1.414,1.414L10.586,28H7a.915.915,0,0,1-1-1V19A.915.915,0,0,1,7,18Z"/><path d="M24,41a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/><path d="M29,41H28a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/><path d="M18,10H30a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2H18a2,2,0,0,0-2,2V8A2,2,0,0,0,18,10Zm0-8H30V8L18,8Z"/><path d="M18,22H30a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2H18a2,2,0,0,0-2,2v6A2,2,0,0,0,18,22Zm0-8H30v6L18,20Z"/><path d="M18,34H30a2,2,0,0,0,2-2V26a2,2,0,0,0-2-2H18a2,2,0,0,0-2,2v6A2,2,0,0,0,18,34Zm0-8H30v6L18,32Z"/><path d="M7,43H19a2,2,0,0,0,2-2V39a2,2,0,0,0-2-2H7a2,2,0,0,0-2,2v2A2,2,0,0,0,7,43Zm0-4H19v2L7,41Z"/><path d="M29,37H24a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Z"/>
              </g>
            </svg>
            <p className='md:text-lg lg:text-xl xl:text-2xl'>
              Me encuentro aprendiendo todo lo relacionado con el 
              <span className='text-[#ed05f9]'> MERN </span> 
              stack 
              (<span className='text-[#ed05f9]'>MongoDB, Express, React, NodeJS</span>) 
              para el desarrollo de sitios fullstack. 
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
