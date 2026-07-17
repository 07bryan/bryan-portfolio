export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Somos Gestión Positiva S.A.S.",
    role: "Software Engineer",
    period: "Nov 2022 - Presente",
    description:
      "Desarrollo y mantenimiento de aplicaciones empresariales utilizando Java, Spring Boot, Hibernate y SQL Server. Implementación de APIs REST, optimización de consultas SQL e integración de servicios de terceros.",
    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "SQL Server",
      "Oracle",
      "Git"
    ]
  }
];