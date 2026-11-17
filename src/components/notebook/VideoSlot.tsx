// Demo videos: drop src/assets/videos/<slug>.mp4 into the repo and it appears automatically.
const videos = import.meta.glob("../../assets/videos/*.mp4", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export function getVideoUrl(slug: string): string | undefined {
  return videos[`../../assets/videos/${slug}.mp4`];
}

export function VideoSlot({ slug, title }: { slug: string; title: string }) {
  const url = getVideoUrl(slug);

  if (url) {
    return (
      <figure className="video">
        <span className="washi washi--yellow" aria-hidden="true" />
        <video controls preload="metadata" playsInline className="video__player" aria-label={`Demo video: ${title}`}>
          <source src={url} type="video/mp4" />
          Your browser cannot play this video.
        </video>
        <figcaption className="taped__caption">
          <span className="taped__title">Demo video</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="video video--soon" role="img" aria-label={`Demo video for ${title} coming soon`}>
      <svg className="video__sketch" viewBox="0 0 320 180" aria-hidden="true" preserveAspectRatio="none">
        <path
          d="M8 10 C 90 6, 230 12, 312 8 C 316 60, 310 120, 313 170 C 220 174, 100 168, 7 172 C 4 120, 10 60, 8 10 Z"
          className="sketch-line"
        />
        <path d="M140 66 L 140 116 L 184 91 Z" className="sketch-line sketch-fill" />
        <path d="M20 152 C 120 150, 200 154, 300 151" className="sketch-line sketch-thin" />
        <circle cx="96" cy="151.5" r="5" className="sketch-line sketch-fill" />
      </svg>
      <span className="video__soon-text">Demo video coming soon</span>
    </div>
  );
}
