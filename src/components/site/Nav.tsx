export interface NavItem {
  id: string;
  num: string;
  label: string;
}

export function Nav({ items }: { items: NavItem[] }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          Praise Ekpo
        </a>
        <nav aria-label="Sections">
          <ul className="nav__links">
            {items.map((i) => (
              <li key={i.id}>
                <a href={`#${i.id}`}>
                  <span className="nav__num" aria-hidden="true">
                    {i.num}
                  </span>
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="status nav__status">
          <span className="status__dot" aria-hidden="true" />
          open to work
        </p>
      </div>
    </header>
  );
}
