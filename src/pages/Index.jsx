import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../components/Services";

const commitments = [
  [ShieldCheck, "Sécurité par conception"],
  [UsersRound, "Support humain et réactif"],
  [CheckCircle2, "Solutions pensées pour durer"],
  [Gauge, "Pilotage clair et transparent"],
];

export default function Index() {
  return (
    <>
      <Hero />

      <section className="bg-secondary px-6 py-5 text-white max-sm:px-3 max-sm:py-4">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-lg:gap-x-4 max-lg:gap-y-3 max-sm:grid-cols-1 max-sm:gap-2">
          {commitments.map(([Icon, label]) => (
            <div
              className="flex items-center gap-3 rounded-xl bg-white/10 px-3.5 py-3 text-left text-sm font-bold max-lg:bg-transparent max-lg:px-0 max-lg:py-0"
              key={label}
            >
              <Icon size={18} className="shrink-0" />
              <span className="leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <Services preview />
      <About preview />

      <section className="bg-footer-blue px-6 py-24 text-white max-sm:px-[18px] max-sm:py-[72px]">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-12 max-lg:flex-col max-lg:items-start">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-cyan">Une méthode lisible</p>
            <h2 className="max-w-[740px] font-display text-[clamp(2.9rem,5vw,5.1rem)] font-semibold leading-[.9] tracking-[-.045em]">De la visibilité sur vos risques à la sérénité de vos <em className="not-italic text-secondary">équipes.</em></h2>
          </div>
          <Link className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-secondary px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-secondary-hover" to="/a-propos">Notre manière de travailler <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <Partners />
      <Contact preview />
    </>
  );
}
