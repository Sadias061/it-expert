import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  MoveRight,
  Play,
  RotateCcw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import agreementIllustration from "../assets/imgs/agreement.svg";
import highlightImage from "../assets/imgs/highlight.webp";
import { partnerCategories } from "../lib/partners";

function PartnerCount({ value }) {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return undefined;

    let animationFrame;
    const animateCount = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(value);
        return;
      }

      const duration = 1200;
      let startedAt;
      const update = (timestamp) => {
        startedAt ??= timestamp;
        const progress = Math.min((timestamp - startedAt) / duration, 1);
        setCount(Math.round(progress * value));
        if (progress < 1) animationFrame = window.requestAnimationFrame(update);
      };
      animationFrame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <span
      ref={counterRef}
      className="text-4xl font-semibold text-cyan"
      aria-label={`${value} partenaires`}
    >
      {count}
      <span aria-hidden="true">+</span>
    </span>
  );
}

export default function PartnersPage() {
  return (
    <>
      {/* Section hero */}
      <section className="relative isolate overflow-hidden bg-footer-blue px-6 pb-20 pt-[160px] text-white max-sm:px-[18px] max-sm:pb-16 max-sm:pt-[130px]">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(0,1fr)_minmax(300px,.54fr)] items-center gap-14 max-lg:grid-cols-1">
          <div>
            <p className="mb-5 text-xs font-bold italic uppercase tracking-[.2em] text-cyan">
              Écosystème technologique
            </p>
            <h1 className="max-w-[790px] font-display text-[clamp(4rem,7vw,7rem)] italic font-semibold leading-[.84] tracking-[-.065em]">
              Nos <em className="text-cyan">partenaires.</em>
            </h1>
            <p className="mt-8 max-w-[670px] text-base leading-[1.85] text-white/75">
              Nous sélectionnons des technologies reconnues pour concevoir,
              déployer et maintenir des environnements IT fiables, sécurisés et
              évolutifs.
            </p>
          </div>
          <div className="relative mx-auto grid w-full max-w-[440px] grid-cols-[minmax(0,1fr)_auto] items-center justify-between gap-12 max-lg:mt-2 max-lg:max-w-[600px] max-sm:grid-cols-1 max-sm:gap-8">
            <img
              className="relative z-10 block max-h-[255px] w-full justify-self-start object-contain max-sm:justify-self-center"
              src={agreementIllustration}
              alt="Illustration d’un accord de partenariat"
            />
            <div className="relative z-20 justify-self-end border-l-2 border-cyan pl-4 max-sm:justify-self-center">
              <PartnerCount value={19} />
              <p className="mt-1 text-xs leading-[1.55] text-white/70">
                partenaires de confiance pour vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partners */}
      <section className="bg-page px-6 py-28 max-sm:px-[18px] max-sm:py-[78px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="max-w-[800px]">
            <h2 className="font-display italic text-[clamp(2.9rem,5vw,5.1rem)] font-semibold leading-[.9] tracking-[-.045em] text-dark">
              Des solutions de référence, adaptées à vos{" "}
              <em className="italic text-primary">enjeux.</em>
            </h2>
            <p className="mt-6 max-w-[680px] text-base leading-[1.8] text-muted">
              Notre réseau de partenaires nous permet de vous accompagner avec
              des solutions éprouvées, du conseil à l’intégration et au support.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map(({ logo, title, text, link }) => (
              <article
                className="group relative flex min-h-[228px] overflow-hidden rounded-2xl border border-gray-200 bg-[linear-gradient(115deg,#FFFFFF_0%,#FFFFFF_60%,rgba(23,105,224,0.08)_100%)] p-4 shadow-sm transition hover:-translate-y-1 hover:border-primary/20 max-sm:min-h-[232px]"
                key={title}
              >
                <div className="relative z-10 flex w-full flex-col">
                  <h3 className="max-w-[70%] pt-2 text-xl font-bold leading-tight">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[70%] line-clamp-2 text-sm leading-[1.6]">
                    {text}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-5">
                    <a
                      className="button-primary inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visiter le site
                      <ArrowUpRight size={16} />
                    </a>
                    <img
                      src={logo}
                      alt={`Logo ${title}`}
                      className="h-9 w-24 object-contain object-right transition duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section info Veeam */}
      <section className="bg-white max-sm:py-16">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1280px] max-sm:w-full max-sm:px-3">
          <iframe
            className="h-[760px] w-full border-0 bg-white max-sm:h-[680px]"
            src="https://wcs-veeamdataplatform-itexpertsbeninsarl.swcontentsyndication.com/sw/swchannel/registration/internet/registration.cfm?RegPageID=7170219&traffictype=Direct#form2"
            title="Veeam Data Platform"
          />

          <div className="hidden" aria-hidden="true">
          <header className="relative isolate min-h-[400px] overflow-hidden bg-[#17382d] px-10 py-10 text-white max-sm:min-h-[360px] max-sm:px-6 max-sm:py-7">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[#1d272d] [clip-path:polygon(0_0,32%_0,58%_100%,0_100%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,transparent_47%,#16382c_47%,#16382c_100%)]" />
            <div className="relative z-10 flex min-h-[320px] flex-col justify-between max-sm:min-h-[306px]">
              <span className="relative isolate inline-flex w-fit items-center overflow-hidden bg-[#00c94f] px-3 py-1.5 pb-2 text-[clamp(2rem,3.2vw,3.25rem)] font-medium leading-none tracking-[-.07em] [clip-path:polygon(10%_0,100%_0,100%_72%,81%_100%,0_100%,0_31%)]">
                <span className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(135deg,transparent_0_42%,white_42%_47%,transparent_47%_100%)] [background-size:22px_22px]" />
                <span className="relative">veeam</span>
              </span>
              <div className="max-w-[880px] pb-1 pr-28 max-sm:pr-0">
                <h2 className="font-sans text-[clamp(2.8rem,5.4vw,5.2rem)] font-medium leading-[.95] tracking-[-.045em] text-[#00e65a]">Veeam Data Platform</h2>
                <p className="mt-10 text-[clamp(1.2rem,2vw,2rem)] leading-tight text-white/95 max-sm:mt-6">Profitez d’une résilience totale <br /> grâce à Service IT et Veeam.</p>
              </div>
            </div>
            <img src={highlightImage} alt="Veeam Data Platform" className="pointer-events-none absolute bottom-10 right-10 z-10 h-[235px] w-[235px] object-contain max-sm:bottom-6 max-sm:right-4 max-sm:h-[130px] max-sm:w-[130px]" />
          </header>

          <div className="custom-scrollbar max-h-[500px] overflow-y-auto border border-black/10 bg-white shadow-sm max-sm:max-h-[300px] max-sm:p-0">
            <section className="bg-gray-200 p-10 max-lg:p-8 max-sm:p-3">
              <h2 className="max-w-[980px] font-display text-[clamp(2.3rem,4.2vw,4.4rem)] font-semibold leading-[.95] tracking-[-.04em] text-dark">Avec la résilience totale, votre activité ne s’arrête jamais.</h2>
              <p className="mt-8 max-w-[1040px] text-lg leading-[1.75] text-dark max-sm:text-base">L’innovation et la créativité jouent un rôle crucial pour la résilience totale. Les individus et les communautés explorent activement de nouvelles idées, technologies et approches pour résoudre des problèmes. Cette attitude proactive leur permet de relever les défis avec ingéniosité.</p>
              <p className="mt-6 max-w-[1040px] text-lg leading-[1.75] text-dark max-sm:text-base">Nous offrons aux entreprises les moyens d'élaborer leur stratégie de cyber-résilience en s’appuyant sur les meilleures fonctionnalités de sécurité, restauration et liberté des données.</p>
            </section>

            <section className="bg-white px-10 py-14 max-sm:px-6 max-sm:py-10">
              <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-12">
                {[
                  ["Sécurité des données", "Protection multicouche conçue pour apporter une tranquillité d’esprit dans l’ensemble du cloud hybride."],
                  ["Restauration des données", "Restauration rapide et fiable, où et quand vous en avez besoin."],
                  ["Liberté des données", "Protégez l’ensemble de vos données : partout, comme bon vous semble et sans aucune dépendance."],
                ].map(([title, text]) => (
                  <article className="mx-auto flex max-w-[320px] flex-col items-center text-center" key={title}>
                    <span className="relative grid h-32 w-32 place-items-center rounded-full border border-[#8eeac0] bg-[#f9fffc] text-[#00c950] shadow-[0_10px_24px_rgba(0,201,80,.14)]">
                      <FileText size={51} strokeWidth={2.4} aria-hidden="true" />
                      <RotateCcw size={27} strokeWidth={2.8} className="absolute bottom-[29px] right-[27px] bg-[#f9fffc]" aria-hidden="true" />
                    </span>
                    <h3 className="mt-7 text-[1.35rem] font-medium leading-tight text-dark">{title}</h3>
                    <p className="mt-3 text-base leading-[1.55] text-dark">{text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="relative isolate overflow-hidden bg-[#59636e] px-4 py-10 text-white max-sm:px-3 max-sm:py-6">
              <div className="pointer-events-none absolute bottom-[-88px] right-[-38px] -z-10 h-[310px] w-[600px] opacity-[.09] [background-image:linear-gradient(135deg,transparent_0_44%,white_44%_48%,transparent_48%_58%,white_58%_62%,transparent_62%),linear-gradient(45deg,transparent_0_44%,white_44%_48%,transparent_48%_58%,white_58%_62%,transparent_62%)] [background-size:140px_140px]" />
              <div className="grid min-h-[310px] grid-cols-[1.05fr_.95fr] gap-10 max-md:grid-cols-1 max-md:gap-9">
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="font-sans text-[clamp(2.7rem,4.4vw,4.1rem)] font-normal leading-none tracking-[-.025em]">Veeam Data Platform</h2>
                    <p className="mt-6 max-w-[560px] text-[clamp(1.25rem,2.1vw,1.9rem)] leading-[1.35] tracking-[.025em]">Assurez la résilience dans un monde de cybermenaces</p>
                  </div>
                  <a className="mt-10 inline-flex w-fit items-center border-2 border-white px-8 py-3 text-sm font-semibold uppercase transition hover:bg-white hover:text-[#59636e]" href="https://www.veeam.com/" target="_blank" rel="noreferrer">Découvrir le produit</a>
                </div>
                <ul className="flex flex-col justify-center gap-5 text-[clamp(1.15rem,1.8vw,1.55rem)] leading-tight">
                  {["Inaltérabilité éprouvée", "Cyber-résilience", "Optimisation pour le cloud hybride"].map((item) => <li className="flex items-center gap-4" key={item}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-[#00d768] text-[#00d768]"><Check size={21} strokeWidth={2.6} aria-hidden="true" /></span>{item}</li>)}
                </ul>
              </div>
            </section>

            <section className="bg-[#fafafa] px-10 py-12 text-dark max-sm:px-6 max-sm:py-10">
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(340px,.95fr)] items-start gap-12 max-lg:grid-cols-1 max-lg:gap-9">
                <div>
                  <h2 className="max-w-[610px] font-sans text-[clamp(2.25rem,3.5vw,3.6rem)] font-normal leading-[1.22] tracking-[.015em] text-[#4e5964]">La sauvegarde est votre meilleure ligne de défense</h2>
                  <p className="mt-7 max-w-[620px] text-base leading-[1.65] text-[#3f4650]">Lorsque vos données sont altérées ou détruites, les sauvegardes constituent votre meilleure ligne de défense. Elles sont donc logiquement devenues la cible principale des cybercriminels, ce qui constitue une véritable menace pour votre activité et s’accompagne d’une triste réalité :</p>
                  <ul className="mt-8 max-w-[660px] space-y-4 pl-6 text-base leading-[1.6] text-[#4b535d] marker:text-[#59636e]">
                    <li>contrairement à une inondation ou un incendie, une personne malveillante vous prend activement pour cible ;</li>
                    <li>les attaques visent majoritairement les cibles de sauvegarde ;</li>
                    <li>une fois compromises, les sauvegardes sont totalement inutilisables.</li>
                  </ul>
                </div>
                <a className="group relative block bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,.16)] transition hover:-translate-y-1" href="https://wcs-veeamdataplatform-itexpertsbeninsarl.swcontentsyndication.com/sw/swchannel/CustomerCenter/documents/20360/243917/Veeam_Data_Platform_23H2_Update_Overview_FR.mp4" target="_blank" rel="noreferrer" aria-label="Découvrir Veeam Data Platform">
                  <div className="relative aspect-[16/10] overflow-hidden border border-black/5 bg-white p-8 max-sm:p-5">
                    <span className="relative isolate inline-flex overflow-hidden bg-[#00c94f] px-2 py-1 text-2xl font-medium leading-none tracking-[-.07em] text-white [clip-path:polygon(10%_0,100%_0,100%_72%,81%_100%,0_100%,0_31%)]"><span className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(135deg,transparent_0_42%,white_42%_47%,transparent_47%_100%)] [background-size:14px_14px]" /><span className="relative">veeam</span></span>
                    <div className="absolute bottom-9 left-8 z-10 max-sm:bottom-5 max-sm:left-5"><p className="max-w-[210px] text-[clamp(1.35rem,2.5vw,2.15rem)] font-bold leading-[.88] tracking-[-.055em] text-black">Veeam Data Platform</p><p className="mt-3 text-sm font-medium text-black/75">Overview</p></div>
                    <img src={highlightImage} alt="" className="pointer-events-none absolute bottom-7 right-7 h-[55%] w-auto object-contain max-sm:bottom-4 max-sm:right-4" />
                    <span className="absolute bottom-0 right-0 bg-[#4f5050] px-2 py-1 text-lg font-medium text-white">3:58 mins</span>
                    <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center border-2 border-[#aaa1ff] bg-white text-[#2600ff] transition group-hover:scale-110"><Play size={33} fill="currentColor" strokeWidth={0} aria-hidden="true" /></span>
                  </div>
                </a>
              </div>
            </section>

            <section className="bg-white px-10 py-12 text-[#252525] max-sm:px-6 max-sm:py-10">
              <h2 className="max-w-[1120px] font-sans text-[clamp(2.15rem,3.7vw,3.6rem)] font-normal leading-[1.38] tracking-[.035em] text-[#4e5964]">Sauvegarde sécurisée : un composant crucial de votre cyber-résilience</h2>
              <p className="mt-4 max-w-[1200px] text-base leading-[1.65] text-[#333]">La cyber-résilience est particulièrement importante face aux attaques par ransomware, car il est très compliqué de rétablir l’activité par la suite. Chez Service IT, nous accordons la priorité à la cyber-résilience. Nous nous assurons de tout mettre en œuvre pour sauvegarder et sécuriser les données afin que l’activité puisse reprendre après une attaque.</p>
              <div className="mt-12 grid grid-cols-4 gap-9 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10">
                {[
                  [86, "des entreprises ne parviennent pas à rétablir l’activité assez rapidement pour être pleinement productives"],
                  [76, "des entreprises déplorent des écarts entre la fréquence de sauvegarde des données et la perte de données acceptable"],
                  [85, "des entreprises ont subi au moins une attaque par ransomware l’année dernière"],
                  [75, "des victimes ont déclaré que leurs cibles de sauvegarde avaient été touchées"],
                ].map(([value, text]) => (
                  <article className="mx-auto w-full max-w-[240px]" key={value}>
                    <div className="mx-auto grid h-48 w-48 place-items-center rounded-full p-[10px]" style={{ background: `conic-gradient(#f3263d 0 ${value}%, #b5b5b7 ${value}% 100%)` }}>
                      <div className="grid h-full w-full place-items-center rounded-full bg-white"><span className="text-[4.6rem] font-bold leading-none tracking-[-.08em]">{value}<small className="text-[2.25rem] tracking-[-.06em]">%</small></span></div>
                    </div>
                    <p className="mt-7 text-base leading-[1.62] text-[#333]">{text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-12 flex justify-center"><a className="button-primary inline-flex items-center justify-center px-7 py-3 text-sm font-medium transition" href="https://wcs-veeamdataplatform-itexpertsbeninsarl.swcontentsyndication.com/sw/swchannel/registration/internet/registration.cfm?RegPageID=7170219&traffictype=Direct#form2" target="_blank" rel="noreferrer">Recevoir le rapport sur les tendances</a></div>
            </section>
          </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-white px-6 py-20 max-sm:px-[18px] max-sm:py-16">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-12 max-md:flex-col max-md:items-start">
          <div className="relative italic py-1 pl-8 before:absolute before:bottom-1 before:left-0 before:top-1 before:w-1 before:origin-center before:rotate-[5deg] before:bg-primary max-sm:pl-6">
            <h2 className="max-w-[620px] font-display text-[clamp(2.5rem,4vw,4.3rem)] font-semibold italic leading-[.95] tracking-[-.045em] text-dark">
              Un projet à équiper ou à sécuriser ?
            </h2>
            <p className="mt-5 max-w-[690px] text-base leading-[1.75] text-dark">
              Parlons de vos besoins et identifions les solutions les plus
              adaptées à votre organisation.
            </p>
          </div>
          <Link
            className="button-primary group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg px-6 text-sm font-bold transition"
            to="/contact"
          >
            Demander un devis
            <MoveRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
