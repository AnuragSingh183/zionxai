import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  desc,
  image,
  href,              // optional link
  external = false,  // open in new tab if true
}: {
  title: string;
  desc: string;
  image: string;
  href?: string;
  external?: boolean;
}) {
  const CardInner = (
    <article
      className="group relative overflow-hidden rounded-xl border border-white/10
                 bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06]
                 hover:shadow-[0_0_40px_rgba(30,140,255,0.25)] focus:outline-none"
      aria-label={href ? `${title} (opens ${external ? "in new tab" : "project"})` : title}
    >
      {/* Image */}
      <div className="relative aspect-[16/10]">
        <Image
          src={image}
          alt={`${title} cover`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      </div>

      {/* Caption overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-base md:text-lg font-semibold leading-snug">{title}</h3>
        <p className="text-[12px] md:text-sm text-white/75 mt-1">{desc}</p>
      </div>
    </article>
  );

  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
      >
        {CardInner}
      </a>
    ) : (
      <Link
        href={href}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
      >
        {CardInner}
      </Link>
    );
  }

  return CardInner;
}
