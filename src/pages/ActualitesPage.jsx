import { ArrowRight, Lightbulb, Megaphone, MoveRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import relaxedReading from "../assets/imgs/relaxed-reading.svg";

const highlights = [
  {
    Icon: Sparkles,
    slug: "solutions-performance-continuite",
    title: "Nouvelles solutions",
    text: "Lancements, évolutions produits et technologies à découvrir.",
  },
  {
    Icon: Megaphone,
    slug: "promotions-opportunites-it",
    title: "Promotions",
    text: "Offres ponctuelles et opportunités à ne pas manquer.",
  },
  {
    Icon: Lightbulb,
    slug: "conseils-experts-choix-technologiques",
    title: "Conseils experts",
    text: "Repères pratiques pour faire les bons choix technologiques.",
  },
];

export default function ActualitesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy px-6 pb-[90px] pt-[160px] text-white max-sm:px-[18px] max-sm:pb-[70px] max-sm:pt-[140px]">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(0,1fr)_minmax(320px,.72fr)] items-center gap-12 max-lg:grid-cols-1 max-lg:gap-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase italic tracking-[.15em] text-cyan">
              Veille & opportunités
            </p>
            <h1 className="max-w-[800px] font-display text-[clamp(3.7rem,7vw,6.3rem)] font-semibold italic leading-[.88] tracking-[-.06em] text-white max-sm:text-[clamp(3.35rem,16vw,5rem)]">
              Actualités.
            </h1>
            <p className="mt-7 max-w-[680px] leading-[1.8] text-white/70">
              Découvrez les nouvelles solutions, les évolutions technologiques
              et les promotions sélectionnées par IT Experts Africa.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] max-lg:order-first max-lg:mb-2">
            <img
              className="relative z-10 block h-auto w-full"
              src={relaxedReading}
              alt="Illustration d’une personne lisant paisiblement"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28 max-sm:px-[18px] max-sm:py-[78px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="w-full max-w-none">
            <p className="mb-4 text-xs font-bold uppercase italic tracking-[.15em] text-primary">
              À la une
            </p>
            <h2 className="font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold italic leading-[.95] tracking-[-.04em] text-ink">
              Des solutions IT pensées pour la{" "}
              <em className="italic text-primary">performance</em> et la
              continuité.
            </h2>
            <p className="mt-6 max-w-none leading-[1.8] text-muted">
              Nous partageons régulièrement les nouveautés de notre écosystème
              et les offres qui peuvent accélérer vos projets d’infrastructure,
              de cybersécurité, de cloud et de collaboration.
            </p>
          </div>

          {/* Liste des actualités à la une */}
          <div className="mt-14 grid grid-cols-3 gap-px bg-line max-lg:grid-cols-1">
            {highlights.map(({ Icon, slug, title, text }) => (
              <Link
                className="group bg-white p-8 transition hover:bg-soft max-sm:p-6"
                key={title}
                to={`/actualites/${slug}`}
              >
                <Icon size={26} className="text-secondary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-[2rem] font-semibold leading-none text-navy">
                  {title}
                </h3>
                <p className="mt-4 max-w-[320px] text-sm leading-[1.75] text-muted">
                  {text}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Découvrir{" "}
                  <MoveRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
