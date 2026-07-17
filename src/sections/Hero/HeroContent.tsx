import { FaArrowRight, FaDownload } from "react-icons/fa";
import Button from "../../components/Button";

function HeroContent() {
    return (
        <div>

            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                👋 Hola, soy
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-50 md:text-7xl">
                Bryan Arley
                <br />
                Ortiz Lasso
            </h1>

            <h2 className="mt-6 text-3xl font-semibold text-blue-500">
                Java Backend Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Desarrollo aplicaciones empresariales utilizando Java,
                Spring Boot y SQL.
                Me apasiona construir APIs REST,
                optimizar consultas críticas e integrar
                servicios empresariales.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

                <Button>
                    <FaArrowRight />
                    <span>Ver proyectos</span>
                </Button>

                <Button className="border border-slate-700 bg-transparent hover:bg-slate-900">
                    <FaDownload />
                    <span>Descargar CV</span>
                </Button>

            </div>

            <div className="mt-10 flex flex-wrap gap-3">

                <span className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
                    Java
                </span>

                <span className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
                    Spring Boot
                </span>

                <span className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
                    SQL Server
                </span>

                <span className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
                    REST APIs
                </span>

            </div>
        </div>
    );
}

export default HeroContent;