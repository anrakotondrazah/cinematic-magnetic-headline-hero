import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = ["Work", "Studio", "Process", "Journal", "Contact"];
const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 sm:px-7 py-5 transition-opacity duration-[600ms] delay-200 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Primary"
      >
        <a href="#" className={`flex items-center rounded-full ${FOCUS}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" className="text-cream" />
            <circle cx="12" cy="12" r="5" fill="currentColor" className="text-copper" />
          </svg>
          <span className="ml-2 font-fraunces text-cream text-lg">Halcyon°</span>
        </a>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-cream/10 backdrop-blur-md border border-cream/15 rounded-full px-2 py-1.5 items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l}
              type="button"
              className={`px-4 py-1.5 rounded-full text-sm font-medium text-cream/75 hover:bg-cream/15 hover:text-cream transition-colors ${FOCUS}`}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={`hidden md:inline-flex bg-cream text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-copper hover:text-cream transition-colors ${FOCUS}`}
        >
          Book a call
        </button>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className={`md:hidden ml-auto w-9 h-9 rounded-full bg-cream/10 backdrop-blur-md border border-cream/15 flex items-center justify-center text-cream ${FOCUS}`}
        >
          <Menu size={18} />
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-[110] bg-ink/95 backdrop-blur-xl flex flex-col px-5 py-5 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between">
            <span className="font-fraunces text-cream text-lg">Halcyon°</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className={`w-9 h-9 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center text-cream ${FOCUS}`}
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2">
            {LINKS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setOpen(false)}
                className={`text-left font-fraunces text-5xl text-cream py-2 hover:text-copper transition-colors ${FOCUS}`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className={`bg-cream text-ink text-sm font-semibold px-5 py-3.5 rounded-full hover:bg-copper hover:text-cream transition-colors ${FOCUS}`}
          >
            Book a call
          </button>
        </div>
      )}
    </>
  );
}
