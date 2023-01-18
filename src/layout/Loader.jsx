import React from 'react'

export const Loader = ({hidingLoader}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#212121] transition-all">
      <div className={`spinner ${hidingLoader && 'remove'}`}>
        <div className="spinner1"></div>
      </div>
    </div>
  )
}
