import { Modal } from "./Modal";

export interface LightboxItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
  dark?: boolean;
  /** Still image used when the visitor prefers reduced motion (for animated images) */
  staticSrc?: string;
}

export function Lightbox({ item, onClose }: { item: LightboxItem | null; onClose: () => void }) {
  return (
    <Modal open={item !== null} onClose={onClose} labelledBy="lightbox-title" className="lightbox">
      {item && (
        <figure className="lightbox__figure">
          <picture>
            {item.staticSrc && <source srcSet={item.staticSrc} media="(prefers-reduced-motion: reduce)" />}
            <img src={item.src} alt={item.alt} className={`lightbox__img${item.dark ? " is-dark" : ""}`} />
          </picture>
          <figcaption>
            <span id="lightbox-title" className="lightbox__title">
              {item.title}
            </span>
            {item.description && <span className="lightbox__desc">{item.description}</span>}
          </figcaption>
        </figure>
      )}
    </Modal>
  );
}
