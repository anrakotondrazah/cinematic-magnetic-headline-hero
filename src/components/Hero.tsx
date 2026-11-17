import { ArrowUpRight } from "lucide-react";
import MagneticWord from "./MagneticWord";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink" style={{ height: "100dvh" }}>
      {/* 1. Background */}
      <div
        role="img"
        aria-label="Misty valley with pine trees at dusk, the sky glowing amber"
        className="anim-breathe absolute inset-0 z-10 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* 2. Atmospheric overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-ink/35">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/85" />
      </div>

      {/* 3. Grain */}
      <svg
        className="absolute inset-0 z-[25] w-full h-full pointer-events-none mix-blend-overlay opacity-[0.35]"
        aria-hidden="true"
      >
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* 4. Wordmark */}
      <div className="absolute top-[20%] left-0 right-0 z-40 flex justify-center pointer-events-none">
        <h1
          aria-label="Halcyon"
          className="font-fraunces font-medium text-cream text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[13vw] xl:text-[12vw]"
          style={{ letterSpacing: "-0.045em", lineHeight: 0.9 }}
        >
          <MagneticWord
            text="Halcyon"
            suffix={
              <span
                aria-hidden="true"
                className="absolute top-[0.15em] -right-[0.1em] text-[0.2em] text-copper"
              >
                °
              </span>
            }
          />
        </h1>
      </div>

      {/* 5. Sub-headline */}
      <div className="absolute top-[calc(20%+14vw)] sm:top-[calc(20%+12vw)] left-0 right-0 z-40 flex justify-center px-5 pointer-events-none">
        <p
          className="anim-fade-up font-fraunces italic font-normal text-cream/70 text-base sm:text-xl md:text-2xl text-center"
          style={{ animationDelay: "1.1s" }}
        >
          An independent studio crafting work that lasts.
        </p>
      </div>

      {/* 6. Bottom-left descriptor */}
      <div
        className="anim-fade-up hidden sm:block absolute bottom-12 left-10 md:left-14 max-w-[280px] z-40"
        style={{ animationDelay: "1.35s" }}
      >
        <p className="text-sm text-cream/60 leading-relaxed">
          We build identities, websites and brand systems for ambitious companies. Considered work, made slowly, shipped boldly.
        </p>
      </div>

      {/* 7. Bottom-right CTA */}
      <div
        className="anim-fade-up absolute bottom-10 sm:bottom-12 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[280px] z-40 flex flex-col items-start gap-4"
        style={{ animationDelay: "1.5s" }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-cream/40">BOOKING SUMMER '26</p>
        <button
          type="button"
          className="group inline-flex items-center bg-cream text-ink rounded-full pl-5 pr-1 py-1 text-sm font-medium hover:bg-copper hover:text-cream transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
        >
          Start a project
          <span className="w-9 h-9 rounded-full bg-copper flex items-center justify-center ml-3 transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={16} className="text-cream" />
          </span>
        </button>
      </div>
    </section>
  );
}
