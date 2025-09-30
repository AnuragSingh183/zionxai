import Image from "next/image";
import { ArrowRight } from "lucide-react";
import LogoMarquee from "./components/LogoMarquee";
import ServiceCard from "./components/Servicecard";
import ProjectCard from "./components/Projectcard";
import GithubShowcase from "./components/GithubShowcase";


export default function Home() {
  return (
    <>
      {/* HERO */}
      
<section className="section-left pt-24 pb-20">
        <div className="max-w-3xl">
        <h1 className="headline font-display tracking-tight">
            AI, Cloud & Security built for <span className="text-brand-500">mid‑market</span> teams
          </h1>
          <p className="subhead">
            We design and ship production‑grade AI systems, modernize cloud, and harden security—fast.
            Strategy → MVP → scale.
          </p>
          
          <div className="mt-8 flex gap-4">
            <a href="https://outlook.office.com/book/ZionSystemsLLC@collspark.ai/%27>Schedule" className="btn">
              Book a free consult <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          
            <a href="#work" className="btn-outline">See our work</a>
          </div>
          {/* proof stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["< 12 weeks", "Avg. time to MVP"],
              ["30–60%", "Ops cost savings (cloud/automation)"],
              ["HIPAA/PCI", "Compliance-ready"],
              ["24/7", "Support options"],
            ].map(([k, v]) => (
              <div key={k} className="glass p-4 rounded-xl">
                <div className="text-xl font-semibold">{k}</div>
                <div className="text-white/60 text-sm mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
     <section id="clients" className="section-left py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Trusted by forward‑thinking teams</h2>
        <LogoMarquee className="mt-8" />
      </section>

      {/* SERVICES */}
   <section id="services" className="section-left py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        <p className="text-white/70 mt-2 max-w-3xl">
          From discovery to scale: applied AI, data platforms, cloud modernization, and secure-by‑design engineering.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <ServiceCard title="Applied AI & ML"
            bullets={["Gen‑AI assistants & RAG","Model evaluation & guardrails","Custom LLM fine‑tuning"]}/>
          <ServiceCard title="Cloud (AWS/Azure/GCP)"
            bullets={["Migrations & cost‑opt","Serverless & microservices","IaC & CI/CD"]}/>
          <ServiceCard title="Data Engineering"
            bullets={["Pipelines & warehouses","MDS / Lakehouse","Dashboards & observability"]}/>
          <ServiceCard title="Security & Compliance"
            bullets={["M365/Azure/AWS hardening","HIPAA/PCI/CMMC readiness","IR playbooks & training"]}/>
          <ServiceCard title="Automation"
            bullets={["Workflow/RPA","Integrations & APIs","SRE & platform ops"]}/>
          <ServiceCard title="Web & Mobile"
            bullets={["Next.js/React","Flutter/iOS/Android","Design systems"]}/>
        </div>
      </section>

   {/* OUR WORK */}
<section id="work" className="section-left py-6">
  <div className="flex items-end justify-between">
    <h2 className="text-2xl md:text-3xl font-semibold">Our work</h2>
    <a href="/works" className="text-brand-400 hover:text-brand-300">View all →</a>
  </div>

  {/* denser grid: 1 → 2 → 3 columns */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <ProjectCard
    title="Metro Classic"
    desc="Ticketing + live analytics with automated ops."
    image="/work/metro-classic.png"
  />
  <ProjectCard
    title="Basketballisfun"
    desc="Lucy Olsen (WNBA) personal merch store"
    image="/work/basketballisfun.png"
    href="https://www.basketballisfun.co/"
    external
  />
  <ProjectCard
    title="Cre8tors"
    desc="NIL Marketplace + AI compliance assistant."
    image="/work/cre8tors_icon.png"
  />
  <ProjectCard
    title="FDNS Construction"
    desc="Field ops app, device hardening, cloud cost-opt."
    image="/work/fdns_logo.jpeg"
    href="https://fdnsconstruction.com/"
  />
   <ProjectCard
    title="Tix"
    desc="Event ticketing platform with dynamic Checkout."
    image="/work/cre8tors_tix.svg"
  />
</div>


</section>
{/* WHY ZIONXAI */}
<section id="why" className="section py-20">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-semibold">Why ZionXAI</h2>
    <p className="text-white/70 mt-3">
      We don’t just ship decks—we ship code. Explore active projects, experiments, and
      production contributions. Hands-on engineering across AI, cloud, data, and security.
    </p>
    <div className="mt-6 flex items-center justify-center gap-4">
      <a
        href="https://github.com/colleybrb"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        View our GitHub
      </a>
      <a href="#work" className="btn-outline">See case studies</a>
    </div>
  </div>

  {/* live GitHub repos (or curated fallback) */}
  <GithubShowcase />
</section>



      {/* CTA */}
      <section id="contact" className="section py-24">
        <div className="glass rounded-2xl p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to build?</h3>
            <p className="text-white/70 mt-2 max-w-xl">Tell us your goals—get a quick technical plan and timeline.</p>
          </div>
          <a href="/contact" className="btn mt-6 md:mt-0">Talk to an Expert</a>
        </div>
      </section>
    </>
  );
}
