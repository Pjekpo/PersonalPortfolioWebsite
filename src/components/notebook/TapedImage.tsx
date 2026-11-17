interface TapedImageProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  width?: number;
  height?: number;
  tilt?: number;
  tape?: "pink" | "mint" | "yellow";
  dark?: boolean;
  /** Still image shown instead when the visitor prefers reduced motion (for animated images) */
  staticSrc?: string;
  onOpen: () => void;
}

/** A photo or screenshot held onto the page with a strip of washi tape. Click to enlarge. */
export function TapedImage({
  src,
  alt,
  title,
  description,
  width,
  height,
  tilt = 0,
  tape = "pink",
  dark = false,
  staticSrc,
  onOpen,
}: TapedImageProps) {
  return (
    <figure className="taped" style={{ ["--tilt" as string]: `${tilt}deg` }}>
      <span className={`washi washi--${tape}`} aria-hidden="true" />
      <button
        type="button"
        className="taped__button"
        onClick={onOpen}
        aria-label={`Enlarge image: ${title}`}
      >
        <picture>
          {staticSrc && <source srcSet={staticSrc} media="(prefers-reduced-motion: reduce)" />}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className={`taped__img${dark ? " taped__img--dark" : ""}`}
        />
        </picture>
      </button>
      <figcaption className="taped__caption">
        <span className="taped__title">{title}</span>
        {description && <span className="taped__desc">{description}</span>}
      </figcaption>
    </figure>
  );
}
