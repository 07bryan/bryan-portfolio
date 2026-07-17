export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Plataforma de Apoyo para Tutores",
    description:
      "Proyecto de voluntariado desarrollado para una fundación con el objetivo de apoyar a los tutores en la gestión de actividades educativas. Participé en el desarrollo de la interfaz de usuario con React, contribuyendo a la creación de una experiencia intuitiva y facilitando la organización y el seguimiento de la información.",
    technologies: [
      "Java",
      "Spring Boot",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "GitHub",
    ],
    github: "https://github.com/07bryan/PlataformaApoyoTutores",
    demo: "#",
  },
];