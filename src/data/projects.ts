import type { Project } from "../types";

/**
 * Replace repository/demo placeholders with real URLs before publishing.
 * Do not mark a project "Deployed" unless its public demo is working.
 */
export const projects: Project[] = [
  {
    id: "stockwise",
    number: "01",
    title: "StockWise",
    tagline: "Inventory that thinks ahead.",
    description:
      "A smart inventory and expiry-management concept for small retailers, combining stock visibility with demand forecasting.",
    category: "Full stack",
    stack: ["React", "Spring Boot", "PostgreSQL", "Python"],
    highlights: [
      "Inventory dashboard and batch-expiry tracking",
      "REST API for products, batches, and reorder recommendations",
      "Forecasting service designed as a separate API"
    ],
    githubUrl: "https://github.com/zaidhaque57/Stock-Wise.git",
    demoUrl: undefined,
    status: "In development",
    visual: "stockwise"
  },
  {
    id: "aniverse",
    number: "02",
    title: "Netflix-Clone",
    tagline: "Discover your next watch.",
    description:
      "An Movies & Series discovery experience with search, genre browsing, trending titles, and detailed show pages.",
    category: "Frontend",
    stack: ["React", "TypeScript", "FastAPI", "REST APIs"],
    highlights: [
      "Search and browse views backed by an external catalogue API",
      "Reusable cards and detail navigation",
      "Loading and error states for remote data"
    ],
    githubUrl: "https://github.com/zaidhaque57/Netflix-clone.git",
    demoUrl: undefined,
    status: "In development",
    visual: "aniverse"
  },
  {
    id: "student-system",
    number: "03",
    title: "Student Management System",
    tagline: "Student records, made simpler.",
    description:
      "A student-record management application focused on CRUD workflows, API integration, and relational data.",
    category: "Full stack",
    stack: ["React", "Spring Boot", "SQL"],
    highlights: [
      "Create, view, update, and delete student records",
      "Frontend-to-backend API integration",
      "Database migration and deployment learning"
    ],
    githubUrl: "https://github.com/zaidhaque57/Student-Managent-System",
    demoUrl: "https://student-manage-syst.netlify.app",
    status: "Case study",
    visual: "student"
  },
  {
    id: "placement-prediction",
    number: "04",
    title: "Student Placement Prediction System",
    tagline: "Turn student data into useful insights.",
    description:
      "A machine-learning web app that estimates placement likelihood from academic and attendance-related inputs, built as an educational data-science project.",
    category: "AI & Data",
    stack: ["Python", "Pandas", "Scikit-learn", "Flask", "NumPy"],
    highlights: [
      "Random Forest model for placement prediction",
      "Data analysis, visualizations, and model evaluation",
      "Flask web form for predicting placed or not placed"
    ],
    githubUrl: "https://github.com/zaidhaque57/Student-placement-prediction-system",
    demoUrl: "https://student-placement-prediction-system-vx9e.onrender.com",
    status: "Case study",
    visual: "placement"
  }

];
