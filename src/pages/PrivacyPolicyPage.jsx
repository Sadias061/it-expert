const privacySections = [
  {
    title: "Données collectées",
    content:
      "Lorsque vous utilisez le formulaire de contact, nous pouvons collecter votre nom, votre adresse e-mail professionnelle, votre numéro de téléphone, le nom de votre entreprise, le sujet de votre demande et le contenu de votre message.",
  },
  {
    title: "Finalités du traitement",
    content:
      "Ces données sont utilisées uniquement pour répondre à votre demande, vous recontacter au sujet de nos services, assurer le suivi de nos échanges et améliorer la qualité de notre accompagnement.",
  },
  {
    title: "Base légale",
    content:
      "Le traitement de vos données repose sur votre consentement, exprimé lorsque vous nous contactez, ainsi que sur notre intérêt légitime à répondre à vos demandes professionnelles.",
  },
  {
    title: "Destinataires et conservation",
    content:
      "Les données sont accessibles uniquement aux équipes habilitées de IT Experts Africa et à ses prestataires techniques nécessaires au fonctionnement du site et au traitement des demandes. Elles sont conservées pendant la durée nécessaire au suivi de votre demande et aux obligations légales applicables.",
  },
  {
    title: "Cookies",
    content:
      "Le site peut utiliser des cookies strictement nécessaires à son fonctionnement. Les fonctionnalités optionnelles, telles que la messagerie, ne sont activées qu’après votre consentement lorsque celui-ci est requis.",
  },
  {
    title: "Vos droits",
    content:
      "Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou l’opposition au traitement de vos données, dans les limites prévues par la réglementation applicable. Pour exercer vos droits, contactez-nous à contact@itexpertsafrica.com.",
  },
  {
    title: "Mise à jour de la politique",
    content:
      "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur ce site et prendront effet dès leur publication.",
  },
  {
    title: "Nous contacter",
    content: (
      <>
        Pour toute question concernant cette politique ou vos données
        personnelles, écrivez-nous à{" "}
        <a
          className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition hover:text-primary-hover"
          href="mailto:contact@itexpertsafrica.com"
        >
          contact@itexpertsafrica.com
        </a>
        .
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-page px-6 pb-14 pt-[155px] max-sm:px-[18px] max-sm:pb-12 max-sm:pt-[125px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="mb-5 text-xs font-bold italic uppercase tracking-[.18em] text-primary">
            Protection des données
          </p>
          <h1 className="max-w-[900px] font-display italic text-[clamp(3.3rem,6vw,6rem)] font-semibold leading-[.88] tracking-[-.06em] text-dark">
            Politique de{" "}
            <em className="font-normal text-primary">confidentialité</em>
          </h1>
          <div className="mt-7 h-px w-14 bg-primary" />
          <p className="mt-5 max-w-[680px] text-base leading-[1.8] text-muted">
            Comment IT Experts Africa traite les données personnelles collectées
            via ce site.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-gray-100 px-6 py-16 max-sm:px-[18px] max-sm:py-12">
        <div className="mx-auto w-full max-w-[850px]">
          {privacySections.map(({ title, content }, index) => (
            <article
              className={index ? "border-t border-border pt-8" : ""}
              key={title}
            >
              <h2 className="font-display text-[clamp(2.5rem,4vw,3.4rem)] font-semibold leading-[.95] tracking-[-.045em]">
                {title}
              </h2>
              <div className="mt-4 max-w-[800px] leading-[1.85]">{content}</div>
              {index < privacySections.length - 1 ? (
                <div className="h-8" />
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
