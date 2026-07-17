import Card from "../../components/Card";

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

function SkillCategory({
  category,
  skills,
}: SkillCategoryProps) {
  return (
    <Card>

      <h3 className="mb-6 text-2xl font-bold text-blue-400">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-300"
          >
            {skill}
          </span>
        ))}

      </div>

    </Card>
  );
}

export default SkillCategory;