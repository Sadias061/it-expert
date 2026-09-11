import { CircleAlert, X } from "lucide-react";
import { createPortal } from "react-dom";

export default function Toast({ visible, message, onClose }) {
  if (!visible) return null;

  return createPortal(
    <div
      className="fixed right-6 top-6 z-50 flex w-[min(360px,calc(100vw-2rem))] items-start gap-3 rounded-2xl border border-border bg-white/95 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-sm"
      role="status"
      aria-live="polite"
    >
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
        <CircleAlert size={17} />
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-sm font-medium leading-5 text-dark">{message}</p>
      </div>
      <button
        type="button"
        aria-label="Fermer le message"
        className="ml-1 mt-0.5 text-lg leading-none text-text/60 transition hover:text-text"
        onClick={onClose}
      >
        <X size={18} />
      </button>
    </div>,
    document.body,
  );
}
