import puzzleSolved from "../assets/imgs/puzzle-solved.svg";
import { ServiceRoadmap } from "../components/Services";

export default function ServicesPage() {
  return (
    <>
      <section className="overflow-hidden bg-navy px-6 pb-[100px] pt-[180px] text-white max-sm:px-[18px] max-sm:pb-[42px] max-sm:pt-[150px]">
        <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(0,1.05fr)_minmax(340px,.75fr)] items-center gap-10 max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <p className="mb-4 text-xs font-bold italic uppercase tracking-[.15em] text-cyan">
              Nos expertises
            </p>
            <h1 className="max-w-[900px] font-display text-[clamp(3.7rem,7vw,6.3rem)] font-semibold italic leading-[.88] tracking-[-.06em] text-white max-sm:text-[clamp(3.35rem,16vw,5rem)]">
              Des solutions IT globales pour propulser votre{" "}
              <em className="italic text-cyan">entreprise.</em>
            </h1>
            <p className="mt-7 max-w-[650px] leading-[1.8] text-white/70">
              De la gestion quotidienne de votre parc informatique à la
              sécurisation de vos données stratégiques, découvrez nos domaines
              d'expertise.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[470px] max-lg:max-w-[400px]">
            <img
              className="h-auto w-full drop-shadow-[0_24px_35px_rgba(0,0,0,.22)]"
              src={puzzleSolved}
              alt="Illustration d'un puzzle assemblé"
            />
          </div>
        </div>
      </section>

      <ServiceRoadmap />

    </>
  );
}
