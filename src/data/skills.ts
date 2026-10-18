import type { Skill } from "../types";

/**
 * Skill levels are intentionally qualitative rather than fake percentage scores.
 * Update them as your independent project evidence grows.
 */
export const skills: Skill[] = [
  { name: "HTML & CSS", category: "Frontend", level: "Working knowledge", evidence: "Responsive layouts and semantic UI in portfolio and React projects" },
  { name: "JavaScript", category: "Frontend", level: "Working knowledge", evidence: "Interactive React views, state, and API integration" },
  { name: "React", category: "Frontend", level: "Working knowledge", evidence: "AniVerse, StockWise, and student-management interfaces", projectId: "aniverse" },
  { name: "TypeScript", category: "Frontend", level: "Learning", evidence: "Typed React components and project data in this portfolio" },
  { name: "Java & Spring Boot", category: "Backend", level: "Working knowledge", evidence: "REST endpoints and service-layer work in backend projects", projectId: "stockwise" },
  { name: "REST APIs", category: "Backend", level: "Working knowledge", evidence: "Connecting React interfaces to backend and third-party APIs" },
  { name: "SQL & PostgreSQL", category: "Backend", level: "Working knowledge", evidence: "Relational data modeling and database setup", projectId: "student-system" },
  { name: "Python", category: "Data & AI", level: "Learning", evidence: "Exploring forecasting and data-processing workflows", projectId: "stockwise" },
  { name: "Git & GitHub", category: "Tools", level: "Working knowledge", evidence: "Version control and project repository workflows" },
  { name: "VS Code", category: "Tools", level: "Working knowledge", evidence: "Daily development environment" }
];
