import { ArrowUpRight, Copy, Github, Mail } from "lucide-react";
import { useState } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const email = "your.email@example.com";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section id="contact" className="section section-contact" aria-labelledby="contact-title">
      <Container>
        <div className="contact-panel">
          <div className="contact-orb" aria-hidden="true" />
          <div className="contact-content">
            <SectionHeading
              eyebrow="Your turn / 04"
              title="Have a good problem to solve?"
              description="I’m interested in learning opportunities, thoughtful collaborations, and conversations about building software."
            />
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${email}`}><Mail size={16} aria-hidden="true" /> Say hello <ArrowUpRight size={15} aria-hidden="true" /></a>
              <button className="button button-secondary" type="button" onClick={copyEmail}><Copy size={15} aria-hidden="true" /> {copied ? "Email copied" : "Copy email"}</button>
            </div>
            <p className="contact-note"><span aria-hidden="true">↳</span> Replace the placeholder email in <code>ContactSection.tsx</code> before launch.</p>
          </div>
          <div className="contact-side">
            <span className="contact-side-label">FIND ME ELSEWHERE</span>
            <a href="https://github.com/zaidhaque57" target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><span className="linkedin-glyph">in</span> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
      </Container>
    </section>
  );
}
