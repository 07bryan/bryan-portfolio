import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center bg-slate-950"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-20 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
}

export default Hero;