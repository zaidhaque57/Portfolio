export type ProjectCategory = "Full stack" | "Frontend" | "Backend" | "AI & Data";

export type Project = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  status: "In development" | "Deployed" | "Case study";
  visual: "stockwise" | "aniverse" | "student" | "placement";
};

export type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Data & AI" | "Tools";
  level: "Learning" | "Working knowledge" | "Proficient";
  evidence: string;
  projectId?: string;
};
