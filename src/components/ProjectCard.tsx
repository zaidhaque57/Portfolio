import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../types";
import { ProjectVisual } from "./ProjectVisual";

function isPlaceholderUrl(url: string) {
  return url.includes("YOUR_USERNAME") || url.includes("YOUR_REPO") || url.includes("YOUR_DEPLOYED_SITE");
}

export function ProjectCard({ project }: { project: Project }) {
  const githubReady = !isPlaceholderUrl(project.githubUrl);
  const demoReady = Boolean(project.demoUrl && !isPlaceholderUrl(project.demoUrl));

  return (
    <article className="project-card">
      <div className="project-card-visual">
        <ProjectVisual project={project} />
        <span className="project-number">{project.number}</span>
      </div>
      <div className="project-card-body">
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          <span className={`status status--${project.status.toLowerCase().replaceAll(" ", "-")}`}>
            <span aria-hidden="true" />{project.status}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <ul className="tech-list" aria-label={`${project.title} technologies`}>
          {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className="project-actions">
          {githubReady ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code on GitHub (opens in a new tab)`}>
              <Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : (
            <span className="link-unavailable" title="https://github.com/zaidhaque57/Netflix-clone.git"><Github size={16} aria-hidden="true" /> Add GitHub URL</span>
          )}
          {demoReady && project.demoUrl ? (
            <a className="demo-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo (opens in a new tab)`}>
              Live demo <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : (
            <span className="link-unavailable" title="Add a working public demo URL when available"><ArrowDownRight size={14} aria-hidden="true" /> Demo soon</span>
          )}
        </div>
      </div>
    </article>
  );
}
