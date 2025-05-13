type Section = {
  id: string;
  title: string;
  children: React.ReactNode;
};

import styles from "./Section.module.css";

export function Section({ id, title, children }: Section) {
  return (
    // section 인라인 속성
    <section id={id} className={styles.sectionBlock}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}