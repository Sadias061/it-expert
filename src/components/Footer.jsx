import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.webp";
import Toast from "./Toast";

const socialLinks = [
  [Facebook, "Facebook"],
  [Linkedin, "LinkedIn"],
  [Instagram, "Instagram"],
  [Youtube, "YouTube"],
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [toastKey, setToastKey] = useState(0);

  useEffect(() => {
    if (!toastKey) return undefined;

    const timeoutId = window.setTimeout(() => setToastKey(0), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [toastKey]);

  const handleSubscription = (event) => {
    event.preventDefault();
    setEmail("");
    setToastKey((currentKey) => currentKey + 1);
  };

  return (
    <footer className="relative overflow-hidden bg-footer-blue text-white/80">
      <div className="absolute inset-x-0 top-0 h-[13px] opacity-60 [background:repeating-linear-gradient(130deg,transparent_0_11px,rgba(113,160,255,.38)_11px_13px,transparent_13px_23px)]" />

      <div className="mx-auto w-[calc(100%-48px)] max-w-[1280px] px-6 pb-[58px] pt-[72px] max-sm:w-full max-sm:px-[18px] max-sm:pb-12 max-sm:pt-[60px]">
        <div className="flex items-center justify-between gap-9 max-sm:flex-col max-sm:items-start">
          <h2 className="font-sans text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-none tracking-[-.065em] text-white">
            Parlons <span className="text-orange">IT</span> ensemble.
          </h2>
          <Link
            className="group inline-flex items-center gap-2 rounded-2xl bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-secondary-hover"
            to="/contact"
          >
            Nous contacter{" "}
            <MoveRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="my-[52px] h-px bg-white/20 max-sm:my-[38px]" />

        <div className="grid grid-cols-[1.35fr_.72fr_.98fr_1.35fr] gap-[50px] max-lg:grid-cols-2 max-lg:gap-x-8 max-lg:gap-y-[42px] max-sm:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-[38px]">
          <div className="max-w-[300px] max-lg:col-span-2 max-sm:col-span-full">
            <Link className="inline-flex items-center" to="/">
              <img className="h-16 w-auto" src={logo} alt="IT Experts Africa" />
            </Link>
            <p className="mt-[23px] text-sm leading-[1.7] text-white/70">
              Votre partenaire pour une informatique plus fiable, plus sûre et
              plus humaine.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(([Icon, label]) => (
                <a
                  className="grid h-[38px] w-[38px] place-items-center rounded-full border border-blue-300/25 bg-blue-400/20 text-white transition hover:-translate-y-1 hover:bg-orange hover:text-footer-blue"
                  href="#"
                  key={label}
                  aria-label={label}
                  onClick={(event) => event.preventDefault()}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3.5">
            <h3 className="mb-2.5 text-lg font-bold text-white">Navigation</h3>
            <Link className="text-sm text-white/75 hover:text-orange" to="/">
              Accueil
            </Link>
            <Link
              className="text-sm text-white/75 hover:text-orange"
              to="/a-propos"
            >
              À propos
            </Link>
            <Link
              className="text-sm text-white/75 hover:text-orange"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="text-sm text-white/75 hover:text-orange"
              to="/partenaires"
            >
              Partenaires
            </Link>
            <Link
              className="text-sm text-white/75 hover:text-orange"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-sm text-white/75 hover:text-orange"
              to="/carrieres"
            >
              Carrières
            </Link>
          </div>

          <div className="flex flex-col items-start gap-3.5">
            <h3 className="mb-2.5 text-lg font-bold text-white">Contact</h3>
            <a
              className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-orange"
              href="tel: +229 01 42 30 04 71"
            >
              <Phone size={16} className="text-orange" />  +229 01 42 30 04 71
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-orange"
              href="mailto:support@itexpertsafrica.com"
            >
              <Mail size={16} className="text-orange" />{" "}
              support@itexpertsafrica.com
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-white/75">
              <MapPin size={16} className="text-orange" /> Cotonou, Bénin
            </span>
          </div>

          <div className="max-sm:col-span-full">
            <h3 className="mb-2.5 text-lg font-bold text-white">
              Recevez nos actualités
            </h3>
            <p className="mb-5 text-sm leading-[1.65] text-white/70">
              Conseils, bonnes pratiques et nouveautés IT directement dans votre
              boîte mail.
            </p>
            <form
              className="flex h-[47px] w-full max-w-[320px] rounded-full bg-blue-400/30 pl-4"
              onSubmit={handleSubscription}
            >
              <input
                className="footer-email-input min-w-0 flex-1 border-0 bg-transparent text-sm text-white outline-none placeholder:text-white/75"
                type="email"
                required
                autoComplete="email"
                placeholder="Votre adresse email"
                aria-label="Votre adresse email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                className="grid h-[47px] w-12 shrink-0 place-items-center rounded-full border-0 bg-secondary text-white hover:bg-secondary-hover"
                type="submit"
                aria-label="S'inscrire"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Toast
        visible={Boolean(toastKey)}
        message="Merci, votre inscription est prise en compte."
        onClose={() => setToastKey(0)}
      />

      <div className="absolute inset-x-0 bottom-[72px] h-[13px] opacity-60 [background:repeating-linear-gradient(130deg,transparent_0_11px,rgba(113,160,255,.38)_11px_13px,transparent_13px_23px)] max-sm:bottom-[105px]" />
      <div className="bg-orange text-white">
        <div className="mx-auto flex w-[calc(100%-48px)] max-w-[1280px] items-center justify-between gap-6 px-6 py-[19px] text-sm max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:px-[18px] max-sm:py-[17px] max-sm:text-xs">
          <span>
            © {new Date().getFullYear()} IT Experts Africa. Tous droits
            réservés.
          </span>
          <span className="flex items-center gap-2">
            <Link to="/mentions-legales">Mentions légales</Link>
            <i className="h-[15px] w-px bg-white/75" />
            <a href="#" onClick={(event) => event.preventDefault()}>
              Politique de confidentialité
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
