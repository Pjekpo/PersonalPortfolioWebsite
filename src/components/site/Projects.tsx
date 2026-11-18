import { useState } from "react";
import { PROJECTS, type Project, type ProjectLink } from "../../data/projects";
import { Lightbox, type LightboxItem } from "./Lightbox";
import { SectionHead } from "./SectionHead";
import { Shot } from "./Shot";
import { VideoSlot } from "./VideoSlot";

const imageUrls = import.meta.glob("../../assets/projects/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const imageUrl = (file: string) => imageUrls[`../../assets/projects/${file}`];

function tidyBullet(text: string) {
  const t = text.trim().replace(/\.$/, "");
  // keep words like "eBay" or "iOS" as they are
  if (/^[a-z][A-Z]/.test(t)) return t;
  return t.charAt(0).toUpperCase() + t.slice(1);
}

const NOTE_LABEL: Record<Project["kind"], string> = {
  own: "How I use it",
  client: "About the work",
  uni: "About the work",
};

const KIND_LABEL: Record<Project["kind"], string> = {
  own: "own project",
  client: "client work",
  uni: "university",
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

function ProjectEntry({ project, onOpen }: { project: Project; onOpen: (item: LightboxItem) => void }) {
  const headingId = `project-${project.slug}`;
  const portraitPair = project.images.length > 1 && project.images.every((im) => im.height > im.width);

  return (
    <article className="project" aria-labelledby={headingId} id={`p-${project.slug}`}>
      <header className="project__head">
        <p className="project__meta">
          <span className="project__path">~/projects/{project.slug}</span>
          <span className={`kind kind--${project.kind}`}>{KIND_LABEL[project.kind]}</span>
        </p>
        <h3 id={headingId} className="project__title">
          {project.title}
        </h3>
        <p className="project__period">{project.period}</p>
      </header>

      <div className="project__body">
        <div className="project__text">
          <p className="project__summary">{project.summary}</p>

          {project.features.length > 0 && (
            <>
              <h4 className="label">Key features</h4>
              <ul className="bullets">
                {project.features.map((f) => (
                  <li key={f}>{tidyBullet(f)}</li>
                ))}
              </ul>
            </>
          )}

          {project.howIUseIt && (
            <div className="note">
              <h4 className="label">{NOTE_LABEL[project.kind]}</h4>
              <p>{project.howIUseIt}</p>
            </div>
          )}

          <h4 className="label">Built with</h4>
          <ul className="tags" aria-label="Tech stack">
            {project.tech.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>

          <h4 className="label">Links</h4>
          <ul className="plinks">
            {project.links.map((l) => (
              <LinkItem key={l.label} link={l} />
            ))}
          </ul>
        </div>

        <div className="project__media">
          <div className={`shots${portraitPair ? " shots--portrait" : ""}`}>
            {project.images.map((img) => {
              const src = imageUrl(img.file);
              if (!src) return null;
              const alt = `${img.title}. ${img.description}`;
              return (
                <Shot
                  key={img.file}
                  src={src}
                  alt={alt}
                  title={img.title}
                  description={img.description}
                  width={img.width}
                  height={img.height}
                  natural={portraitPair}
                  onOpen={() => onOpen({ src, alt, title: img.title, description: img.description })}
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
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <SectionHead num="01" title="Projects" id="projects-heading">
        <p>
          Here's what I've built so far, {PROJECTS.length} things in all: websites for clients, my own tools and brand,
          and a few university projects. Each one has what it does and what's under the hood. Click or tap any
          screenshot to see it bigger.
        </p>
      </SectionHead>
      <div className="projects">
        {PROJECTS.map((p) => (
          <ProjectEntry key={p.slug} project={p} onOpen={setOpen} />
        ))}
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
