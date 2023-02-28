import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useIsVisible = (threshold) => {

  const [isVisible, setIsVisible] = useState(false)
  const {ref, inView} = useInView({threshold: threshold || 0.5})

  useEffect(() => {
    if(inView){
      setIsVisible(true)
    }
  }, [inView])

  return {
    ref,
    isVisible
  }
}
