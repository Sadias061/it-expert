import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <button className={`fixed bottom-5 right-5 z-50 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-footer-blue text-white shadow-lg shadow-footer-blue/25 transition-[transform,opacity,visibility,background-color] duration-300 ease-out hover:-translate-y-1 hover:bg-dark max-sm:bottom-4 max-sm:right-4 ${visible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-14 opacity-0"}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Retour en haut" title="Retour en haut" tabIndex={visible ? 0 : -1}><ArrowUp size={17} /></button>;
}
