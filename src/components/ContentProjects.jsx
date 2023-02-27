import React from 'react'
import { projects } from '../data/projects'
import { useImageSrc } from '../hooks/useImageSrc'

export const ContentProjects = () => {
  const { srcImage } = useImageSrc()
  return (
    <div className='w-full flex flex-col gap-8 lg:gap-7'>
      <h2 className='text-xl font-bold underline underline-offset-8 decoration-[#ed05f9] pl-6 lg:pl-0 md:text-2xl  lg:text-3xl lg:pt-8 xl:pt-12 xl:text-4xl'>Proyectos</h2>
      <ul className='w-full flex items-center justify-center flex-wrap gap-7 px-5 lg:px-0'>
        {projects.map((project, index) => {
          return (
            <li key={`${project}-${index}`} className='max-w-[450px] h-auto flex flex-col items-center bg-[#0e0d10] gap-3 py-4 px-3 bg-clip-padding bg-opacity-40 rounded-xl shadow-2xl md:max-w-[350px] lg:max-w-[450px] lg:min-h-[540px] lg:gap-5 xl:min-h-[560px] 2xl:max-w-[450px] 2xl:min-h-[530px]'  style={{backdropFilter: "blur(5px)"}}>
              <p className='text-lg font-bold md:text-xl lg:text-2xl'>{project.name}</p>
              <p className='text-base sm:text-base md:text-lg text-gray-300'>{project.description}</p>
              <div className='w-4/5 max-h-[300px] max-w-[250px]  lg:min-w-[400px] lg:min-h-[300px] 2xl:min-w-[400px] 2xl:min-h-[300px] border-4 rounded-xl overflow-hidden'>
                <img className='w-full h-full lg:min-w-[400px] lg:min-h-[300px] 2xl:min-w-[400px] 2xl:min-h-[300px]  transition-all duration-300 hover:scale-125' 
                  src={srcImage === "mobile" ? project.mobilePath : project.desktopPath} 
                  alt={project.name}
                  loading="lazy"
                />             
              </div>
              <div className='flex gap-5 text-center'>
                <a className='project-button w-24 h-10 relative border-2 border-[#ed05f9] p-1 text-[#ed05f9] font-orbitron font-bold shadow-xl transition-all ease-in' href={project.deployURL} target="_blank" rel="noopener noreferrer">Deploy</a>
                <a className='project-button w-24 h-10 relative border-2 border-[#ed05f9] p-1 text-[#ed05f9] font-orbitron font-bold shadow-xl transition-all ease-in' href={project.repoURL} target="_blank" rel="noopener noreferrer">Repo</a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
