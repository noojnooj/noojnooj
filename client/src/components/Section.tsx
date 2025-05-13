type Section = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: Section) {
  return (
    // section 인라인 속성
    <section id={id} style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}