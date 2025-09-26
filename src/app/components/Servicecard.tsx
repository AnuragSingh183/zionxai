import { Check } from "lucide-react";

export default function ServiceCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="glass rounded-2xl p-6 hover:shadow-glow transition group">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-white/75">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Check className="h-4 w-4 text-brand-400 mt-1" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
