import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const filters = ["All", "Full stack", "Frontend", "Backend", "AI & Data"] as const;
type Filter = typeof filters[number];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filteredProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="work" className="section section-work" aria-labelledby="work-title">
      <Container>
        <div className="work-heading-row">
          <div>
            <SectionHeading
              eyebrow="Selected work / 01"
              title="Projects with a purpose."
              description="A few things I’m building, learning from, and improving one iteration at a time."
            />
          </div>
          <a className="text-link github-profile-link" href="https://github.com/zaidhaque57" target="_blank" rel="noopener noreferrer">
            More on GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="filter-row" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`filter-button ${activeFilter === filter ? "filter-button--active" : ""}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
              {filter === "All" && <span className="filter-count">{projects.length}</span>}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">{filteredProjects.length} projects shown.</p>
        <div className="project-grid">
          {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </Container>
    </section>
  );
}
