import { Link } from "react-scroll"
import styles from "./Nav.module.css"

// nav버튼들의 id, 이름
const navButtons = [
  { id: "start", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
]

export function Nav() {
  return (
    <nav className={styles.navMenu}>
      <ul>
        {/* button들 li로 감ㅅ싸기 */}
        {navButtons.map(({ id, name }) => (
          <li key={id}>
            <Link to={id} smooth={true} duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}