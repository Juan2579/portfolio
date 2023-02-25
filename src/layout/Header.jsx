import React, { useState, useEffect } from 'react';
import { Nav } from '../containers/Nav';

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10 || showMobileMenu);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMobileMenu]);

  return (
    <header className={`w-full sticky top-0 bg-[#2C1A8A] h-[10vh] z-50 transition-transform ${showNavbar ? '' : '-translate-y-full'}`}>
      <Nav setShowMobileMenu={setShowMobileMenu} />
    </header>
  );
};