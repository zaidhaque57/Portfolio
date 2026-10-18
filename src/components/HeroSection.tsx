import { ArrowDown, ArrowUpRight, Github, Linkedin, Terminal } from "lucide-react";
import { Container } from "./Container";

export function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <Container className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="availability-dot" aria-hidden="true" /> OPEN TO LEARNING & OPPORTUNITIES</p>
          <h1 id="hero-title">I build for the web.<br /><span>And I keep getting better.</span></h1>
          <p className="hero-description">
            Hey, I’m <strong>Zaid Hawue</strong> — a computer science student working toward becoming a full-stack developer. I enjoy turning practical problems into useful, thoughtfully built software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
            <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <a href="https://github.com/zaidhaque57" target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></a>
          </div>
        </div>

        <div className="hero-art" aria-label="Decorative code editor illustration">
          <div className="orbit orbit-outer" aria-hidden="true" />
          <div className="orbit orbit-inner" aria-hidden="true" />
          <div className="code-window">
            <div className="code-window-bar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span><Terminal size={13} aria-hidden="true" /> developer.ts</span>
              <span className="code-window-status">● saved</span>
            </div>
            <div className="code-content" aria-hidden="true">
              <p><span className="code-line-number">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p>
              <p><span className="code-line-number">02</span>&nbsp;&nbsp;name: <span className="code-green">&quot;Zaid&quot;</span>,</p>
              <p><span className="code-line-number">03</span>&nbsp;&nbsp;focus: <span className="code-green">&quot;full-stack&quot;</span>,</p>
              <p><span className="code-line-number">04</span>&nbsp;&nbsp;curiosity: <span className="code-orange">Infinity</span>,</p>
              <p><span className="code-line-number">05</span>&nbsp;&nbsp;learning: <span className="code-purple">true</span>,</p>
              <p><span className="code-line-number">06</span>{'}'};</p>
              <p className="code-spacer"><span className="code-line-number">07</span></p>
              <p><span className="code-line-number">08</span><span className="code-comment">// build. learn. repeat.</span></p>
            </div>
            <div className="code-window-footer"><span><i /> TypeScript</span><span>UTF-8</span><span>Ln 08, Col 27</span></div>
          </div>
          <div className="floating-chip floating-chip-top"><span className="chip-spark">✳</span> Building in public</div>
          <div className="floating-chip floating-chip-bottom"><span className="chip-pulse" /> One project at a time</div>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} aria-hidden="true" /></a>
      </Container>
    </section>
  );
}
