// Server Component – fetches public repos for the profile and shows the latest ones.
import { ArrowUpRight, Star, Code2 } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

const GH_USER = "colleybrb"; // <-- your profile

async function getRepos(): Promise<Repo[]> {
  const headers: Record<string, string> = { "User-Agent": "ZionXAI-website" };
  // Optional token to avoid low rate limits in prod (no special scopes needed):
  // Add GITHUB_TOKEN=ghp_xxx in .env.local
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(
    `https://api.github.com/users/${GH_USER}/repos?sort=updated&per_page=6`,
    { headers, next: { revalidate: 60 * 10 } } // revalidate every 10 minutes
  );

  if (!res.ok) {
    // graceful fallback if rate-limited etc.
    return [];
  }
  return (await res.json()) as Repo[];
}

export default async function GithubShowcase() {
  const repos = await getRepos();

  // Optional curated fallback if API fails:
  const fallback: Repo[] = [
    // replace html_url with actual repo URLs if you like
    { id: 1, name: "Metro Classic", html_url: "https://github.com/colleybrb", description: "Ticketing + live analytics", stargazers_count: 0, language: "TypeScript" },
    { id: 2, name: "BasketballisFUN", html_url: "https://www.basketballisfun.co/", description: "Community + AI highlights", stargazers_count: 0, language: "Next.js" },
    { id: 3, name: "Cre8tors", html_url: "https://github.com/colleybrb", description: "Marketplace + AI compliance", stargazers_count: 0, language: "Node.js" },
    { id: 4, name: "FDNS Construction", html_url: "https://github.com/colleybrb", description: "Field ops + security hardening", stargazers_count: 0, language: "React" },
  ];

  const list = repos.length ? repos : fallback;

  return (
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((r) => (
        <a
          key={r.id}
          href={r.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block rounded-xl border border-white/10 bg-white/[0.03]
                     p-5 transition-all duration-300 hover:bg-white/[0.06]
                     hover:shadow-[0_0_40px_rgba(30,140,255,0.25)]"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base md:text-lg font-semibold leading-snug break-words">
              {r.name}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-white/60 group-hover:text-brand-400 shrink-0" />
          </div>

          <p className="text-sm text-white/70 mt-2 line-clamp-3">
            {r.description ?? "No description provided."}
          </p>

          <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              {r.stargazers_count}
            </span>
            {r.language && (
              <span className="inline-flex items-center gap-1">
                <Code2 className="h-3.5 w-3.5 text-white/60" />
                {r.language}
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
