import SectionTitle from "../../components/SectionTitle";
import { impacts } from "../../data/impact.js";
import ImpactCard from "./ImpactCard";

function ProfessionalImpact() {
  return (
    <section
      id="impact"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Impacto Profesional"
          title="Cómo aporto valor"
        />

        <div className="grid gap-8 md:grid-cols-2">

          {impacts.map((impact) => (
            <ImpactCard
              key={impact.title}
              icon={impact.icon}
              title={impact.title}
              description={impact.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProfessionalImpact;