import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid min-h-[75vh] place-content-center gap-4 px-6 py-32">
      <p className="mb-0 text-xs font-bold uppercase tracking-[.15em] text-primary">404</p>
      <h1 className="mb-3 font-display text-6xl font-semibold text-navy">Cette page n’existe pas.</h1>
      <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-transparent bg-primary px-5 text-sm font-bold text-white transition hover:bg-primary-dark" to="/">
        Retour à l’accueil
      </Link>
    </main>
  );
}
