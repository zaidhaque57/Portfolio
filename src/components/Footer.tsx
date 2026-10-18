import { ArrowUp } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">Z</span><span>zaid<span className="brand-dot">.</span></span></a>
        <p>Designed with intent. Built with curiosity.</p>
        <a className="back-to-top" href="#home">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
        <span className="footer-copyright">© {new Date().getFullYear()} Zaid Haque</span>
      </Container>
    </footer>
  );
}
