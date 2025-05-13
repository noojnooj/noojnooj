import { Nav } from "../components/Nav"
import { About } from "../components/sections/AboutSection"
import { Skills } from "../components/sections/SkillsSection"
import { Projects } from "../components/sections/ProjectsSection"
import { Contact } from "../components/sections/ContactSection"


export function Home() {
  
  return (
    <div>

      <div>
       <Nav />
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