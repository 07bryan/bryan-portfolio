import Card from "../../components/Card";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

function ExperienceCard({
  company,
  role,
  period,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between flex-wrap gap-3">

        <div>
          <h3 className="text-2xl font-bold text-slate-100">
            {role}
          </h3>

          <p className="text-blue-400 mt-1">
            {company}
          </p>
        </div>

        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
          {period}
        </span>

      </div>

      <p className="mt-6 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
          >
            {technology}
          </span>
        ))}

      </div>

    </Card>
  );
}

export default ExperienceCard;