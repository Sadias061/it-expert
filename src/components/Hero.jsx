import { ArrowRight, CheckCircle2, Layers, MoveRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dataProcessing from "../assets/imgs/data-processing.svg";

const heroFacts = [
  [ShieldCheck, "Sécurité par conception"],
  [CheckCircle2, "Support réactif"],
  [CheckCircle2, "Décisions lisibles"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-[165px] text-navy max-sm:px-3 max-sm:pb-16 max-sm:pt-[130px]">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(23,105,224,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(23,105,224,.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -right-36 -top-44 h-[620px] w-[620px] rounded-full border border-primary/10" />
      <div className="pointer-events-none absolute right-24 top-24 h-[360px] w-[360px] rounded-full border border-secondary/10 max-lg:right-[-100px]" />

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-[minmax(0,1fr)_minmax(390px,.82fr)] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <h1 className="max-w-[760px] font-display text-[clamp(3.8rem,7vw,7rem)] italic font-semibold leading-[.86] tracking-[-.065em] text-navy max-sm:max-w-[340px] max-sm:text-[clamp(3rem,13vw,4.5rem)] max-sm:leading-[.9]">
            Une informatique plus{" "}
            <em className="italic text-secondary">sûre, </em>
            plus <em className="italic text-primary">sereine.</em>
          </h1>
          <p className="mt-7 max-w-[570px] text-base leading-[1.8] text-muted">
            Nous sécurisons, structurons et faisons évoluer votre environnement
            numérique pour que vos équipes restent concentrées sur l’essentiel.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 max-sm:flex-col">
            <Link
              className="button-primary group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-bold transition"
              to="/contact"
            >
              Demander un audit{" "}
              <MoveRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              className="button-secondary inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl px-6 text-sm font-bold transition"
              to="/services"
            >
              Découvrir nos services
              <Layers size={18} className="animate-bounce" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative flex min-h-[440px] items-center justify-center max-lg:mx-auto max-lg:min-h-0 max-lg:w-full max-lg:max-w-[620px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.16, duration: 0.7 }}
        >
          <div className="absolute h-[390px] w-[390px] rounded-full bg-soft/80 max-sm:h-[280px] max-sm:w-[280px]" />
          <div className="absolute h-[440px] w-[440px] rounded-full border border-primary/10 max-sm:h-[320px] max-sm:w-[320px]" />
          <motion.span
            className="absolute left-[15%] top-[18%] h-3 w-3 rounded-full bg-secondary shadow-[0_0_0_7px_rgba(255,90,31,.10)]"
            animate={{
              x: [0, 10, 0],
              y: [0, -13, 0],
              opacity: [0.45, 1, 0.45],
            }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute right-[16%] top-[27%] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(0,194,255,.12)]"
            animate={{ x: [0, -9, 0], y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.span
            className="absolute bottom-[19%] left-[22%] h-2 w-2 rounded-full bg-primary"
            animate={{
              x: [0, -8, 0],
              y: [0, 10, 0],
              opacity: [0.35, 0.9, 0.35],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.span
            className="absolute bottom-[24%] right-[20%] h-3 w-3 rounded-full bg-secondary/80"
            animate={{
              x: [0, 8, 0],
              y: [0, -9, 0],
              opacity: [0.35, 0.95, 0.35],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <motion.span
            className="absolute right-[8%] top-[48%] h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ x: [0, -6, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.3,
            }}
          />
          <img
            className="relative z-10 block h-auto w-[92%] max-w-[580px] max-sm:w-[106%]"
            src={dataProcessing}
            alt="Illustration d'une infrastructure informatique et de données"
          />
        </motion.div>
      </div>
    </section>
  );
}
