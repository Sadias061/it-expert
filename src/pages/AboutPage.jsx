import { MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const statistics = [
  ["10+", "Années d’expérience"],
  ["100+", "Projets réalisés"],
  ["10+", "Experts certifiés"],
  ["10+", "Pays couverts"],
];

const commitments = [
  [
    "01",
    "Excellence technique",
    "Une équipe d'ingénieurs certifiés, en formation continue sur les technologies de pointe.",
  ],
  [
    "02",
    "Réactivité & proximité",
    "Un support disponible et des interventions rapides pour minimiser vos temps d'arrêt.",
  ],
  [
    "03",
    "Transparence & intégrité",
    "Des conseils neutres et avisés, orientés vers l'intérêt réel et le budget de votre entreprise.",
  ],
  [
    "04",
    "Sécurité absolue",
    "La protection de vos données et de vos réseaux est au cœur de chacune de nos interventions.",
  ],
];

const approach = [
  [
    "01",
    "Audit & Diagnostic",
    "Évaluation complète de votre parc, de vos réseaux et de vos failles de sécurité.",
  ],
  [
    "02",
    "Recommandation stratégique",
    "Proposition d'un plan d'action clair, budgétisé et sans coûts cachés.",
  ],
  [
    "03",
    "Déploiement & intégration",
    "Installation et configuration des solutions sans interruption de vos opérations.",
  ],
  [
    "04",
    "Infogérance & accompagnement",
    "Suivi proactif, maintenance continue et assistance aux utilisateurs.",
  ],
];

function CountUp({ value }) {
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(String(target), "");
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let cancelAnimation = () => {};

    const start = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(target);
        return;
      }

      const duration = 1200;
      let animationFrame;
      let startTime;

      const animate = (time) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        setCount(Math.round(target * (1 - (1 - progress) ** 3)));

        if (progress < 1)
          animationFrame = window.requestAnimationFrame(animate);
      };

      animationFrame = window.requestAnimationFrame(animate);
      cancelAnimation = () => window.cancelAnimationFrame(animationFrame);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        start();
      },
      { threshold: 0.4 },
    );

    const element = counterRef.current;
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimation();
    };
  }, [target]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const commitmentsRef = useRef(null);
  const [commitmentsVisible, setCommitmentsVisible] = useState(false);

  useEffect(() => {
    const section = commitmentsRef.current;
    if (!section) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCommitmentsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setCommitmentsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="bg-navy px-6 pb-[82px] pt-[180px] text-white max-sm:px-[18px] max-sm:pb-[60px] max-sm:pt-[150px]">
        <div className="relative z-10 mx-auto w-full max-w-[1280px]">
          <h1 className="max-w-[980px] font-display text-[clamp(3.5rem,6.5vw,6.2rem)] font-semibold italic leading-[.9] tracking-[-.06em] text-white max-sm:text-[clamp(3rem,14vw,4.5rem)]">
            Votre partenaire de confiance pour la transformation et la sécurité
            informatique en <em className="italic text-cyan">Afrique.</em>
          </h1>
          <p className="mt-7 max-w-[690px] leading-[1.8] text-white/70">
            Des solutions informatiques fiables, sécurisées et adaptées aux
            réalités du terrain pour les entreprises africaines.
          </p>

          <div className="mt-16 grid grid-cols-4 border-y border-white/15 max-md:grid-cols-2 max-md:gap-y-0">
            {statistics.map(([value, label]) => (
              <div
                className="py-7 max-md:border-b max-md:border-white/15 max-md:pr-4 even:max-md:border-l even:max-md:pl-5 last:max-md:border-b-0"
                key={label}
              >
                <strong className="block font-sans text-5xl font-semibold leading-none tracking-[-.05em] text-cyan italic">
                  <CountUp value={value} />
                </strong>
                <span className="mt-2 block text-sm text-white/70">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28 max-sm:px-[18px] max-sm:py-[78px]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[.9fr_1fr] gap-[120px] max-lg:grid-cols-1 max-lg:gap-[45px]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase italic tracking-[.15em] text-primary">
              Notre mission
            </p>
            <h2 className="max-w-[630px] font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold italic leading-[.95] tracking-[-.04em] text-ink">
              Faire de la technologie un levier de{" "}
              <em className="italic text-primary">croissance.</em>
            </h2>
          </div>
          <div className="border-l border-primary pl-[30px] max-sm:pl-5">
            <p className="m-0 mb-5 leading-[1.85] text-muted">
              Chez IT EXPERTS AFRICA, nous sommes convaincus que la technologie
              doit être un levier de croissance, et non une source de stress ou
              de blocage.
            </p>
            <p className="m-0 mb-5 leading-[1.85] text-muted">
              Notre mission est d'accompagner les entreprises, PME et grands
              comptes sur le continent africain en leur fournissant des
              solutions informatiques fiables, sécurisées et adaptées aux
              réalités du terrain.
            </p>
            <p className="m-0 leading-[1.85] text-muted">
              Nous combinons l’expertise technique aux standards internationaux
              et à la parfaite connaissance des enjeux locaux pour garantir la
              continuité de vos activités.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-page px-6 py-28 max-sm:px-[18px] max-sm:py-[78px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="mb-4 text-xs font-bold uppercase  italic tracking-[.15em] text-primary">
            Nos engagements
          </p>
          <h2 className="max-w-[730px] font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold italic leading-[.95] tracking-[-.04em] text-ink">
            Ce qui guide chacune de nos{" "}
            <em className="italic text-primary">interventions.</em>
          </h2>
          <div
            ref={commitmentsRef}
            className="mt-14 grid grid-cols-2 gap-px bg-line max-md:grid-cols-1"
          >
            {commitments.map(([number, title, description], index) => (
              <article
                className={`bg-white p-8 transition-all duration-700 ease-out max-sm:p-6 ${
                  commitmentsVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 160}ms` }}
                key={title}
              >
                <span className="text-xs font-bold tracking-[.12em] text-primary">
                  {number}
                </span>
                <h3 className="mb-3 mt-8 font-display text-[2rem] font-semibold leading-none text-navy">
                  {title}
                </h3>
                <p className="m-0 max-w-[460px] text-sm leading-[1.75] text-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-28 text-white max-sm:px-[18px] max-sm:py-[78px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="mb-4 text-xs font-bold uppercase italic tracking-[.15em] text-cyan">
            Notre approche en 4 étapes
          </p>
          <h2 className="max-w-[900px] font-display italic text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[.95] tracking-[-.04em]">
            Une méthode claire, du premier audit au suivi dans la{" "}
            <em className="italic text-cyan">durée.</em>
          </h2>
          <ol className="mt-14 grid list-none grid-cols-4 gap-6 p-0 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {approach.map(([number, title, description]) => (
              <li className="border-t border-white/20 pt-5" key={title}>
                <span className="text-xs font-bold tracking-[.12em] text-cyan">
                  {number}
                </span>
                <h3 className="mb-3 mt-7 font-display text-[2rem] font-semibold leading-none text-white">
                  {title}
                </h3>
                <p className="m-0 text-sm leading-[1.75] text-white/65">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-soft">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-9 px-6 py-[72px] max-lg:flex-col max-lg:items-start max-sm:px-[18px] max-sm:py-[60px]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase italic tracking-[.15em] text-primary">
              Rejoignez l'aventure
            </p>
            <h2 className="m-0 font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[.95] tracking-[-.04em] text-navy">
              Vous partagez nos valeurs ?
            </h2>
            <p className="mt-4 text-muted">
              Découvrez nos opportunités de carrière.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-transparent bg-primary px-5 text-sm font-bold text-white transition hover:bg-primary-dark"
              to="/carrieres"
            >
              Voir les carrières
              <MoveRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
