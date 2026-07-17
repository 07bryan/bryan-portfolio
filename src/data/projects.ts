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
      "Aplicación web full stack desarrollada como voluntariado para una fundación, con el objetivo de apoyar a los tutores en la organización, administración y seguimiento de actividades educativas. Fui responsable del desarrollo completo de la solución utilizando Java con Spring Boot para el backend, React y JavaScript para la interfaz de usuario, y SQL para la gestión de datos. Implementé la arquitectura de la aplicación, servicios REST, lógica de negocio, persistencia de información y componentes frontend, construyendo una plataforma intuitiva y funcional para facilitar el control de actividades y procesos educativos.",
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