interface ShotProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  width?: number;
  height?: number;
  dark?: boolean;
  staticSrc?: string;
  /** keep the image's own shape instead of the standard crop */
  natural?: boolean;
  onOpen: () => void;
}

/** A screenshot or design in a thin frame. Click to enlarge. */
export function Shot({ src, alt, title, description, width, height, dark, staticSrc, natural, onOpen }: ShotProps) {
  return (
    <figure className={`shot${natural ? " shot--natural" : ""}`}>
      <button type="button" className="shot__button" onClick={onOpen} aria-label={`Enlarge image: ${title}`}>
        <picture>
          {staticSrc && <source srcSet={staticSrc} media="(prefers-reduced-motion: reduce)" />}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className={`shot__img${dark ? " is-dark" : ""}`}
            style={natural && width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
          />
        </picture>
        <span className="shot__zoom" aria-hidden="true">
          [+]
        </span>
      </button>
      <figcaption className="shot__caption">
        <span className="shot__title">{title}</span>
        {description && <span className="shot__desc">{description}</span>}
      </figcaption>
    </figure>
  );
}
