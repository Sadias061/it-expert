const legalSections = [
  {
    title: "Éditeur du site",
    content: (
      <address className="not-italic">
        <strong className="font-medium text-dark">IT Experts Africa</strong>
        <span className="mt-1 block">
          Carré 3280, Agla Aklomey, Cotonou - Bénin
        </span>
        <a
          className="mt-1 block w-fit text-primary transition hover:text-primary-hover"
          href="tel:+2290142300471"
        >
          Téléphone : +229 01 42 30 04 71
        </a>
        <a
          className="mt-1 block w-fit text-primary transition hover:text-primary-hover"
          href="mailto:contact@itexpertsafrica.com"
        >
          E-mail : contact@itexpertsafrica.com
        </a>
      </address>
    ),
  },
  {
    title: "Directeur de la publication",
    content:
      "Le directeur de la publication est le représentant légal de IT Experts Africa.",
  },
  {
    title: "Hébergement",
    content: (
      <address className="not-italic">
        Ce site est hébergé par GoDaddy Operating Company, LLC.
        <span className="mt-1 block">
          2155 E. GoDaddy Way, Tempe, AZ 85284, États-Unis.
        </span>
      </address>
    ),
  },
  {
    title: "Propriété intellectuelle",
    content:
      "L’ensemble des contenus présents sur ce site, notamment les textes, éléments graphiques, logos, images et documents, est protégé par les lois applicables en matière de propriété intellectuelle. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation préalable écrite de IT Experts Africa est interdite.",
  },
  {
    title: "Responsabilité",
    content:
      "IT Experts Africa s’efforce de fournir des informations exactes et à jour. Toutefois, l’entreprise ne peut garantir l’exactitude, l’exhaustivité ou l’actualité de l’ensemble des informations publiées. L’utilisation du site se fait sous la responsabilité de l’utilisateur.",
  },
  {
    title: "Liens externes",
    content:
      "Le site peut contenir des liens vers des sites tiers. IT Experts Africa n’exerce aucun contrôle sur leur contenu et décline toute responsabilité quant aux informations, produits ou services proposés sur ces sites.",
  },
];

export default function LegalNoticePage() {
  return (
    <>
      <section className="bg-page px-6 pb-14 pt-[155px] max-sm:px-[18px] max-sm:pb-12 max-sm:pt-[125px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="mb-5 text-xs font-bold italic uppercase tracking-[.18em] text-primary">
            Informations légales
          </p>
          <h1 className="max-w-[900px] font-display text-[clamp(3.3rem,6vw,6rem)] font-semibold italic leading-[.88] tracking-[-.06em]">
            Mentions <em className="font-normal text-primary">légales</em>
          </h1>
          <div className="mt-7 h-px w-14 bg-primary" />
          <p className="mt-5 max-w-[680px] text-base leading-[1.8] text-muted">
            Informations relatives à l’éditeur du site itexpertsafrica.com.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-gray-100 px-6 py-16 max-sm:px-[18px] max-sm:py-12">
        <div className="mx-auto w-full max-w-[850px]">
          {legalSections.map(({ title, content }, index) => (
            <article
              className={index ? "border-t border-border pt-8" : ""}
              key={title}
            >
              <h2 className="font-display text-[clamp(2.5rem,4vw,3.4rem)] font-semibold leading-[.95] tracking-[-.045em]">
                {title}
              </h2>
              <div className="mt-4 max-w-[800px] leading-[1.85]">
                {content}
              </div>
              {index < legalSections.length - 1 ? <div className="h-8" /> : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
