export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "JWT",
      "REST APIs",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    category: "Bases de Datos",
    skills: [
      "SQL Server",
      "Oracle",
      "PostgreSQL",
    ],
  },
  {
    category: "Herramientas",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Docker",
      "Jenkins",
      "CI/CD",
    ],
  },
];