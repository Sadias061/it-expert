import { ArrowRight, Cloud, Code2, Handshake, Network, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

const partnerTypes = [
  [Cloud, "Cloud & Hébergement"],
  [ShieldCheck, "Sécurité & Conformité"],
  [Network, "Réseaux & Connectivité"],
  [Code2, "Solutions métiers"],
  [UsersRound, "Experts locaux"],
  [Handshake, "Alliances utiles"],
];

export default function Partners() {
  return (
    <section className="bg-page px-6 py-28 max-sm:px-[18px] max-sm:py-[78px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-primary">Notre écosystème</p>
            <h2 className="max-w-[760px] font-display text-[clamp(2.9rem,5vw,5rem)] font-semibold leading-[.9] tracking-[-.045em] text-dark">Les bonnes alliances au service de vos <em className="not-italic text-primary">projets.</em></h2>
            <p className="mt-5 max-w-[610px] text-base leading-[1.8] text-muted">Nous mobilisons les expertises complémentaires dont votre organisation a besoin, au bon moment.</p>
          </div>
          <Link className="group inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-primary transition hover:text-primary-hover" to="/partenaires">Découvrir nos partenaires <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" /></Link>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {partnerTypes.map(([Icon, label]) => (
            <div className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-panel" key={label}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-soft text-primary transition group-hover:bg-primary group-hover:text-white"><Icon size={21} /></span>
              <span className="text-sm font-bold text-dark">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
