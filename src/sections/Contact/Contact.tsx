import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import SectionTitle from "../../components/SectionTitle";
import { contactInfo } from "../../data/contact.js";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-4xl px-6">

        <SectionTitle
          subtitle="Contacto"
          title="¡Hablemos!"
        />

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <p className="text-center text-lg leading-8 text-slate-300">
            Actualmente estoy abierto a nuevas oportunidades y
            proyectos interesantes. Si crees que podemos trabajar
            juntos, no dudes en contactarme.
          </p>

          <div className="mt-10 grid gap-5">

            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 transition hover:border-blue-500 hover:bg-slate-800"
            >
              <Mail />
              <span>{contactInfo.email}</span>
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 transition hover:border-blue-500 hover:bg-slate-800"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 transition hover:border-blue-500 hover:bg-slate-800"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href={contactInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 transition hover:border-blue-500 hover:bg-slate-800"
            >
              <FileText />
              <span>Descargar CV</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;