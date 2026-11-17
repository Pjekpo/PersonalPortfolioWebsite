const EMAIL = "praiseekpo2@gmail.com";

export function Contact() {
  return (
    <footer id="contact" className="sheet sheet--lined contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="hand-heading">
        Let's work together
      </h2>
      <p>
        Thanks for flicking through. I'm always open to discussing new projects, creative ideas, or opportunities to
        be part of your vision, so drop me a message, even if it's just to say hello.
      </p>
      <p>Want my CV? Message me and I'll share it directly.</p>

      <ul className="contact__list">
        <li>
          <span className="hand-label">Email</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </li>
        <li>
          <span className="hand-label">GitHub</span>
          <a href="https://github.com/Pjekpo" target="_blank" rel="noopener noreferrer">
            github.com/Pjekpo<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <span className="hand-label">LinkedIn</span>
          <a href="https://www.linkedin.com/in/praiseekpo/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/praiseekpo<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>

      <p className="contact__small">
        © 2026 Praise Ekpo. All designs, code and content on this site are my own work and may not be copied or
        reused without permission.
      </p>
    </footer>
  );
}
