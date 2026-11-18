import profile from "../../assets/profile.jpg";

const STACK = [
  "AI Automation",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "Vite",
  "REST APIs",
  "Three.js",
  "Figma",
  "Git",
  "HTML / CSS",
];

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-name">
      <div className="hero__intro">
        <p className="status">
          <span className="status__dot" aria-hidden="true" />
          open to work: internships, junior roles and freelance
        </p>
        <h1 id="hero-name" className="hero__name">
          Praise Ekpo
        </h1>
        <p className="hero__role">AI &amp; Software Developer</p>
      </div>

      <div className="hero__more">

        <div className="hero__bio">
          <p>
            Hi, I'm Praise. I'm a Computer Science graduate (BSc Hons) and I build AI automations, production-ready
            web apps and software that solve real problems for real businesses.
          </p>
          <p>
            I work across the full stack and I care about clean UI, fast iteration and pragmatic engineering. My
            everyday tools are Python, TypeScript, React, Node.js, Git and CI/CD workflows. I'm open to internships,
            junior roles and freelance contracts, so if you have something in mind, I'd love to hear about it.
          </p>
          <p>
            I run <strong>Ekpo Software Solutions</strong>, where I build AI automations, business websites, CRM
            systems and chatbots for local businesses. It has generated over £5,000 in revenue this year. I also
            co-founded{" "}
            <a href="https://thewolcollective.com" target="_blank" rel="noopener noreferrer">
              The WOL Collective<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            , a clothing brand where I lead the brand, website and creative direction.
          </p>
        </div>

        <p className="hero__actions">
          <a href="#projects" className="btn btn--solid">
            View projects
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </p>
      </div>

      <aside className="hero__card" aria-label="Profile">
        <div className="frame">
          <img
            src={profile}
            alt="Portrait of Praise Ekpo"
            className="frame__img"
            width={700}
            height={1027}
            fetchPriority="high"
          />
          <span className="frame__scan" aria-hidden="true" />
        </div>
        <dl className="spec">
          <div>
            <dt>role</dt>
            <dd>AI &amp; Software Developer</dd>
          </div>
          <div>
            <dt>business</dt>
            <dd>Ekpo Software Solutions</dd>
          </div>
          <div>
            <dt>degree</dt>
            <dd>BSc (Hons) Computer Science</dd>
          </div>
        </dl>
        <ul className="tags" aria-label="Skills">
          {STACK.map((s) => (
            <li key={s} className="tag">
              {s}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
