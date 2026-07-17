export interface Impact {
  title: string;
  description: string;
  icon: string;
}

export const impacts: Impact[] = [
  {
    icon: "⚡",
    title: "Optimización de rendimiento",
    description:
      "Optimización de consultas SQL y eliminación de procesos repetitivos para mejorar el rendimiento de aplicaciones empresariales.",
  },
  {
    icon: "🔗",
    title: "Integración de APIs",
    description:
      "Desarrollo e integración de servicios REST para conectar aplicaciones con plataformas de terceros.",
  },
  {
    icon: "🏢",
    title: "Software empresarial",
    description:
      "Desarrollo y mantenimiento de aplicaciones utilizadas en procesos de negocio en entornos de producción.",
  },
  {
    icon: "🗄️",
    title: "Bases de datos",
    description:
      "Experiencia trabajando con SQL Server y Oracle, optimizando consultas y garantizando un acceso eficiente a la información.",
  },
];