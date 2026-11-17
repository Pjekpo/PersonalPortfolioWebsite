import naisonPhoto from "../../assets/nasion-avatar.webp";
import wolLogo from "../../assets/logo-avatar.webp";
import { DecorStrip } from "./Decor";

const TESTIMONIALS = [
  {
    name: "Nasion",
    role: "Founder, C4Improvement",
    quote:
      "Praise helped me ship a full website plus AI software implementations. Clear communication, fast iteration, and the final product exceeded expectations.",
    rating: 5,
    image: naisonPhoto,
    imageAlt: "Nasion at workshop",
    colour: "yellow",
  },
  {
    name: "WOL Collective",
    role: "Apparel & Culture Brand",
    quote:
      "Captured the brand energy with a clean, punchy build. The visuals land hard, the flow feels premium, and the site tells our story exactly how we wanted.",
    rating: 5,
    image: wolLogo,
    imageAlt: "WOL Collective logo",
    colour: "mint",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="sheet sheet--lined" aria-labelledby="testimonials-heading">
      <header className="sheet__head">
        <h2 id="testimonials-heading" className="hand-heading">
          Kind words
        </h2>
        <p className="sheet__intro">Notes from people I've built for.</p>
      </header>
      <div className="notes">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.name}
            className={`sticky sticky--${t.colour} note`}
            style={{ ["--tilt" as string]: `${i % 2 === 0 ? -1.6 : 1.4}deg` }}
          >
            <blockquote className="note__quote">
              <p>{t.quote}</p>
            </blockquote>
            <figcaption className="note__who">
              <img src={t.image} alt={t.imageAlt} className="note__avatar" loading="lazy" decoding="async" />
              <span>
                <span className="note__name">{t.name}</span>
                <span className="note__role">{t.role}</span>
              </span>
              <span className="note__stars" role="img" aria-label={`Rated ${t.rating} out of 5`}>
                {"★".repeat(t.rating)}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <DecorStrip group={6} flip />
    </section>
  );
}
