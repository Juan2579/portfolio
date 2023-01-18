import { useEffect, useState } from "react"

export const useLettersAnimation = () => {
  const [showName, setShowName] = useState(false)
  const [showRole, setShowRole] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      // console.log("Ya salió el hola")
      setShowName(true)

      setTimeout(() => {
        // console.log("ya salio el name")
        setShowRole(true)
      }, 2000)
    }, 2200)
  }, [])

  return {
    showName,
    showRole
  }
}
