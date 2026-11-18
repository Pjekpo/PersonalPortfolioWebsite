import { useState } from "react";
import { OTHER_DESIGNS, otherDesignStaticUrl, otherDesignUrl } from "../../data/designs";
import { Modal } from "./Modal";

/** "Fun fact" card that opens a pop-up gallery of my other (non-WOL) design work. */
export function FunFact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="funfact" onClick={() => setOpen(true)} aria-haspopup="dialog">
        <span className="funfact__label">fun_fact.txt</span>
        <span className="funfact__text">Fun fact: did you know I used to be a graphic designer?</span>
        <span className="funfact__cta">See my other designs ({OTHER_DESIGNS.length})</span>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="funfact-title" className="gallery-modal">
        <h2 id="funfact-title" className="gallery-modal__title">
          Before the code: my graphic design work
        </h2>
        <p className="gallery-modal__intro">
          Logos, mascots, posters and photo edits I made for freelance clients and for myself.
        </p>
        <ul className="gallery-modal__grid">
          {OTHER_DESIGNS.map((d) => {
            const src = otherDesignUrl(d.slug);
            if (!src) return null;
            const still = otherDesignStaticUrl(d.slug);
            return (
              <li key={d.slug}>
                <figure className="design">
                  <div className="design__frame">
                    <picture>
                      {still && <source srcSet={still} media="(prefers-reduced-motion: reduce)" />}
                      <img src={src} alt={d.alt} width={d.width} height={d.height} loading="lazy" decoding="async" />
                    </picture>
                  </div>
                  <figcaption>{d.title}</figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </Modal>
    </>
  );
}
