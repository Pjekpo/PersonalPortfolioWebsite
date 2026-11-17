import { useState } from "react";
import { PROJECTS, type Project, type ProjectLink } from "../../data/projects";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { TapedImage } from "./TapedImage";
import { VideoSlot } from "./VideoSlot";
import { DecorStrip } from "./Decor";
import { Fragment } from "react";

const imageUrls = import.meta.glob("../../assets/projects/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const imageUrl = (file: string) => imageUrls[`../../assets/projects/${file}`];

function tidyBullet(text: string) {
  const t = text.trim().replace(/\.$/, "");
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function marginNote(project: Project): string | null {
  const p = project.period.toLowerCase();
  if (project.links.some((l) => l.kind === "live")) return "live!";
  if (p.includes("in progress") || p.includes("in development")) return "building";
  if (project.kind === "uni") return "uni";
  return null;
}

const NOTE_LABEL: Record<Project["kind"], string> = {
  own: "How I use it",
  client: "About the work",
  uni: "About the work",
};

function LinkItem({ link }: { link: ProjectLink }) {
  if (link.url) {
    return (
      <li>
        <a href={link.url} target="_blank" rel="noopener noreferrer" className={`plink plink--${link.kind}`}>
          {link.label}
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </li>
    );
  }
  return <li className={`plink plink--${link.kind}`}>{link.label}</li>;
}

const TAPES = ["pink", "mint", "yellow"] as const;

function ProjectEntry({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (item: LightboxItem) => void;
}) {
  const note = marginNote(project);
  const headingId = `project-${project.slug}`;
  return (
    <article className="entry" aria-labelledby={headingId} id={`p-${project.slug}`}>
      {note && (
        <span className="margin-note" aria-hidden="true">
          {note}
        </span>
      )}
      <header className="entry__head">
        <h3 id={headingId} className="entry__title">
          {project.title}
        </h3>
        <p className="entry__period">{project.period}</p>
      </header>

      <div className="entry__body">
        <div className="entry__text">
          <p className="entry__summary">{project.summary}</p>

          {project.features.length > 0 && (
            <>
              <h4 className="hand-label">Key features</h4>
              <ul className="ticks">
                {project.features.map((f) => (
                  <li key={f}>{tidyBullet(f)}</li>
                ))}
              </ul>
            </>
          )}

          {project.howIUseIt && (
            <aside className="sticky sticky--yellow sticky--inline" aria-label={NOTE_LABEL[project.kind]}>
              <h4 className="sticky__label">{NOTE_LABEL[project.kind]}</h4>
              <p>{project.howIUseIt}</p>
            </aside>
          )}

          <h4 className="hand-label">Built with</h4>
          <ul className="labels" aria-label="Tech stack">
            {project.tech.map((t) => (
              <li key={t} className="label">
                {t}
              </li>
            ))}
          </ul>

          <h4 className="hand-label">Links</h4>
          <ul className="plinks">
            {project.links.map((l) => (
              <LinkItem key={l.label} link={l} />
            ))}
          </ul>
        </div>

        <div className="entry__media">
          <div
            className={`entry__shots${
              project.images.length > 1 && project.images.every((im) => im.height > im.width) ? " entry__shots--pair" : ""
            }`}
          >
          {project.images.map((img, i) => {
            const src = imageUrl(img.file);
            if (!src) return null;
            return (
              <TapedImage
                key={img.file}
                src={src}
                alt={`${img.title}. ${img.description}`}
                title={img.title}
                description={img.description}
                width={img.width}
                height={img.height}
                tilt={(i + index) % 2 === 0 ? -1.4 : 1.2}
                tape={TAPES[(i + index) % TAPES.length]}
                onOpen={() =>
                  onOpen({
                    src,
                    alt: `${img.title}. ${img.description}`,
                    title: img.title,
                    description: img.description,
                  })
                }
              />
            );
          })}
          </div>
          <VideoSlot slug={project.slug} title={project.title} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [open, setOpen] = useState<LightboxItem | null>(null);

  return (
    <section id="projects" className="sheet sheet--grid" aria-labelledby="projects-heading">
      <header className="sheet__head">
        <h2 id="projects-heading" className="hand-heading">
          Projects
        </h2>
        <p className="sheet__intro">
          Here's what I've built so far, {PROJECTS.length} things in all: websites for clients, my own tools and
          brand, and a few university projects. Each one has what it does and what's under the hood. Click or tap any
          screenshot to see it bigger.
        </p>
      </header>
      <div className="entries">
        {PROJECTS.map((p, i) => (
          <Fragment key={p.slug}>
            <ProjectEntry project={p} index={i} onOpen={setOpen} />
            {i % 3 === 2 && i < PROJECTS.length - 1 && <DecorStrip group={1 + Math.floor(i / 3)} flip={i % 2 === 0} />}
          </Fragment>
        ))}
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
