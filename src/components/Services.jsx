import {
  Minus,
  Headset,
  Plus,
  Network,
  Route,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    number: "01",
    Icon: Headset,
    title: "Infogérance & Support IT",
    lead: "Déléguez la gestion de votre informatique à des spécialistes et concentrez-vous sur votre cœur de métier.",
    description:
      "Assistance technique de proximité et à distance. Contrats de maintenance préventive et corrective pour garantir la continuité de vos activités.",
    points: [
      "Helpdesk & Support Utilisateurs N1/N2/N3",
      "Maintenance préventive et corrective",
      "Gestion de parc informatique",
      "Télémaintenance",
      "SLA garantis",
    ],
  },
  {
    number: "02",
    Icon: ShieldCheck,
    title: "Cybersécurité & Protection des Données",
    lead: "Protégez votre entreprise contre les cyberattaques, le vol de données et les rançongiciels (ransomwares).",
    description:
      "Renforcez la protection de vos systèmes, de vos réseaux et de vos données stratégiques.",
    points: [
      "Audit de sécurité & Tests d'intrusion",
      "Protection périmétrique",
      "Firewall & IDS/IPS",
      "SOC managé",
      "Sauvegarde & Continuité d'Activité",
      "Antivirus",
      "Formation sécurité",
    ],
  },
  {
    number: "03",
    Icon: Network,
    title: "Infrastructures & Réseaux",
    lead: "Conception, déploiement et maintenance d'infrastructures réseau haute performance. Câblage structuré, Wi-Fi d’entreprise, VPN et interconnexion de sites.",
    description:
      "Bâtissez une architecture réseau moderne, rapide et accessible en toute sécurité.",
    points: [
      "LAN / WAN",
      "Wi-Fi entreprise",
      "VPN & SD-WAN",
      "Câblage structuré",
      "Téléphonie IP & Visioconférence",
    ],
  },
  {
    number: "04",
    Icon: Route,
    title: "Conseil & Transformation Numérique",
    lead: "Un accompagnement stratégique pour aligner vos choix informatiques avec vos objectifs business.",
    description:
      "Des recommandations concrètes pour faire évoluer vos outils, vos usages et vos équipes.",
    points: [
      "Conseil en choix de logiciels : sélection et intégration d'ERP, CRM et outils de gestion adaptés à votre secteur.",
      "Accompagnement au changement : formation de vos collaborateurs aux bonnes pratiques informatiques et de sécurité.",
    ],
  },
];

const serviceRoadmap = services.map(
  ({ number, title, lead, description, points }) => ({
    number,
    title,
    description: lead,
    body: description,
    points,
  }),
);

export function ServiceRoadmap() {
  const [expandedCards, setExpandedCards] = useState(() =>
    services.map(() => false),
  );

  return (
    <section className="overflow-hidden bg-[#fcfbf8] px-6 py-[150px] max-sm:px-[18px] max-sm:py-24">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-xs font-bold uppercase italic tracking-[.18em] text-primary">
            Nos expertises
          </p>
          <h1 className="font-sans text-[clamp(2.7rem,5vw,4.5rem)] font-semibold italic leading-[.98] tracking-[-.055em] text-dark">
            Les services, dans l’ordre.
          </h1>
          <p className="mx-auto mt-5 max-w-[590px] text-base leading-[1.75] text-muted">
            Quatre expertises complémentaires, de la gestion quotidienne de
            votre parc à la sécurisation de vos données stratégiques.
          </p>
        </div>

        <div className="relative mx-auto mt-24 max-w-[1100px] max-sm:mt-16">
          {serviceRoadmap.map(
            ({ number, title, description, body, points }, index) => {
              const isLeft = index % 2 === 0;
              const isLast = index === serviceRoadmap.length - 1;
              const isExpanded = expandedCards[index];

              return (
                <div
                  className={`relative flex w-full pb-10 max-md:pb-14 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                  key={number}
                >
                  <article
                    className={`relative w-[calc(50%-2rem)] rounded-2xl border border-[#ddd8f3] bg-soft p-8 shadow-[6px_rgba(57,43,117,0.1)] hover:shadow-[02px_1px_rgba(57,43,117,0.15)] max-md:w-full max-sm:px-6 max-sm:pb-7 ${
                      isExpanded ? "min-h-[520px]" : "min-h-[270px]"
                    } max-md:min-h-0`}
                  >
                    <button
                      aria-label={
                        isExpanded ? "Réduire la carte" : "Développer la carte"
                      }
                      className={`absolute -top-3 grid h-7 w-7 place-items-center rounded-full border-4 border-[#fcfbf8] bg-[#6559cf] shadow-[0_5px_14px_rgba(75,62,172,0.3)] transition-transform duration-300 hover:scale-105 ${
                        isLeft ? "left-8" : "right-8"
                      }`}
                      onClick={() =>
                        setExpandedCards((current) =>
                          current.map((value, cardIndex) =>
                            cardIndex === index ? !value : value,
                          ),
                        )
                      }
                      type="button"
                    >
                      {isExpanded ? (
                        <Minus
                          size={12}
                          strokeWidth={2.5}
                          className="text-white"
                        />
                      ) : (
                        <Plus
                          size={12}
                          strokeWidth={2.5}
                          className="text-white"
                        />
                      )}
                    </button>
                    <span className="font-sans text-[clamp(3.4rem,6vw,5.2rem)] font-medium leading-none tracking-[-.08em] text-transparent [-webkit-text-stroke:1px_#6559cf]">
                      {number}
                    </span>
                    <h2 className="mt-7 max-w-[370px] font-sans text-[clamp(1.4rem,2.2vw,1.8rem)] font-bold leading-[1.08] tracking-[-.035em] text-dark">
                      {title}
                    </h2>
                    <p className="mt-4 max-w-[390px] text-sm leading-[1.75] text-[#4c4a5e]">
                      {description}
                    </p>

                    {isExpanded ? (
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded
                            ? "mt-6 max-h-[320px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm leading-[1.75] text-[#4c4a5e]">
                          {body}
                        </p>
                        <ul className="mt-5 grid gap-2.5 border-t border-[#ddd8f3] pt-5">
                          {points.map((point) => (
                            <li
                              className="flex items-start gap-2.5 text-sm leading-[1.55] text-[#4c4a5e]"
                              key={point}
                            >
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>

                  {!isLast ? (
                    <>
                      <svg
                        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[120px] w-full max-md:hidden"
                        viewBox="0 0 1100 120"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d={
                            isLeft
                              ? "M225 1C380 1 575 119 875 119"
                              : "M875 1C720 1 525 119 225 119"
                          }
                          stroke="#9d96d9"
                          strokeWidth="1.5"
                          strokeDasharray="3 8"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span
                        aria-hidden="true"
                        className="absolute bottom-3 left-1/2 h-7 border-l border-dashed border-[#9d96d9] max-md:block md:hidden"
                      />
                    </>
                  ) : null}
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

export { services };
