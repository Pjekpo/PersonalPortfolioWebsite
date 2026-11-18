import { CLIENTS, type Client } from "../../data/clients";
import { SectionHead } from "./SectionHead";

function initials(name: string) {
  return name
    .replace(/\b(Limited|Ltd)\b/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function ClientCard({ client }: { client: Client }) {
  const hasQuote = Boolean(client.quote);
  return (
    <article className={`client${hasQuote ? " client--quote" : ""}`} aria-label={client.name}>
      <header className="client__head">
        {client.image ? (
          <img src={client.image} alt={client.imageAlt ?? ""} className="client__avatar" loading="lazy" decoding="async" />
        ) : (
          <span className="client__badge" aria-hidden="true">
            {initials(client.name)}
          </span>
        )}
        <div>
          <h3 className="client__name">{client.name}</h3>
          {client.about && <p className="client__about">{client.about}</p>}
        </div>
      </header>

      {hasQuote && (
        <figure className="client__quote">
          <blockquote>
            <p>{client.quote}</p>
          </blockquote>
          {(client.author || client.role) && (
            <figcaption>
              {client.author && <span className="client__author">{client.author}</span>}
              {client.role && <span className="client__role">{client.role}</span>}
              {client.rating && (
                <span className="client__rating" role="img" aria-label={`Rated ${client.rating} out of 5`}>
                  {"★".repeat(client.rating)}
                </span>
              )}
            </figcaption>
          )}
        </figure>
      )}

      <h4 className="label">What I did</h4>
      <ul className="bullets">
        {client.work.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
    </article>
  );
}

export function Clients() {
  return (
    <section id="clients" className="section" aria-labelledby="clients-heading">
      <SectionHead num="02" title="Clients" id="clients-heading">
        <p>Businesses I've built for and what I did for each. Where a client has shared a note about working with me, it's here too.</p>
      </SectionHead>
      <div className="clients">
        {CLIENTS.map((c) => (
          <ClientCard key={c.name} client={c} />
        ))}
      </div>
    </section>
  );
}
