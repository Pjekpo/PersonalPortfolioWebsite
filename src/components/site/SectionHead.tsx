import type { ReactNode } from "react";

export function SectionHead({ num, title, id, children }: { num: string; title: string; id: string; children?: ReactNode }) {
  return (
    <header className="section__head">
      <h2 id={id} className="section__title">
        <span className="section__num">[{num}]</span> {title}
      </h2>
      {children && <div className="section__intro">{children}</div>}
    </header>
  );
}
