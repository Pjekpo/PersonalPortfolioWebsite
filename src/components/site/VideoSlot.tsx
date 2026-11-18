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
        <video controls preload="metadata" playsInline className="video__player" aria-label={`Demo video: ${title}`}>
          <source src={url} type="video/mp4" />
          Your browser cannot play this video.
        </video>
        <figcaption className="shot__caption">
          <span className="shot__title">Demo video</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="video video--soon" role="img" aria-label={`Demo video for ${title} coming soon`}>
      <span className="video__icon" aria-hidden="true" />
      <span className="video__text">Demo video coming soon</span>
      <span className="video__file" aria-hidden="true">
        {slug}.mp4
      </span>
    </div>
  );
}
