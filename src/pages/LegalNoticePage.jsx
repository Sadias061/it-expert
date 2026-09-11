import { Building2, ExternalLink, Globe2, ShieldCheck } from "lucide-react";

const legalSections = [
  {
    icon: Building2,
    title: "Éditeur du site",
    content: (
      <address className="not-italic">
        <strong className="block text-dark">IT Experts Africa</strong>
        <span className="mt-2 block">Carré 3280, Agla Aklomey, Cotonou - Bénin</span>
        <a className="mt-2 block w-fit transition hover:text-primary" href="tel:+2290142300471">
          Téléphone : +229 01 42 30 04 71
        </a>
        <a className="mt-1 block w-fit transition hover:text-primary" href="mailto:contact@itexpertsafrica.com">
          E-mail : contact@itexpertsafrica.com
        </a>
      </address>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Directeur de la publication",
    content: "Le directeur de la publication est le représentant légal de IT Experts Africa.",
  },
  {
    icon: Globe2,
    title: "Hébergement",
    content: (
      <address className="not-italic">
        Ce site est hébergé par GoDaddy Operating Company, LLC.
        <span className="mt-2 block">2155 E. GoDaddy Way, Tempe, AZ 85284, États-Unis.</span>
      </address>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Propriété intellectuelle",
    content: "L’ensemble des contenus présents sur ce site, notamment les textes, éléments graphiques, logos, images et documents, est protégé par les lois applicables en matière de propriété intellectuelle. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation préalable écrite de IT Experts Africa est interdite.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilité",
    content: "IT Experts Africa s’efforce de fournir des informations exactes et à jour. Toutefois, l’entreprise ne peut garantir l’exactitude, l’exhaustivité ou l’actualité de l’ensemble des informations publiées. L’utilisation du site se fait sous la responsabilité de l’utilisateur.",
  },
  {
    icon: ExternalLink,
    title: "Liens externes",
    content: "Le site peut contenir des liens vers des sites tiers. IT Experts Africa n’exerce aucun contrôle sur leur contenu et décline toute responsabilité quant aux informations, produits ou services proposés sur ces sites.",
  },
];

export default function LegalNoticePage() {
  return (
    <>
      <section className="bg-page px-6 pb-16 pt-[155px] max-sm:px-[18px] max-sm:pb-12 max-sm:pt-[125px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-primary">
            Informations légales
          </p>
          <h1 className="max-w-[760px] font-display text-[clamp(3.3rem,6vw,6rem)] font-semibold leading-[.88] tracking-[-.06em] text-dark">
            Mentions <em className="not-italic text-secondary">légales.</em>
          </h1>
          <p className="mt-7 max-w-[680px] text-base leading-[1.8] text-muted">
            Informations relatives à l’éditeur du site itexpertsafrica.com.
          </p>
        </div>
      </section>

      <section className="bg-[#fff] px-6 py-20 max-sm:px-[18px] max-sm:py-14">
        <div className="mx-auto grid w-full max-w-[1280px] gap-5 md:grid-cols-2">
          {legalSections.map(({ icon: Icon, title, content }) => (
            <article
              className="rounded-2xl border border-border bg-page p-7 max-sm:p-6"
              key={title}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon size={21} aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-[2rem] font-semibold leading-none text-dark">
                {title}
              </h2>
              <div className="mt-4 text-sm leading-[1.8] text-muted">{content}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
