import profile from "../../assets/profile.jpg";
import { DecorStrip } from "./Decor";

const SKILLS = [
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

export function Cover() {
  return (
    <section id="home" className="sheet sheet--lined cover" aria-labelledby="cover-name">
      <div className="cover__head">
        <h1 id="cover-name" className="cover__name">
          Praise Ekpo
        </h1>
        <p className="cover__role">AI &amp; Software Developer</p>
      </div>

      <div className="cover__text">

        <p className="cover__hello">Hi, welcome to my notebook. Have a flick through.</p>
        <p>
          I'm a Computer Science graduate (BSc Hons) and I build AI automations, production-ready web apps and
          software that solve real problems for real businesses.
        </p>
        <p>
          I work across the full stack and I care about clean UI, fast iteration and pragmatic engineering. My
          everyday tools are Python, TypeScript, React, Node.js, Git and CI/CD workflows. I'm open to{" "}
          <strong>internships, junior roles and freelance contracts</strong>, so if you have something in mind,
          I'd love to hear about it.
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

        <p className="cover__actions">
          <a href="#projects" className="ink-button">
            See my projects
          </a>
          <a href="#contact" className="ink-link">
            Get in touch
          </a>
        </p>
      </div>

      <div className="cover__side">
        <figure className="polaroid">
          <span className="washi washi--mint washi--left" aria-hidden="true" />
          <span className="washi washi--pink washi--right" aria-hidden="true" />
          <img
            src={profile}
            alt="Portrait of Praise Ekpo"
            className="polaroid__img"
            width={700}
            height={1027}
            fetchPriority="high"
          />
          <figcaption className="polaroid__caption">that's me</figcaption>
        </figure>

        <aside className="sticky sticky--pink cover__skills" aria-labelledby="skills-label">
          <h2 id="skills-label" className="sticky__label">
            Things I work with
          </h2>
          <ul className="skill-list">
            {SKILLS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="cover__decor">
        <DecorStrip group={0} />
      </div>
    </section>
  );
}
