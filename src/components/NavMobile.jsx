import React from "react";

export const NavMobile = ({ navRef, showMenu }) => {
  const heightNav = `${navRef.current?.clientHeight}px`;
  return (
    <>
      {showMenu && (
        <ul
          style={{ top: heightNav }}
          className="absolute w-full flex justify-center items-center flex-col gap-10 text-white bg-[#2C1A8A] font-mono border-b-2 py-8 text-lg z-20"
        >
          <li>
            <a
              className="first-load transition-all duration-300 hover:text-[#EB268F]"
              href="#aboutme"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              className="first-load transition-all duration-300 hover:text-[#EB268F]"
              href="#skills"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a className="first-load transition-all duration-300 hover:text-[#EB268F]" href="#projects">
              Proyectos
            </a>
          </li>
          <li>
            <a className="first-load transition-all duration-300 hover:text-[#EB268F]" href="#contact">
              Contáctame
            </a>
          </li>
        </ul>
      )}
    </>
  );
};
