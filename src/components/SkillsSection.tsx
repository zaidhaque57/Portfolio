import { ArrowUpRight, Braces, Database, GitBranch, Layers3 } from "lucide-react";
import { skills } from "../data/skills";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { name: "Frontend", icon: Braces, note: "Interfaces & interaction" },
  { name: "Backend", icon: Database, note: "APIs & data" },
  { name: "Data & AI", icon: Layers3, note: "Learning by building" },
  { name: "Tools", icon: GitBranch, note: "Workflow & delivery" }
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="section section-skills" aria-labelledby="skills-title">
      <Container>
        <SectionHeading
          eyebrow="The toolkit / 02"
          title="Skills, backed by practice."
          description="I prefer showing where I’ve used a tool over pretending a percentage can measure engineering ability."
        />
        <div className="skills-grid">
          {groups.map((group, index) => {
            const Icon = group.icon;
            const groupSkills = skills.filter((skill) => skill.category === group.name);
            return (
              <article className="skill-group" key={group.name}>
                <div className="skill-group-top">
                  <span className="skill-icon"><Icon size={18} aria-hidden="true" /></span>
                  <span className="skill-index">0{index + 1}</span>
                </div>
                <h3>{group.name}</h3>
                <p className="skill-group-note">{group.note}</p>
                <ul className="skill-items">
                  {groupSkills.map((skill) => (
                    <li key={skill.name}>
                      <div className="skill-item-main">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`level level--${skill.level.toLowerCase().replaceAll(" ", "-")}`}>{skill.level}</span>
                      </div>
                      <p>{skill.evidence}</p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <p className="skills-note"><span aria-hidden="true">↳</span> Skill levels are qualitative and self-assessed. Project evidence is listed for context, not as a certification.</p>
        <a className="text-link" href="https://github.com/zaidhaque57" target="_blank" rel="noopener noreferrer">
          Explore code and commits <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </Container>
    </section>
  );
}
