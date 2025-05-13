import { Section } from "./Section";
import styles from "./Section.module.css";

export function Projects() {
  return (
    <Section id="projects" title="">
      <div className={styles.projectWrap}>
        <div className={styles.projectGroup}>
          <h2>개인 프로젝트</h2>
          <div className={styles.projectList}>
            <div className={styles.projectItem}>프로젝트 1</div>
            <div className={styles.projectItem}>프로젝트 2</div>
            <div className={styles.projectItem}>프로젝트 3</div>
          </div>
        </div>

      <div className={styles.projectGroup}>
        <h2>팀 프로젝트</h2>
          <div className={styles.projectList}>
            <div className={styles.projectItem}>프로젝트 A</div>
            <div className={styles.projectItem}>프로젝트 B</div>
            <div className={styles.projectItem}>프로젝트 C</div>
          </div>
        </div>
      </div>
    </Section>
  )
}