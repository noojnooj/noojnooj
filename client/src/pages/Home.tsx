import { Nav } from "../components/nav/Nav"
import { Start } from "../components/sections/StartSection"
import { About } from "../components/sections/AboutSection"
import { Skills } from "../components/sections/SkillsSection"
import { Projects } from "../components/sections/ProjectsSection"
import { Contact } from "../components/sections/ContactSection"


export function Home() {

  return (
    <div>

       <Nav />

      <div>
        <Start />
      </div>

      <div>
        <div>
          <About />
        </div>

        <div>
          <Skills />
        </div>

        <div>
          <Projects />
        </div>
        
        <div>
          <Contact />
        </div>
      
      </div>
      
      </div>
  )
}