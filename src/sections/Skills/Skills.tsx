import SectionTitle from "../../components/SectionTitle";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "../../data/skills.js";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Tech Stack"
          title="Tecnologías con las que trabajo"
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {skillCategories.map((category) => (
            <SkillCategory
              key={category.category}
              {...category}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;