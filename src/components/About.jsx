import { ArrowRight, CheckCircle2, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dataReports from "../assets/imgs/data-reports.svg";

const values = [
  [HeartHandshake, "Une relation de confiance", "Un interlocuteur qui connaît votre environnement et parle le langage de vos équipes."],
  [CheckCircle2, "Des décisions éclairées", "Des recommandations compréhensibles, priorisées et reliées à vos enjeux métier."],
  [Sparkles, "Une amélioration continue", "Des bases saines aujourd’hui pour une informatique capable d’évoluer demain."],
];

export default function About({ preview = false }) {
  return (
    <section id={preview ? "about" : undefined} className="bg-white px-6 py-28 max-sm:px-[18px] max-sm:py-[78px]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[1fr_.82fr] items-center gap-20 max-lg:grid-cols-1 max-lg:gap-12">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-primary">Notre approche</p>
          <h2 className="max-w-[750px] font-display text-[clamp(2.9rem,5vw,5rem)] font-semibold leading-[.9] tracking-[-.045em] text-dark">La proximité d’un partenaire, l’exigence d’un <em className="not-italic text-primary">expert.</em></h2>
          <p className="mt-6 max-w-[610px] text-base leading-[1.8] text-muted">Nous ne cherchons pas à ajouter de la complexité. Nous mettons de l’ordre, de la visibilité et de la sécurité dans votre environnement IT.</p>
          {preview ? <Link className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-hover" to="/a-propos">Découvrir Service IT <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" /></Link> : null}
        </div>
        <div className="relative rounded-[26px] bg-soft p-5 max-sm:p-3">
          <img className="block w-full" src={dataReports} alt="Illustration du pilotage et des données" />
          <span className="absolute -bottom-4 -left-5 rounded-full bg-secondary px-4 py-2 text-xs font-bold text-white shadow-lg max-sm:-left-2">Des choix lisibles</span>
        </div>
      </div>
      <div className="mx-auto mt-20 grid w-full max-w-[1280px] grid-cols-3 gap-5 max-md:grid-cols-1">
        {values.map(([Icon, title, description], index) => (
          <motion.article className="rounded-2xl border border-border border-t-4 border-t-secondary bg-page p-7" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
            <Icon size={24} className="text-primary" />
            <h3 className="mb-2 mt-9 font-display text-[1.9rem] font-semibold leading-none text-dark">{title}</h3>
            <p className="m-0 text-sm leading-[1.75] text-muted">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
