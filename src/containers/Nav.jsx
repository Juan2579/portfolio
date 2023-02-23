import React, { useRef, useState } from "react";
import { MenuIcons } from "../components/MenuIcons";
import { NavbarDesktop } from "../components/NavbarDesktop";
import { NavMobile } from "../components/NavMobile";

export const Nav = () => {
  const navRef = useRef()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav ref={navRef} className="w-full h-full relative flex justify-between items-center z-50 md:px-20 py-3 gap-5">
      <img className="first-load transition-all duration-300 w-16 mx-5 md:mx-0" src="/assets/images/logo.png" alt="Juan David Logo" />
      <NavbarDesktop />
      <NavMobile showMenu={showMenu} navRef={navRef} />
      <MenuIcons showMenu={showMenu} setShowMenu={setShowMenu} />
    </nav>
  );
};
