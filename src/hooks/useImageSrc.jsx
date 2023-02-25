import React, { useEffect, useState } from 'react'

export const useImageSrc = () => {
  const [srcImage, setSrcImage] = useState("")
  const [screenSize, getDimension] = useState(window.innerWidth);

  const setDimension = () => {
    getDimension(window.innerWidth)
    if(screenSize < 768){
      setSrcImage("mobile")
    }else{
      setSrcImage("desktop")
    }
  }
  useEffect(() => {
    if(screenSize < 768){
      setSrcImage("mobile")
    }else{
      setSrcImage("desktop")
    }
  }, [screenSize])
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  return {
    srcImage
  }
}
