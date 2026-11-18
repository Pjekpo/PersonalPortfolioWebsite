import { useState } from "react";
import { WOL_DESIGNS, wolFull, wolFullStatic, wolThumb, wolThumbStatic } from "../../data/designs";
import { FunFact } from "./FunFact";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { SectionHead } from "./SectionHead";
import { Shot } from "./Shot";

export function Wol() {
  const [open, setOpen] = useState<LightboxItem | null>(null);

  return (
    <section id="wol" className="section" aria-labelledby="wol-heading">
      <SectionHead num="03" title="WOL Collective" id="wol-heading">
        <p>
          WOL is the clothing brand I co-founded. I lead the brand, the website and the creative direction. These are
          the logos, garment designs, posters and campaign visuals I've made for it. Click or tap any of them to see it
          bigger.
        </p>
      </SectionHead>
      <div className="wol">
        {WOL_DESIGNS.map((d) => {
          const thumb = wolThumb(d.slug);
          const full = wolFull(d.slug);
          if (!thumb || !full) return null;
          return (
            <Shot
              key={d.slug}
              src={thumb}
              alt={d.alt}
              title={d.title}
              width={640}
              height={Math.round((640 * d.height) / d.width)}
              dark={d.dark}
              staticSrc={wolThumbStatic(d.slug)}
              natural
              onOpen={() =>
                setOpen({ src: full, alt: d.alt, title: d.title, dark: d.dark, staticSrc: wolFullStatic(d.slug) })
              }
            />
          );
        })}
      </div>
      <FunFact />
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
