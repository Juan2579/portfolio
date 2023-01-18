import React, { useState } from 'react'

export const MenuIcons = ({showMenu, setShowMenu}) => {
  return (
    <>
      {!showMenu ? (
        <svg onClick={() => setShowMenu(prevState => !prevState)} className="first-load transition-all duration-100 w-12 md:hidden text-white fill-current mx-5 md:mx-0" viewBox="0 0 24 24">
          <path
            d="M4,5 L20,5 C20.5522847,5 21,5.44771525 21,6 C21,6.55228475 20.5522847,7 20,7 L4,7 C3.44771525,7 3,6.55228475 3,6 C3,5.44771525 3.44771525,5 4,5 Z M4,17 L20,17 C20.5522847,17 21,17.4477153 21,18 C21,18.5522847 20.5522847,19 20,19 L4,19 C3.44771525,19 3,18.5522847 3,18 C3,17.4477153 3.44771525,17 4,17 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5522847 20.5522847,13 20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4477153 3.44771525,11 4,11 Z"
          />
        </svg>
      ) : 
        <svg onClick={() => setShowMenu(prevState => !prevState)} className="w-12 md:hidden text-white fill-current mx-5 md:mx-0" viewBox="0 0 512 512">
          <path d="M464.34,255.6C463.15,168.9,410.08,91.28,328.8,60.29,247,29.1,150.46,55.11,95.1,122.8,40,190.16,31.66,287.19,76.54,362.29c44.78,74.95,132.57,113.56,218.08,98.17,97.48-17.54,167.27-105.12,169.64-202.63C464.32,257.11,464.35,256.37,464.34,255.6ZM314,416.09c-67.8,24.3-144.8,3.05-190.53-52.58C78.37,308.64,73,228.85,109.28,168.05c36.11-60.43,108.4-93.57,177.79-80.29C367.74,103.21,425.3,174,426.42,255.6,425.45,326.61,381.57,391.87,314,416.09Z"/>
          <path d="M309.41,175.16l-53.63,53.63-53.63-53.63c-17.28-17.28-44.1,9.53-26.81,26.81L229,255.6l-53.63,53.63c-17.28,17.28,9.52,44.1,26.81,26.81l53.63-53.63L309.4,336c17.28,17.27,44.1-9.53,26.82-26.82L282.59,255.6,336.22,202C353.5,184.69,326.69,157.87,309.41,175.16Z"/>
        </svg>
      }
    </>
  )
}
