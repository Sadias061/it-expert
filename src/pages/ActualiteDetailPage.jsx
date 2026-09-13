import { MoveLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getActualite } from "../data/actualites";
import relaxedReading from "../assets/imgs/relaxed-reading.svg";

export default function ActualiteDetailPage() {
  const { slug } = useParams();
  const actualite = getActualite(slug);

  if (!actualite) return <Navigate to="/actualites" replace />;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-page px-6 pb-10 pt-[150px] text-navy max-sm:px-[18px] max-sm:pb-[68px] max-sm:pt-[130px]">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(rgba(23,105,224,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(23,105,224,.05)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(0,1fr)_minmax(320px,.72fr)] items-center gap-12 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <Link
              className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-hover"
              to="/actualites"
            >
              <MoveLeft
                size={17}
                className="transition-transform group-hover:-translate-x-1"
              />
              Retour aux actualités
            </Link>
            <p className="mt-14 text-xs font-bold uppercase italic tracking-[.16em] text-secondary">
              {actualite.category}
            </p>
            <h1 className="mt-5 max-w-[780px] font-display text-[clamp(3.2rem,6.2vw,6.2rem)] font-semibold italic leading-[.88] tracking-[-.06em] text-navy">
              {actualite.title}
            </h1>
            <p className="mt-8 max-w-[680px] text-base leading-[1.85] text-muted">
              {actualite.excerpt}
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[520px] max-lg:order-first max-lg:mb-2">
            <img
              className="relative z-10 block h-auto w-full"
              src={relaxedReading}
              alt="Illustration d’une personne lisant paisiblement"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 max-sm:px-[18px] max-sm:py-[70px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <article className="max-w-none">
            {actualite.sections.map(({ title, paragraphs }) => (
              <section className="mb-12 last:mb-0" key={title}>
                <h2 className="font-display text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[.95] tracking-[-.035em] text-navy">
                  {title}
                </h2>
                <div className="mt-5 grid gap-4 text-base leading-[1.85] text-muted">
                  {paragraphs.map((paragraph) => (
                    <p className="m-0" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
