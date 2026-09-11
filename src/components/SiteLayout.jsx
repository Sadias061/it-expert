import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackToTopButton from "./BackToTopButton";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 40);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function SiteLayout({ children }) {
  const { pathname } = useLocation();
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
  const hasSiteChrome = [
    "/",
    "/services",
    "/partenaires",
    "/a-propos",
    "/blog",
    "/carrieres",
    "/contact",
    "/mentions-legales",
  ].includes(normalizedPathname);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollManager />
      {hasSiteChrome ? <Navbar /> : null}
      <main>{children}</main>
      {hasSiteChrome ? (
        <>
          <Footer />
          <WhatsAppButton />
          <BackToTopButton />
        </>
      ) : null}
    </div>
  );
}
