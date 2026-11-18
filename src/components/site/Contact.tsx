import { SectionHead } from "./SectionHead";

const EMAIL = "praiseekpo2@gmail.com";

export function Contact() {
  return (
    <footer id="contact" className="section contact" aria-labelledby="contact-heading">
      <SectionHead num="04" title="Contact" id="contact-heading">
        <p>
          Thanks for looking through. I'm always open to discussing new projects, creative ideas, or opportunities to
          be part of your vision, so drop me a message, even if it's just to say hello. Want my CV? Message me and I'll
          share it directly.
        </p>
      </SectionHead>

      <a href={`mailto:${EMAIL}`} className="contact__email">
        {EMAIL}
      </a>

      <ul className="contact__links">
        <li>
          <span className="label">GitHub</span>
          <a href="https://github.com/Pjekpo" target="_blank" rel="noopener noreferrer">
            github.com/Pjekpo<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <span className="label">LinkedIn</span>
          <a href="https://www.linkedin.com/in/praiseekpo/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/praiseekpo<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>

      <p className="contact__legal">
        © 2026 Praise Ekpo. All designs, code and content on this site are my own work and may not be copied or reused
        without permission.
      </p>
    </footer>
  );
}
