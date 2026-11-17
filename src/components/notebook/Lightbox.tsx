import { useEffect, useRef } from "react";

export interface LightboxItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
  dark?: boolean;
  staticSrc?: string;
}

interface LightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
}

/** Accessible image viewer built on the native <dialog> element (Escape closes, focus is trapped and restored). */
export function Lightbox({ item, onClose }: LightboxProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (item && !dialog.open) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
      document.documentElement.classList.add("no-scroll");
    } else if (!item && dialog.open) {
      dialog.close();
    }
  }, [item]);

  const handleClose = () => {
    document.documentElement.classList.remove("no-scroll");
    onClose();
    returnFocus.current?.focus();
  };

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-labelledby="lightbox-title"
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
    >
      {item && (
        <figure className="lightbox__sheet">
          <button
            type="button"
            className="lightbox__close"
            onClick={() => ref.current?.close()}
            aria-label="Close image"
            autoFocus
          >
            close ✕
          </button>
          <picture>
            {item.staticSrc && <source srcSet={item.staticSrc} media="(prefers-reduced-motion: reduce)" />}
            <img src={item.src} alt={item.alt} className={`lightbox__img${item.dark ? " taped__img--dark" : ""}`} />
          </picture>
          <figcaption>
            <span id="lightbox-title" className="lightbox__title">
              {item.title}
            </span>
            {item.description && <span className="lightbox__desc">{item.description}</span>}
          </figcaption>
        </figure>
      )}
    </dialog>
  );
}
