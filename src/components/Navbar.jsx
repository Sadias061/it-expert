import { ChartNoAxesGantt, MoveRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/imgs/logo.webp";

const navItems = [
  ["Accueil", "/"],
  ["À propos", "/a-propos"],
  ["Services", "/services"],
  ["Partenaires", "/partenaires"],
  ["Blog", "/blog"],
  ["Carrières", "/carrieres"],
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname, location.hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-visible border-b border-white/10 bg-footer-blue pt-[env(safe-area-inset-top)] text-white shadow-[0_3px_10px_rgba(6,27,97,0.16)] transition-shadow ${scrolled ? "shadow-[0_14px_35px_rgba(6,27,97,0.3)]" : ""}`}
    >
      <div className="relative mx-auto flex h-[82px] w-[calc(100%-48px)] max-w-[1280px] items-center justify-between max-sm:w-full max-sm:px-3">
        <Link
          className="group flex shrink-0 items-center"
          to="/"
          aria-label="Service IT, accueil"
        >
          <img
            className="h-16 w-auto max-sm:h-14"
            src={logo}
            alt="IT Expert"
          />
        </Link>
        <nav
          className={`${mobileOpen ? "flex" : "hidden"} absolute left-1/2 top-[82px] w-screen -translate-x-1/2 max-h-[calc(100vh-82px)] flex-col items-stretch gap-0 overflow-y-auto border-y border-white/15 bg-footer-blue px-5 pb-5 pt-2 shadow-xl shadow-footer-blue/30 xl:left-1/2 xl:right-auto xl:top-0 xl:h-[82px] xl:max-h-none xl:-translate-x-1/2 xl:flex xl:w-max xl:flex-row xl:items-center xl:gap-5 xl:overflow-visible xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none`}
          aria-label="Navigation principale"
        >
          {navItems.map(([label, to]) =>
            to.includes("#") ? (
              <Link
                key={to}
                className="relative py-3 text-sm text-white/65 transition-colors hover:text-white xl:py-[31px] xl:text-[.78rem]"
                to={to}
              >
                {label}
              </Link>
            ) : (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `relative py-3 text-sm transition-colors xl:py-[31px] xl:text-[.78rem] ${isActive ? "text-white after:absolute after:bottom-2 after:left-0 after:right-0 after:h-0.5 after:origin-left after:bg-orange after:content-[''] xl:after:bottom-[22px]" : "text-white/65 hover:text-white"}`
                }
              >
                {label}
              </NavLink>
            ),
          )}
          <Link
            className="group mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-bold text-white transition hover:bg-secondary-hover xl:hidden"
            to="/contact"
          >
            Demander un audit <MoveRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <Link
            className="group hidden items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-bold text-white transition hover:bg-secondary-hover xl:inline-flex"
            to="/contact"
          >
            Demander un audit <MoveRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <button
            className="grid h-10 w-10 shrink-0 place-items-center text-white transition xl:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <ChartNoAxesGantt size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
