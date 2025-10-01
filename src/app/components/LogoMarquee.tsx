"use client";
import Image from "next/image";

type Logo = { src: string; alt?: string };

export default function LogoMarquee({
  className = "",
  logos,
  speed = 28,     // seconds — lower = faster
  height = 72,    // logo height in px (auto width)
}: {
  className?: string;
  logos?: Logo[];
  speed?: number;
  height?: number;
}) {
  // Simple defaults — replace with your own filenames in /public/logos/
  const defaults: Logo[] = [
    { src: "/logos/fdns_logo.jpeg", alt: "FDNS Construction" },
    { src: "/logos/basketballisfun.png", alt: "BasketballisFUN" },
    { src: "/logos/cre8tors_tix.svg", alt: "Tix" },
    { src: "/logos/MetroClassic.png", alt: "Metro Classic" },
    { src: "/logos/Cre8tors_icon.png", alt: "Cre8tors" },
  ];
  const items = logos ?? defaults;

  // Duplicate the items for the seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Edge masks for a nice fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

      {/* Two rows, opposite directions */}
      <div className="group space-y-6">
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <ul
            className="marquee flex shrink-0 items-center gap-16 pr-16"
            style={{ animationDuration: `${speed}s` }}
          >
            {doubled.map((logo, i) => (
              <li key={`top-${i}`} className="flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt ?? "Client logo"}
                  width={200}
                  height={height}
                  className="h-14 md:h-16 lg:h-20 w-auto opacity-80 hover:opacity-100
                             transition-transform duration-300 hover:scale-[1.06]
                             drop-shadow-[0_0_16px_rgba(30,140,255,0.27)]"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2 (reverse) */}
        <div className="flex overflow-hidden">
          <ul
            className="marquee reverse flex shrink-0 items-center gap-16 pr-16"
            style={{ animationDuration: `${speed}s` }}
          >
            {doubled.map((logo, i) => (
              <li key={`bottom-${i}`} className="flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt ?? "Client logo"}
                  width={200}
                  height={height}
                  className="h-14 md:h-16 lg:h-20 w-auto opacity-80 hover:opacity-100
                             transition-transform duration-300 hover:scale-[1.06]
                             drop-shadow-[0_0_16px_rgba(30,140,255,0.27)]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: scroll linear infinite;
        }
        .marquee.reverse {
          animation-direction: reverse;
        }
        /* pause both rows on hover */
        .group:hover .marquee {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
