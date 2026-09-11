import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const commitments = [
  [ShieldCheck, "Sécurité par conception"],
  [UsersRound, "Support humain et réactif"],
  [CheckCircle2, "Solutions pensées pour durer"],
  [Gauge, "Pilotage clair et transparent"],
];

export default function Index() {
  return (
    <>
      <Hero />

      <section className="bg-secondary px-6 py-5 text-white max-sm:px-3 max-sm:py-4">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-lg:gap-x-4 max-lg:gap-y-3 max-sm:grid-cols-1 max-sm:gap-2">
          {commitments.map(([Icon, label]) => (
            <div
              className="flex items-center gap-3 text-left text-sm font-bold max-lg:bg-transparent max-lg:px-0 max-lg:py-0"
              key={label}
            >
              <Icon size={18} className="shrink-0" />
              <span className="leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="h-16 bg-[#fff] max-sm:h-10" aria-hidden="true" />
    </>
  );
}
