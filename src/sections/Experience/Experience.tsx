import SectionTitle from "../../components/SectionTitle";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/experience.js";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Experiencia"
          title="Trayectoria profesional"
        />

        <div className="space-y-8">

          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              {...experience}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;