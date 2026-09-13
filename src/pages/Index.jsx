import {
  CheckCircle2,
  Gauge,
  MoveRight,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { services } from "../components/Services";
import SectionHeading from "../components/ui/SectionHeading";
import { partnerCategories } from "../lib/partners";

const commitments = [
  [ShieldCheck, "Sécurité par conception"],
  [UsersRound, "Support humain et réactif"],
  [CheckCircle2, "Solutions pensées pour durer"],
  [Gauge, "Pilotage clair et transparent"],
];

const caseStudies = [
  {
    number: "01",
    label: "Entreprise de logistique",
    context: "3 sites régionaux · 80 collaborateurs",
    title: "Modernisation et sécurisation d’un réseau multisites.",
    challenge:
      "Des interconnexions instables, des accès lents aux fichiers centraux et des attaques de phishing fréquentes.",
    solution: [
      "Refonte réseau avec des pare-feu interconnectés en VPN sécurisé.",
      "Migration vers Microsoft 365 avec authentification multifacteur.",
      "Sauvegarde hybride : locale et cloud.",
    ],
    results: [
      ["99,9 %", "de disponibilité réseau sur 12 mois"],
      ["0", "perte de données ou arrêt lié aux virus"],
      ["-30 %", "de coûts de maintenance informatique"],
    ],
  },
  {
    number: "02",
    label: "Société d’assurances",
    context: "Protection des données financières",
    title: "Déploiement d’un plan de reprise d’activité.",
    challenge:
      "L’absence de sauvegardes externalisées exposait les données financières à un risque critique en cas de sinistre.",
    solution: [
      "Réplication automatique des données toutes les heures vers un cloud sécurisé.",
      "Protocole de reprise documenté et testé en moins de deux heures.",
    ],
    results: [
      ["< 90 min", "pour reprendre l’activité après un sinistre"],
      ["1 h", "entre chaque réplication automatique"],
      ["100 %", "de conformité aux exigences de protection"],
    ],
  },
];

const approach = [
  [
    "01",
    "Audit",
    "Nous clarifions vos priorités, vos usages et les risques à traiter.",
  ],
  [
    "02",
    "Recommandation",
    "Un plan d’action concret, adapté à votre budget et à vos enjeux.",
  ],
  [
    "03",
    "Déploiement",
    "Nous intégrons les solutions avec méthode et sans perturber vos équipes.",
  ],
  [
    "04",
    "Suivi",
    "Nous restons à vos côtés pour maintenir, sécuriser et faire évoluer.",
  ],
];

const articles = [
  [
    "solutions-performance-continuite",
    "Nouvelles solutions",
    "Lancements, évolutions produits et technologies à découvrir.",
  ],
  [
    "promotions-opportunites-it",
    "Promotions",
    "Des opportunités sélectionnées pour faire avancer vos projets.",
  ],
  [
    "conseils-experts-choix-technologiques",
    "Conseils experts",
    "Des repères pratiques pour faire les bons choix technologiques.",
  ],
];

const featuredPartners = partnerCategories.filter(({ title }) =>
  [
    "HPE",
    "FORTINET",
    "CISCO / MERAKI",
    "VEEAM BACKUP & REPLICATION",
    "MICROSOFT",
    "ACRONIS",
  ].includes(title),
);

function AnimatedMetric({ value }) {
  const metricRef = useRef(null);
  const match = value.match(/-?\d+(?:[.,]\d+)?/);
  const target = match ? Number(match[0].replace(",", ".")) : 0;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice(match.index + match[0].length) : value;
  const decimals = match?.[0].includes(",") ? match[0].split(",")[1].length : 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = metricRef.current;
    if (!element) return undefined;

    let animationFrame;
    let startedAt;

    const animate = (timestamp) => {
      startedAt ??= timestamp;
      const progress = Math.min((timestamp - startedAt) / 1100, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(target * eased);
      if (progress < 1) animationFrame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(target);
        return;
      }
      animationFrame = window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        start();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return (
    <span ref={metricRef} className="font-sans">
      {prefix}
      {count.toLocaleString("fr-FR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function Index() {
  return (
    <>
      <Hero />

      {/* Bandes */}
      <section className="bg-secondary px-6 py-5 text-white max-sm:px-3 max-sm:py-4">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-lg:gap-x-4 max-lg:gap-y-3 max-sm:grid-cols-1 max-sm:gap-2">
          {commitments.map(([Icon, label]) => (
            <div
              className="flex items-center gap-3 text-left text-sm font-bold"
              key={label}
            >
              <Icon size={18} className="shrink-0" />
              <span className="leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Nos expertises */}
      <section className="bg-page px-6 py-14 max-sm:px-[18px] max-sm:py-[72px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(280px,.75fr)] items-end gap-16 max-lg:grid-cols-1 max-lg:gap-7">
            <div>
              <p className="mb-5 text-xs font-bold uppercase italic tracking-[.18em] text-primary">
                Nos expertises
              </p>
              <h2 className="max-w-[730px] font-display text-[clamp(3rem,5.6vw,5.4rem)] font-semibold italic leading-[.86] tracking-[-.055em] text-navy">
                Des services pensés pour une IT{" "}
                <em className="italic text-primary">maîtrisée.</em>
              </h2>
            </div>
            <div className="pb-1">
              <p className="max-w-[460px] text-base leading-[1.8] text-muted">
                De l’assistance au quotidien à la protection de vos données,
                nous faisons de votre système d’information un véritable appui
                pour votre activité.
              </p>
              <Link
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-hover"
                to="/services"
              >
                Voir tous les services
                <MoveRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 max-md:grid-cols-1 max-sm:mt-12">
            {services.map(({ Icon, number, title, lead }, index) => {
              const isFeatured = index === 0 || index === 3;

              return (
                <Link
                  className={`group relative min-h-[250px] overflow-hidden rounded-2xl border p-8 shadow-[0_14px_36px_rgba(11,31,58,0.06)] transition duration-300 hover:translate-x-1 hover:shadow-panel max-sm:min-h-0 max-sm:p-6 ${
                    isFeatured
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-white text-navy"
                  }`}
                  key={number}
                  to="/services"
                >
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`font-bold tracking-[.16em] ${
                        isFeatured ? "text-cyan" : "text-secondary"
                      }`}
                    >
                      {number}
                    </span>
                  </div>
                  <div className="relative mt-5 flex items-end justify-between gap-6">
                    <div>
                      <h3
                        className={`max-w-[470px] font-display text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-[.93] tracking-[-.03em] ${
                          isFeatured ? "text-white" : "text-navy"
                        }`}
                      >
                        {title}
                      </h3>
                      <p
                        className={`mt-4 max-w-[490px] text-sm leading-[1.7] ${
                          isFeatured ? "text-white/65" : "text-muted"
                        }`}
                      >
                        {lead}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="relative overflow-hidden bg-navy px-6 py-28 text-white max-sm:px-[18px] max-sm:py-[78px]">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(0,194,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,255,.13)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="relative mx-auto w-full max-w-[1280px]">
          <p className="mb-4 text-xs font-bold uppercase italic tracking-[.15em] text-cyan">
            Études de cas
          </p>
          <div className="flex items-end justify-between gap-8 max-lg:block">
            <div>
              <h2 className="max-w-[760px] font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold italic leading-[.95] tracking-[-.04em] text-white">
                Nos réalisations, la preuve par le{" "}
                <em className="italic text-cyan">résultat.</em>
              </h2>
              <p className="mt-5 max-w-[650px] leading-[1.8] text-white/70">
                Découvrez comment nous modernisons, sécurisons et rendons les
                systèmes d’information plus résilients.
              </p>
            </div>
            <Link
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan transition hover:text-opacity-80"
              to="/contact"
            >
              Échanger sur un projet similaire
              <MoveRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {caseStudies.map(
              (
                { number, label, context, title, challenge, solution, results },
                index,
              ) => {
                const isFeatured = index === 0;

                return (
                  <article
                    className={`group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl border p-8 shadow-[0_14px_36px_rgba(11,31,58,0.08)] transition duration-300 hover:translate-x-1 hover:shadow-panel max-sm:min-h-0 max-sm:p-6 ${
                      isFeatured
                        ? "border-primary/15 bg-soft text-navy"
                        : "border-line bg-white text-navy"
                    }`}
                    key={number}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-sm font-bold italic tracking-[.14em] text-secondary">
                          CAS N°{number}
                        </span>
                        <p className="mt-1 text-lg font-bold text-navy">
                          {label}
                        </p>
                        <p className="mt-1 text-xs text-muted">{context}</p>
                      </div>
                    </div>
                    <h3 className="mt-5 max-w-[520px] font-display text-[clamp(2rem,3vw,2.7rem)] font-semibold  italic leading-[.95] text-navy">
                      {title}
                    </h3>

                    <div className="mt-8 border-t border-line pt-6">
                      <p className="text-xs font-bold uppercase tracking-[.14em] text-secondary">
                        Le défi
                      </p>
                      <p className="mt-3 text-sm leading-[1.75] text-muted">
                        {challenge}
                      </p>
                    </div>
                    <div className="my-6">
                      <p className="text-xs font-bold uppercase tracking-[.14em] text-primary">
                        Notre intervention
                      </p>
                      <ul className="mt-3 grid gap-2.5">
                        {solution.map((item) => (
                          <li
                            className="flex gap-3 text-sm leading-[1.6] text-muted"
                            key={item}
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto grid grid-cols-3 border-t border-line pt-6 max-sm:grid-cols-1 max-sm:gap-5">
                      {results.map(([value, description]) => (
                        <div className="pr-3" key={value}>
                          <strong className="block font-sans text-2xl font-semibold italic leading-none text-primary">
                            <AnimatedMetric value={value} />
                          </strong>
                          <span className="mt-2 block text-xs leading-[1.45] text-muted">
                            {description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="bg-white px-6 py-20 max-sm:px-[18px] max-sm:py-[64px]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[.7fr_1fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <p className="mb-4 text-xs font-bold uppercase italic tracking-[.15em] text-primary">
              Écosystème technologique
            </p>
            <h2 className="max-w-[500px] font-display text-[clamp(2.5rem,4vw,4rem)] font-semibold italic leading-[.95] tracking-[-.04em] text-ink">
              Des technologies de{" "}
              <em className="italic text-primary">référence.</em>
            </h2>
            <p className="mt-5 max-w-[480px] leading-[1.8] text-muted">
              Nous sélectionnons les solutions les plus adaptées pour concevoir
              des environnements fiables, sécurisés et évolutifs.
            </p>
            <Link
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-hover"
              to="/partenaires"
            >
              Découvrir nos partenaires
              <MoveRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-px border border-line bg-line max-sm:grid-cols-2">
            {featuredPartners.map(({ logo, title }) => (
              <div
                className="grid min-h-[112px] place-items-center bg-white p-6 max-sm:min-h-[96px] max-sm:p-5"
                key={title}
              >
                <img
                  className="h-9 w-full max-w-[110px] object-contain"
                  src={logo}
                  alt={`Logo ${title}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre méthode */}
      <section className="bg-soft px-6 py-28 max-sm:px-[18px] max-sm:py-[78px]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[.76fr_1fr] gap-20 max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <SectionHeading
              kicker="Notre méthode"
              title="Une démarche claire, de l’audit au suivi dans la"
              accent="durée."
              intro="Chaque intervention commence par la compréhension de votre environnement et se poursuit avec un accompagnement concret."
            />
            <Link
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-hover"
              to="/contact"
            >
              Parler à un expert
              <MoveRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
          <ol className="grid list-none gap-px bg-primary/15 p-0 max-sm:gap-0">
            {approach.map(([number, title, description]) => (
              <li
                className="grid grid-cols-[52px_1fr] gap-5 bg-soft p-6 max-sm:grid-cols-[42px_1fr] max-sm:p-5"
                key={number}
              >
                <span className="font-display text-3xl font-semibold leading-none text-secondary">
                  {number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold italic leading-none text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-6 py-10 max-sm:px-[18px] max-sm:py-[78px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(280px,.75fr)] items-end gap-16 max-lg:grid-cols-1 max-lg:gap-7">
            <div>
              <h2 className="max-w-[730px] font-display text-[clamp(3rem,5.6vw,5.4rem)] font-semibold italic leading-[.86] tracking-[-.055em] text-navy">
                Des repères pour une IT plus{" "}
                <em className="italic text-primary">sereine.</em>
              </h2>
            </div>
            <div className="pb-1">
              <p className="max-w-[460px] text-base leading-[1.8] text-muted">
                Des contenus pratiques pour anticiper les risques et mieux faire
                évoluer votre environnement numérique.
              </p>
              <Link
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-hover"
                to="/actualites"
              >
                Toutes les actualités
                <MoveRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {articles.map(([slug, category, title]) => (
              <Link
                className="group border border-line bg-white p-7 transition hover:border-primary/30 hover:shadow-panel max-sm:p-6"
                to={`/actualites/${slug}`}
                key={title}
              >
                <span className="text-xs font-bold uppercase tracking-[.14em] text-secondary">
                  {category}
                </span>
                <h3 className="mt-10 max-w-[340px] font-display text-[2rem] font-semibold leading-[.96] text-navy">
                  {title}
                </h3>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Lire l’article{" "}
                  <MoveRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
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
