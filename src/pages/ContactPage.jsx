import { MoveRight } from "lucide-react";
import Contact, { ContactDetails } from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <section className="bg-page px-6 pb-16 pt-[150px] max-sm:px-3 max-sm:pb-12 max-sm:pt-[125px]">
        <div className="mx-auto w-full max-w-full text-center">
          <h1 className="mx-auto max-w-auto font-display text-[clamp(3.7rem,8vw,6.8rem)] font-semibold italic leading-[.86] tracking-[-.065em] text-dark max-lg:text-[clamp(3.2rem,8vw,5.8rem)] max-sm:text-[clamp(2.7rem,12vw,4.4rem)]">
            <span className="block whitespace-nowrap">Un projet en tête ?</span>
            <em className="block text-secondary">Parlons-en.</em>
          </h1>
        </div>
      </section>

      <section className="bg-page px-6 pb-28 max-sm:px-3 max-sm:pb-[78px]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(0,1fr)_minmax(320px,.68fr)] items-stretch gap-16 max-lg:grid-cols-1 max-lg:gap-10 max-sm:gap-6">
          <Contact form />
          <ContactDetails />
        </div>
      </section>

      <section className="border-t border-border bg-white px-6 pb-10 pt-2 max-sm:px-3 max-sm:pb-8">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mb-4 flex items-end justify-end max-sm:flex-col max-sm:items-start">
            <a
              className="group mt-2 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-hover"
              href="https://www.google.com/maps/search/?api=1&query=Cotonou%2C%20Benin"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir dans Google Maps{" "}
              <MoveRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
          <div className="h-[430px] overflow-hidden rounded-2xl bg-soft max-sm:h-[320px]">
            <iframe
              className="h-full w-full border-0 grayscale-[.25] contrast-[.95]"
              title="Localisation de IT Experts à Cotonou"
              src="https://www.google.com/maps?q=Cotonou%2C%20Benin&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
