import { useEffect, useState } from "react";
import { contactPhone, whatsappIntroMessage } from "../lib/contact";

const whatsappUrl = `https://wa.me/${contactPhone}?text=${encodeURIComponent(whatsappIntroMessage)}`;

export default function WhatsAppButton() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`group fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_7px_18px_rgba(37,211,102,0.32)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-1 hover:bg-[#1ebe5d] hover:shadow-[0_10px_24px_rgba(37,211,102,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] max-sm:bottom-4 max-sm:right-4 ${hasScrolled ? "-translate-x-14" : "translate-x-0"}`}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Échanger avec Service IT sur WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-current"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.54 0 .22 5.32.22 11.87c0 2.09.55 4.13 1.6 5.92L.12 24l6.36-1.67a11.85 11.85 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.87 0-3.17-1.23-6.15-3.43-8.4ZM12.09 21.7h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.85 9.85 0 0 1-1.51-5.17C2.19 6.43 6.62 2 12.08 2c2.64 0 5.12 1.03 6.98 2.9a9.81 9.81 0 0 1 2.89 6.99c0 5.46-4.43 9.81-9.86 9.81Zm5.4-7.36c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-footer-blue px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:hidden">
        Discuter sur WhatsApp
      </span>
      <span className="sr-only">Échanger sur WhatsApp</span>
    </a>
  );
}
