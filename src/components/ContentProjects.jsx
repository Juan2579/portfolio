import React from 'react'

export const ContentProjects = () => {
  return (
    <div className='w-full flex flex-col gap-8 lg:gap-7'>
      <h2 className='text-xl font-bold underline underline-offset-8 decoration-[#ed05f9] pl-6 md:text-2xl lg:text-3xl lg:pt-16 xl:text-4xl'>Proyectos</h2>
      <ul className='w-full flex items-center justify-center flex-wrap gap-7 px-5'>
        <li className='max-w-[450px] h-auto flex flex-col items-center bg-[#0e0d10] gap-3 py-4 px-3 bg-clip-padding bg-opacity-40 rounded-xl shadow-2xl md:max-w-[350px]' style={{backdropFilter: "blur(5px)"}}>
          <p className='text-[17px] font-bold'>TopSpotify</p>
          <p className='text-gray-300'>Este proyecto te muestra los artistas, álbumes y canciones del momento. Es 100% responsivo y consume la API de Spotify Scraper.</p>
          <img className='w-4/5 max-h-[300px] max-w-[250px] rounded-xl border-4' src="/public/assets/images/topSpotifyMobile.png" alt="" />
          <div className='flex gap-5'>
            <a href="" target="_blank">Deploy</a>
            <a href="" target="_blank">Repo</a>
          </div>
        </li>
        <li className='max-w-[450px] h-auto flex flex-col items-center bg-[#0e0d10] gap-3 py-4 px-3 bg-clip-padding bg-opacity-40 rounded-xl shadow-2xl md:max-w-[350px]' style={{backdropFilter: "blur(5px)"}}>
          <p className='text-[17px] font-bold'>TopSpotify</p>
          <p className='text-gray-300'>Este proyecto te muestra los artistas, álbumes y canciones del momento. Es 100% responsivo y consume la API de Spotify Scraper.</p>
          <img className='w-4/5 max-h-[300px] max-w-[250px] rounded-xl border-4' src="/public/assets/images/topSpotifyMobile.png" alt="" />
          <div className='flex gap-5'>
            <a href="" target="_blank">Deploy</a>
            <a href="" target="_blank">Repo</a>
          </div>
        </li>
        <li className='max-w-[450px] h-auto flex flex-col items-center bg-[#0e0d10] gap-3 py-4 px-3 bg-clip-padding bg-opacity-40 rounded-xl shadow-2xl md:max-w-[350px]' style={{backdropFilter: "blur(5px)"}}>
          <p className='text-[17px] font-bold'>TopSpotify</p>
          <p className='text-gray-300'>Este proyecto te muestra los artistas, álbumes y canciones del momento. Es 100% responsivo y consume la API de Spotify Scraper.</p>
          <img className='w-4/5 max-h-[300px] max-w-[250px] rounded-xl border-4' src="/public/assets/images/topSpotifyMobile.png" alt="" />
          <div className='flex gap-5'>
            <a href="" target="_blank">Deploy</a>
            <a href="" target="_blank">Repo</a>
          </div>
        </li>
      </ul>
    </div>
  )
}
