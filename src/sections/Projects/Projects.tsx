import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects.js";

function Projects() {
    return (
        <section
            id="projects"
            className="bg-slate-950 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <SectionTitle
                    subtitle="Projects"
                    title="Proyectos destacados"
                />

                <div className="mx-auto max-w-5xl">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;