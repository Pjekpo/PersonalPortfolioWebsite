import { useState } from "react";
import { WOL_DESIGNS, wolFull, wolFullStatic, wolThumb, wolThumbStatic } from "../../data/designs";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { TapedImage } from "./TapedImage";

const TAPES = ["mint", "yellow", "pink"] as const;
const TILTS = [-1.6, 1.1, -0.6, 1.5, -1.1, 0.7];

export function WolGallery() {
  const [open, setOpen] = useState<LightboxItem | null>(null);

  return (
    <section id="wol" className="sheet sheet--plain" aria-labelledby="wol-heading">
      <header className="sheet__head">
        <h2 id="wol-heading" className="hand-heading">
          The WOL Collective
        </h2>
        <p className="sheet__intro">
          WOL is the clothing brand I co-founded. I lead the brand, the website and the creative direction, so this
          page is my mood board: logos, garment designs, posters and campaign visuals. Tap any of them to see it
          bigger.
        </p>
      </header>
      <div className="gallery">
        {WOL_DESIGNS.map((d, i) => {
          const thumb = wolThumb(d.slug);
          const full = wolFull(d.slug);
          if (!thumb || !full) return null;
          const ratio = d.height / d.width;
          return (
            <TapedImage
              key={d.slug}
              src={thumb}
              alt={d.alt}
              title={d.title}
              width={640}
              height={Math.round(640 * ratio)}
              tilt={TILTS[i % TILTS.length]}
              tape={TAPES[i % TAPES.length]}
              dark={d.dark}
              staticSrc={wolThumbStatic(d.slug)}
              onOpen={() =>
                setOpen({ src: full, alt: d.alt, title: d.title, dark: d.dark, staticSrc: wolFullStatic(d.slug) })
              }
            />
          );
        })}
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
