import { Nav } from "./containers/Nav"
import { Header } from "./layout/Header"
import { Home } from "./containers/Home"
import { Main } from "./layout/Main"
import { useEffect, useState } from "react"
import { Loader } from "./layout/Loader"
import { ContentHome } from "./components/ContentHome"
import { ContentHomeVideo } from "./containers/ContentHomeVideo"
import { AboutMe } from "./containers/AboutMe"
import { ContentAboutMe } from "./components/ContentAboutMe"
import { Skills } from "./containers/Skills"
import { ContentSkills } from "./components/ContentSkills"
import { Projects } from "./containers/Projects"
import { ContentProjects } from "./components/ContentProjects"
import { Contact } from "./containers/Contact"
import { ContentContact } from "./components/ContentContact"

export const App = () => {
  const [showLoader, setShowLoader] = useState(true)
  const [hidingLoader, setHidingLoader] = useState(false)
  const [showApp, setShowApp] = useState(false)
  
  useEffect(() => {
    
    setTimeout(() => { //show the spinner 2 seconds
      setHidingLoader(true) //start animation of removing spinner
      setTimeout(() => { // wait animation end
        setShowLoader(false) // Remove loader and show app
      }, 1000)
    }, 2000)

    setTimeout(() => {
      setShowApp(true)
    }, 3800)
  }, [])

  return (
    <> 
      {showLoader ? 
        <Loader hidingLoader={hidingLoader}/>
        : 
          <div className="onLoad">
            <Header />

            <Main>
              
              <Home>
                <ContentHome showApp={showApp}/>
              </Home>

              <AboutMe>
                <ContentAboutMe />
              </AboutMe>

              <Skills>
                <ContentSkills />
              </Skills>

              <Projects>
                <ContentProjects />
              </Projects>

              <Contact>
                <ContentContact />
              </Contact>

            </Main>
          </div>
      }
    </>
  )
}
