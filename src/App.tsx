import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import ProfessionalImpact from "./sections/ProfessionalImpact";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950">

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute right-0 top-96 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      </div>

      <Navbar />
      <Hero />
      <About />
      <ProfessionalImpact />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;