import {
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  LoaderCircle,
  Mail,
  Phone,
  SendHorizontal,
  X,
  Youtube,
  Loader,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Toast from "./Toast";

const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-normal text-text outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/10";

const socialLinks = [
  [Facebook, "Facebook"],
  [Linkedin, "LinkedIn"],
  [Instagram, "Instagram"],
  [Youtube, "YouTube"],
];

const subjectOptions = [
  "Infogérance",
  "Cybersécurité",
  "Projet Cloud",
  "Projet d'infrastructures",
  "Sauvegarde et reprise d'activité",
  "Audit gratuit",
  "Formation",
  "Autre",
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const subjectRef = useRef(null);
  const subjectSheetRef = useRef(null);

  const selectSubject = (option) => {
    setSelectedSubject(option);
    setSubjectOpen(false);
  };

  const renderSubjectOptions = (itemClassName) =>
    subjectOptions.map((option) => {
      const active = selectedSubject === option;

      return (
        <li key={option} role="option" aria-selected={active}>
          <button
            type="button"
            className={`flex w-full items-center justify-between gap-3 text-left text-sm font-normal transition-colors duration-150 ${itemClassName} ${
              active
                ? "bg-soft text-primary"
                : "text-text hover:bg-soft/70 hover:text-dark"
            }`}
            onClick={() => selectSubject(option)}
          >
            <span className="min-w-0 flex-1 leading-snug">{option}</span>
            {active ? (
              <Check size={16} className="shrink-0 text-primary" />
            ) : null}
          </button>
        </li>
      );
    });

  useEffect(() => {
    if (!subjectOpen) return undefined;

    const handleClickOutside = (event) => {
      const target = event.target;
      const insideTrigger = subjectRef.current?.contains(target);
      const insideSheet = subjectSheetRef.current?.contains(target);

      if (!insideTrigger && !insideSheet) {
        setSubjectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [subjectOpen]);

  useEffect(() => {
    if (!subjectOpen) return undefined;

    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [subjectOpen]);

  useEffect(() => {
    if (!toast.visible) return undefined;

    const timeout = window.setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);

    return () => window.clearTimeout(timeout);
  }, [toast.visible]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setLoading(false);
      setToast({ visible: true, message: "Veuillez renseigner votre nom." });
      return;
    }

    setLoading(true);
    setToast({ visible: false, message: "" });

    window.setTimeout(() => {
      setLoading(false);
      setToast({
        visible: true,
        message:
          "Votre demande a bien été envoyée. Nous revenons vers vous rapidement.",
      });
      form.reset();
      setSelectedSubject("");
    }, 1400);
  };

  return (
      <>
        <Toast
          visible={toast.visible}
          message={toast.message}
          onClose={() => setToast({ visible: false, message: "" })}
        />

        <div className="h-full">
          <form
            className="flex h-full w-full flex-col gap-4 rounded-2xl p-8 shadow-panel max-sm:p-4"
            onSubmit={handleSubmit}
          >
            <label className="flex min-w-0 flex-col gap-2 text-sm font-bold text-dark">
              <span className="inline-flex items-center gap-1">
                Nom et prénom <span className="text-secondary">*</span>
              </span>
              <input
                className={fieldClass}
                required
                name="fullName"
                placeholder="Ex. Jean Dupont"
              />
            </label>

            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <label className="flex min-w-0 flex-col gap-2 text-sm font-bold text-dark">
                <span className="inline-flex items-center gap-1">
                  Email <span className="text-secondary">*</span>
                </span>
                <input
                  className={fieldClass}
                  required
                  type="email"
                  name="email"
                  placeholder="vous@entreprise.com"
                />
              </label>
              <label className="flex min-w-0 flex-col gap-2 text-sm font-bold text-dark">
                <span>Téléphone</span>
                <input
                  className={fieldClass}
                  type="tel"
                  name="phone"
                  placeholder="+229 01 42 30 04 71"
                />
              </label>
            </div>

            <div className="flex min-w-0 flex-col gap-2 text-sm font-bold text-dark">
              <span
                id="contact-subject-label"
                className="inline-flex items-center gap-1"
              >
                Sujet <span className="text-secondary">*</span>
              </span>
              <div className="relative" ref={subjectRef}>
                <button
                  type="button"
                  id="contact-subject"
                  className={`${fieldClass} relative w-full cursor-pointer pr-10 text-left ${
                    subjectOpen ? "border-primary ring-2 ring-primary/10" : ""
                  }`}
                  onClick={() => setSubjectOpen((value) => !value)}
                  aria-expanded={subjectOpen}
                  aria-haspopup="listbox"
                  aria-labelledby="contact-subject-label"
                >
                  <span
                    className={`block truncate ${selectedSubject ? "text-text" : "text-muted"}`}
                  >
                    {selectedSubject || "Sélectionnez un sujet"}
                  </span>
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text/60 transition-transform duration-200 ${
                      subjectOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {subjectOpen ? (
                  <div
                    role="listbox"
                    aria-labelledby="contact-subject-label"
                    className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 hidden overflow-hidden rounded-xl border border-border bg-page shadow-panel sm:block"
                  >
                    <ul className="max-h-72 overflow-y-auto overscroll-contain py-1.5 custom-scrollbar">
                      {renderSubjectOptions("px-4 py-2.5")}
                    </ul>
                  </div>
                ) : null}
              </div>

              {subjectOpen ? (
                <div
                  className="fixed inset-0 z-50 sm:hidden"
                  role="presentation"
                >
                  <button
                    type="button"
                    className="absolute inset-0 bg-dark/45 backdrop-blur-[1px]"
                    aria-label="Fermer la sélection de sujet"
                    onClick={() => setSubjectOpen(false)}
                  />
                  <div
                    ref={subjectSheetRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-subject-sheet-title"
                    className="absolute inset-x-0 bottom-0 flex max-h-[min(78vh,560px)] flex-col overflow-hidden rounded-t-[24px] border border-border bg-page shadow-[0_-20px_50px_rgba(11,31,58,0.18)]"
                  >
                    <div className="flex shrink-0 flex-col items-center border-b border-border px-5 pb-3 pt-3">
                      <span
                        aria-hidden="true"
                        className="mb-3 h-1 w-10 rounded-full bg-border"
                      />
                      <div className="flex w-full items-center justify-between gap-3">
                        <p
                          id="contact-subject-sheet-title"
                          className="text-base font-bold text-dark"
                        >
                          Choisir un sujet
                        </p>
                        <button
                          type="button"
                          aria-label="Fermer"
                          className="grid h-9 w-9 place-items-center rounded-full text-text/60 transition hover:bg-soft hover:text-text"
                          onClick={() => setSubjectOpen(false)}
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                    <ul
                      role="listbox"
                      aria-labelledby="contact-subject-sheet-title"
                      className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-2 custom-scrollbar pb-[max(0.75rem,env(safe-area-inset-bottom))]"
                    >
                      {renderSubjectOptions("px-5 py-3.5")}
                    </ul>
                  </div>
                </div>
              ) : null}
              <input
                type="hidden"
                name="subject"
                value={selectedSubject}
                required
              />
            </div>

            <label className="flex min-w-0 flex-1 flex-col gap-2 text-sm font-bold text-dark">
              <span className="inline-flex items-center gap-1">
                Votre message <span className="text-secondary">*</span>
              </span>
              <textarea
                className={`${fieldClass} min-h-[160px] flex-1 resize-y`}
                required
                name="message"
                placeholder="Décrivez votre contexte, vos priorités ou votre projet..."
              />
            </label>

            <div className="mt-auto flex items-center justify-end gap-4 max-sm:flex-col max-sm:items-start max-sm:justify-start">
              <button
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-secondary px-7 text-sm font-bold text-white transition hover:bg-secondary-hover disabled:cursor-not-allowed disabled:opacity-80 max-sm:w-full"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader
                      size={17}
                      className="animate-spin"
                      aria-label="Chargement"
                    />
                    <span>Envoi...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer ma demande</span>
                    <SendHorizontal
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </>
    );
}

export function ContactDetails() {
  return (
    <aside className="relative h-full overflow-hidden rounded-[26px] bg-dark p-8 text-white shadow-architecture max-sm:p-5">
      <div className="absolute inset-x-0 top-0 h-3 opacity-70 [background:repeating-linear-gradient(130deg,transparent_0_11px,rgba(113,160,255,.38)_11px_13px,transparent_13px_23px)]" />
      <div className="relative z-10 flex h-full flex-col justify-between gap-12 pt-2">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-none">
            Adresse
          </h2>
          <p className="mt-5 text-base leading-[1.65] text-white/75">
            Carré 3280, Agla Aklomey, Cotonou <br /> Bénin
          </p>
        </div>
        <div>
          <h2 className="font-display text-4xl font-semibold leading-none">
            Contact
          </h2>
          <div className="mt-5 flex flex-col gap-2 text-base text-white/75">
            <a
              className="transition hover:text-secondary"
              href="tel:++229 01 42 30 04 71"
            >
              <Phone size={16} className="mr-2 inline text-secondary" /> +229 01
              42 30 04 71
            </a>
            <a
              className="transition hover:text-secondary"
              href="mailto:support@itexpertsafrica.com"
            >
              <Mail size={16} className="mr-2 inline text-secondary" />{" "}
              support@itexpertsafrica.com
            </a>
            <a
              className="transition hover:text-secondary"
              href="mailto:sales@itexpertsafrica.com"
            >
              <Mail size={16} className="mr-2 inline text-secondary" />{" "}
              sales@itexpertsafrica.com
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-display text-4xl font-semibold leading-none">
            Horaires
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-white/75">
            Lundi au vendredi : 08h00 - 18h00
            <br />
            Support d'urgence 24/7 pour les clients sous contrat.
          </p>
        </div>
        <div>
          <h2 className="font-display text-4xl font-semibold leading-none">
            Restons connectés
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map(([Icon, label]) => (
              <a
                className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-white transition hover:-translate-y-1 hover:bg-secondary-hover"
                href="#"
                key={label}
                aria-label={label}
                onClick={(event) => event.preventDefault()}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-3 opacity-70 [background:repeating-linear-gradient(130deg,transparent_0_11px,rgba(113,160,255,.38)_11px_13px,transparent_13px_23px)]" />
    </aside>
  );
}
