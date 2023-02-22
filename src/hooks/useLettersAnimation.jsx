import { useEffect, useState } from "react"

export const useLettersAnimation = () => {
  const [showName, setShowName] = useState(false)
  const [showRole, setShowRole] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setShowName(true)
      // console.log("Ya salió el hola")

      setTimeout(() => {
        setShowRole(true)
        // console.log("ya salio el name")
        setTimeout(() => {
          //console.log("ya salio el rol")
          setShowButtons(true)
        }, 2400)
      }, 2000)
    }, 2200)
  }, [])

  return {
    showName,
    showRole, 
    showButtons
  }
}
