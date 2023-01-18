import React from 'react'

export const NavbarDesktop = () => {
  return (
    <ul className="hidden gap-5 text-white text-xl font-semibold font-mono md:flex">
        <li>
          <a className="first-load transition-all duration-300 hover:text-[#EB268F]" href="#">
            Sobre mí
          </a>
        </li>
        <li>
          <a className="first-load transition-all duration-300 hover:text-[#EB268F]" href="#habilidades">
            Habilidades
          </a>
        </li>
        <li>
          <a className="first-load transition-all duration-300 hover:text-[#EB268F]" href="#">
            Proyectos
          </a>
        </li>
        <li>
          <a className="first-load transition-all duration-300 hover:text-[#EB268F]" href="#">
            Contáctame
          </a>
        </li>
    </ul>
  )
}
