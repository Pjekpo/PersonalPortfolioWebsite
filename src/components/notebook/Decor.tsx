import { DECOR_ITEMS, decorStaticUrl, decorUrl } from "../../data/designs";

/** Preset spots so the scattered look stays deliberate. left is a % of the strip width. */
const SPOTS = [
  { left: 4, top: 18, size: 120, tilt: -7 },
  { left: 40, top: 4, size: 104, tilt: 5 },
  { left: 76, top: 22, size: 128, tilt: -3 },
];

/** Groups of decorative stickers and prints, used in order by each strip on the page. */
const GROUPS = [3, 3, 3, 3, 2, 2, 2];
export function decorGroup(index: number) {
  const start = GROUPS.slice(0, index).reduce((a, b) => a + b, 0);
  return DECOR_ITEMS.slice(start, start + (GROUPS[index] ?? 0));
}

/**
 * A strip of decorative cut-outs and taped prints from my other design work.
 * Purely decorative: hidden from assistive tech, never covers text.
 */
export function DecorStrip({ group, flip = false }: { group: number; flip?: boolean }) {
  const items = decorGroup(group);
  if (items.length === 0) return null;
  const spots = items.length === 2 ? [SPOTS[0], SPOTS[2]] : SPOTS;

  return (
    <div className={`decor${flip ? " decor--flip" : ""}`} aria-hidden="true">
      {items.map((item, i) => {
        const url = decorUrl(item.slug);
        if (!url) return null;
        const spot = spots[i % spots.length];
        const style = {
          left: flip ? `${96 - spot.left - 12}%` : `${spot.left}%`,
          top: `${spot.top}px`,
          width: `${spot.size}px`,
          ["--tilt" as string]: `${flip ? -spot.tilt : spot.tilt}deg`,
        };
        return (
          <span key={item.slug} className={`decor__item decor__item--${item.kind}`} style={style}>
            {item.kind === "photo" && <span className="washi washi--mint decor__tape" />}
            <picture>
              {decorStaticUrl(item.slug) && (
                <source srcSet={decorStaticUrl(item.slug)} media="(prefers-reduced-motion: reduce)" />
              )}
              <img src={url} alt="" width={item.width} height={item.height} loading="lazy" decoding="async" />
            </picture>
          </span>
        );
      })}
    </div>
  );
}
