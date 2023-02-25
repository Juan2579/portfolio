import React from 'react'
import { technologies } from '../data/technologies'

export const ContentSkills = () => {
  return (
    <div className='w-full flex flex-col gap-4 lg:gap-7'>
      <h2 className='text-xl font-bold underline underline-offset-8 decoration-[#ed05f9] md:text-2xl lg:text-3xl lg:pt-8 xl:text-4xl'>Habilidades</h2>
      <div className='w-full h-auto flex flex-col lg:gap-4 lg:flex-row lg:items-start'>
        <div className='skills-container lg:flex lg:flex-col lg:gap-5'>
          <p className='text-gray-300 text-md pb-4 md:text-lg lg:text-xl xl:w-full xl:text-2xl'>
            A lo largo de mi carrera como FrontEnd Developer he desarrollado habilidades en tecnologías que me permiten crear productos de alto valor, estas son algunas tecnologías con las que trabajo y me especializo:
          </p>
          <img className='skills-image hidden w-[500px] h-[300px] lg:inline-block lg:mx-auto' src="/assets/images/technologyIlustration.png" alt="Technologies ilustration" />
        </div>
        <ul className='w-full h-full flex justify-center items-center flex-wrap gap-3 lg:pb-10'>
          {technologies.map((technology, index) => {
            return (
              <li key={`${technology.name}-${index}`} className='technology-shadow w-32 h-40 relative flex flex-col gap-1 justify-center items-center bg-[#310a51] rounded-lg z-10 transition-all duration-500 opacity-100 md:w-36 md:h-44 md:hover:scale-110 md:hover:mx-3 xl:hover:mx-6'>
                <div className='absolute top-0 left-0 flex items-center p-2'>
                  <div className='px-1'>
                    <span className='w-3 h-3 inline-block items-center p-1 rounded-[50%] bg-[#ff605c]'></span>
                  </div>
                  <div className='px-1'>
                    <span className='w-3 h-3 inline-block items-center p-1 rounded-[50%] bg-[#ffbd44]'></span>
                  </div>
                  <div className='px-1'>
                    <span className='w-3 h-3 inline-block items-center p-1 rounded-[50%] bg-[#00ca4e]'></span>
                  </div>
                </div>
                <img className='pt-5' src={technology.path} alt={technology.alt} />
                <p className='text-[12px] font-orbitron font-bold'>{technology.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
