import SectionTitle from "../../components/SectionTitle";
import AboutStats from "./AboutStats";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Sobre mí"
          title="Construyendo software para resolver problemas reales"
        />

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <p className="text-lg leading-8 text-slate-300">
              Soy desarrollador de software con experiencia en el
              desarrollo de aplicaciones empresariales utilizando
              Java, Spring Boot y bases de datos relacionales.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Disfruto diseñar APIs REST, optimizar consultas SQL,
              integrar servicios de terceros y construir soluciones
              escalables con código limpio y mantenible.
            </p>

          </div>

          <AboutStats />

        </div>

      </div>
    </section>
  );
}

export default About;