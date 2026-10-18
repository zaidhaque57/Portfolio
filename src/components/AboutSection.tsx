import { ArrowUpRight, Code2, Compass, GraduationCap } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="section section-about" aria-labelledby="about-title">
      <Container>
        <div className="about-layout">
          <div className="about-main">
            <SectionHeading
              eyebrow="A little about me / 03"
              title="Curious by default. Practical by design."
              description="I’m studying computer science and building my skills by shipping projects, debugging real problems, and learning how the pieces fit together."
            />
            <p className="about-copy">
              My current focus is full-stack development: creating accessible interfaces, designing APIs, working with databases, and understanding how to deploy software reliably. I’m especially interested in projects that solve everyday problems rather than just ticking a tutorial box.
            </p>
            <a className="text-link" href="https://github.com/zaidhaque57" target="_blank" rel="noopener noreferrer">
              Follow my learning through code <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="about-principles">
            <article className="principle-card">
              <span className="principle-icon"><Code2 size={19} aria-hidden="true" /></span>
              <div><h3>Build to understand</h3><p>Small experiments become stronger projects when I test, refactor, and explain what I learned.</p></div>
              <span className="principle-number">01</span>
            </article>
            <article className="principle-card">
              <span className="principle-icon"><Compass size={19} aria-hidden="true" /></span>
              <div><h3>Stay curious</h3><p>Explore new tools with a purpose, and choose reliable fundamentals over hype.</p></div>
              <span className="principle-number">02</span>
            </article>
            <article className="principle-card">
              <span className="principle-icon"><GraduationCap size={19} aria-hidden="true" /></span>
              <div><h3>Keep improving</h3><p>Use feedback, documentation, and deliberate practice to make each iteration better.</p></div>
              <span className="principle-number">03</span>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
