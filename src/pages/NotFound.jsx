import { ArrowUpRight, Info, Layers, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import notFoundIllustration from "../assets/imgs/404.svg";

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-page px-6 py-16 max-sm:px-[18px] max-sm:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(rgba(23,105,224,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(23,105,224,.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-[460px] w-[460px] rounded-full border border-primary/10" />
      <div className="pointer-events-none absolute -right-28 bottom-10 -z-10 h-[380px] w-[380px] rounded-full bg-soft/80" />

      <section className="mx-auto grid min-h-[540px] w-full max-w-[1280px] grid-cols-[minmax(0,.88fr)_minmax(360px,1fr)] items-center gap-12 max-lg:grid-cols-1 max-lg:gap-4">
        <div className="max-w-[590px] max-lg:order-2 max-lg:mx-auto max-lg:text-center">
          <h1 className="font-display text-[clamp(3.4rem,6vw,6.2rem)] italic font-semibold leading-[.84] tracking-[-.055em] text-dark">
            Cette page semble <em className="text-secondary">hors réseau.</em>
          </h1>
          <p className="mt-7 max-w-[510px] text-base leading-[1.8] text-muted max-lg:mx-auto">
            L’adresse demandée n’existe pas, a été déplacée ou n’est plus
            disponible. Revenez à l’accueil pour retrouver votre chemin.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 max-lg:justify-center max-sm:flex-col">
            <Link
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-secondary px-6 text-sm font-bold text-white transition hover:bg-secondary-hover"
              to="/"
            >
              <MoveLeft
                size={17}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Retour à l’accueil
            </Link>
            <Link
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-primary/20 px-6 text-sm font-bold text-primary transition hover:border-primary hover:bg-soft"
              to="/contact"
            >
              <Info size={17} className="group-hover:animate-bounce" />
              Besoin d’aide ?
            </Link>
          </div>
          <Link
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-hover"
            to="/services"
          >
            Découvrir nos expertises
            <Layers size={17} className="animate-bounce" />
          </Link>
        </div>

        <div className="relative flex items-center justify-center max-lg:order-1">
          <div className="absolute h-[72%] w-[72%] rounded-full bg-soft" />
          <img
            className="relative z-10 block w-full max-w-[680px]"
            src={notFoundIllustration}
            alt="Illustration d’une page introuvable"
          />
        </div>
      </section>
    </main>
  );
}
