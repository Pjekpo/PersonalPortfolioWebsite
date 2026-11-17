export interface Tab {
  id: string;
  label: string;
  colour: string;
}

/** Divider tabs sticking out of the notebook: the page navigation. */
export function IndexTabs({ tabs }: { tabs: Tab[] }) {
  return (
    <nav className="tabs" aria-label="Sections">
      <ul>
        {tabs.map((t) => (
          <li key={t.id}>
            <a href={`#${t.id}`} className={`tab tab--${t.colour}`}>
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
