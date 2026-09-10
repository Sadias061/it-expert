import { ArrowUpRight, Headset, Network, Route, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { number: "01", Icon: Headset, title: "Infogérance & Support IT", text: "Un support disponible et une informatique suivie au quotidien pour réduire les interruptions.", points: ["Support utilisateurs", "Supervision", "Gestion du parc"] },
  { number: "02", Icon: ShieldCheck, title: "Cybersécurité & Protection des données", text: "Une approche pragmatique pour réduire votre exposition aux risques et protéger vos données sensibles.", points: ["Audit et prévention", "Sauvegardes", "Sensibilisation"] },
  { number: "03", Icon: Network, title: "Infrastructure & Réseaux", text: "Des fondations fiables, performantes et dimensionnées pour les usages réels de votre organisation.", points: ["Réseaux", "Serveurs et cloud", "Accès sécurisés"] },
  { number: "04", Icon: Route, title: "Conseil & Transformation numérique", text: "Une vision claire pour faire évoluer vos outils, vos processus et votre manière de travailler.", points: ["Schéma directeur", "Choix de solutions", "Accompagnement"] },
];

export default function Services({ preview = false, page = false }) {
  return (
    <section id={preview ? "expertises" : "services"} className={`scroll-mt-20 px-6 py-28 max-sm:px-[18px] max-sm:py-[78px] ${page ? "bg-white" : "bg-page"}`}>
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-primary">Nos expertises</p>
            <h2 className="max-w-[760px] font-display text-[clamp(2.9rem,5vw,5.1rem)] font-semibold leading-[.9] tracking-[-.045em] text-dark">Un socle IT solide pour <em className="not-italic text-primary">avancer.</em></h2>
            <p className="mt-5 max-w-[610px] text-base leading-[1.8] text-muted">Des services concrets pour garder le contrôle de votre technologie, de vos données et de vos priorités.</p>
          </div>
          {preview ? <Link className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-primary transition hover:gap-3 hover:text-primary-hover" to="/services">Voir toutes nos expertises <ArrowUpRight size={17} /></Link> : null}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {services.map(({ number, Icon, title, text, points }, index) => (
            <motion.article className="group relative overflow-hidden rounded-2xl border border-border border-t-4 border-t-primary bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-panel max-sm:p-6" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[.15em] text-muted">{number}</span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-soft text-primary transition group-hover:bg-primary group-hover:text-white"><Icon size={21} /></span>
              </div>
              <h3 className="mt-8 max-w-[430px] font-display text-[2.25rem] font-semibold leading-[.92] text-dark">{title}</h3>
              <p className="mt-4 max-w-[500px] text-sm leading-[1.75] text-muted">{text}</p>
              <ul className="mt-6 flex flex-wrap gap-2 p-0">
                {points.map((point) => <li className="list-none rounded-full bg-soft px-3 py-1.5 text-[.68rem] font-bold text-primary" key={point}>{point}</li>)}
              </ul>
              <Link className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-primary transition hover:gap-3 hover:text-primary-hover" to={`/services#service-${number}`}>En savoir plus <ArrowUpRight size={16} /></Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { services };
