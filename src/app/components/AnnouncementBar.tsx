import { ArrowRight, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <a
      href="https://stockscowboy.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Stockscowboy.com — our newest project"
      className="group relative block w-full overflow-hidden border-b border-white/10
                 bg-gradient-to-r from-brand-700/40 via-brand-500/30 to-brand-700/40
                 backdrop-blur-md transition hover:from-brand-600/50 hover:via-brand-400/40 hover:to-brand-600/50"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px
                   bg-gradient-to-r from-transparent via-brand-300/80 to-transparent"
      />

      <div className="section-left py-2.5 flex items-center justify-center gap-3 text-sm md:text-base">
        <span
          className="inline-flex items-center gap-1.5 rounded-full
                     bg-brand-500/20 px-2.5 py-0.5 text-[11px] md:text-xs font-semibold
                     uppercase tracking-wider text-brand-200 ring-1 ring-inset ring-brand-400/40"
        >
          <Sparkles className="h-3 w-3" />
          New
        </span>

        <span className="truncate text-white/90">
          Check out our newest project —{" "}
          <span className="font-semibold text-white">Stockscowboy</span>
          <span className="hidden sm:inline text-white/70">
            : AI-powered insights for traders
          </span>
        </span>

        <span
          className="inline-flex shrink-0 items-center gap-1 font-medium text-brand-200
                     transition group-hover:text-white group-hover:gap-2"
        >
          Visit
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
