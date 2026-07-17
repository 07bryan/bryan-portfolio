import { ArrowUpRight, ExternalLink } from "lucide-react";
import Card from "../../components/Card";
import ApoyoTutores from "../../assets/images/ApoyoTutores.png";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <Card>
      {/* Imagen del proyecto */}
      <div className="mb-6 flex h-56 items-center justify-center rounded-xl border border-slate-800 bg-slate-800">
        <img
          src={ApoyoTutores}
          alt="Bryan Ortiz"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Información */}
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>

      {/* Tecnologías */}
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Botones */}
      <div className="mt-8 flex items-center gap-6">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium text-slate-300 transition-colors hover:text-white"
        >
          <ExternalLink size={18} />
          View Source
        </a>

        {demo !== "#" && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            <ArrowUpRight size={18} />
            Live Demo
          </a>
        )}
      </div>
    </Card>
  );
}

export default ProjectCard;