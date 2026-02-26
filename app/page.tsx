import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ProxyLayers unifies service intent, routing context, and compliance signals into one execution layer.",
  openGraph: {
    title: "ProxyLayers Home",
    description:
      "Unify intent. Execute consistently. Explore ProxyLayers enterprise execution layer.",
  },
};

const features = [
  {
    title: "Intent Normalization",
    description:
      "Translate distributed team requirements into a clear, reusable operating model for services, policies, and controls.",
  },
  {
    title: "Context-Aware Routing",
    description:
      "Adapt execution paths based on environment, identity, and operational state without reworking application logic.",
  },
  {
    title: "Compliance in Flow",
    description:
      "Evaluate regulatory and internal policy signals in-line so teams can ship confidently with fewer manual checkpoints.",
  },
];

const testimonials = [
  {
    quote:
      "ProxyLayers gave us a shared execution language across engineering and governance teams in under one quarter.",
    name: "Avery Sloan",
    role: "SVP Platform Strategy, Northline Systems",
  },
  {
    quote:
      "We stopped rebuilding route logic in every domain and finally moved to one policy-aware layer.",
    name: "Riya Bhatt",
    role: "Head of Infrastructure, Velden Core",
  },
  {
    quote:
      "The platform made enterprise controls feel native to delivery instead of an afterthought.",
    name: "Mason Lee",
    role: "Director of Reliability, HelioWorks",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section-space border-b border-slate-200 bg-slate-50">
        <div className="container-shell">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">ProxyLayers</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            Unify intent. Execute consistently.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-700">
            ProxyLayers unifies service intent, routing context, and compliance signals into one execution layer.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/platform" className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Explore the Platform
            </Link>
            <Link href="/contact" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-900">
              Talk to ProxyLayers
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <h2 className="text-2xl font-semibold tracking-tight">Core capabilities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-700">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-slate-200 bg-white">
        <div className="container-shell max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-6 space-y-4 text-slate-700">
            <li><span className="font-semibold text-slate-900">1. Model intent:</span> Define business and technical outcomes once.</li>
            <li><span className="font-semibold text-slate-900">2. Apply context:</span> Route decisions are enriched with environment and policy signals.</li>
            <li><span className="font-semibold text-slate-900">3. Execute safely:</span> Unified controls enforce consistency across distributed services.</li>
          </ol>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <h2 className="text-2xl font-semibold tracking-tight">Trusted by modern enterprise teams</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-700">“{t.quote}”</p>
                <footer className="mt-4 text-sm font-medium text-slate-900">{t.name}</footer>
                <p className="text-xs text-slate-500">{t.role}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
