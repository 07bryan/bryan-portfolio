import Button from "../Button";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <a href="#" className="text-2xl font-bold text-slate-50">
          Bryan<span className="text-blue-500">.</span>
        </a>

        <NavLinks />

        <Button href="/Bryan_Ortiz_CV.pdf" download>
          Descargar CV
        </Button>

      </div>
    </header>
  );
}

export default Navbar;