import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description: "See how ProxyLayers coordinates intent, context, and compliance across enterprise execution surfaces.",
  openGraph: {
    title: "ProxyLayers Platform",
    description: "Detailed platform capabilities for enterprise execution consistency.",
  },
};

const platformFeatures = [
  "Unified Intent Registry for service-to-service operating standards.",
  "Deterministic Routing Fabric with programmable context priorities.",
  "Policy Evaluation Mesh for inline control and preflight assertions.",
  "Execution Replay Trails for auditability and incident reconstruction.",
  "Adaptive Governance Profiles aligned to organizational boundaries.",
  "Operational Drift Detection with rule-based remediation suggestions.",
];

export default function PlatformPage() {
  return (
    <div className="section-space">
      <div className="container-shell">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">Platform</h1>
          <p className="mt-4 text-lg text-slate-700">
            ProxyLayers provides a cohesive execution layer for organizations that need predictable behavior across varied infrastructure and compliance domains.
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {platformFeatures.map((feature) => (
            <article key={feature} className="rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900">{feature.split(" for ")[0]}</h2>
              <p className="mt-3 text-sm text-slate-700">{feature}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Execution flow diagram</h2>
          <p className="mt-2 text-sm text-slate-600">Illustrative architecture view using simple blocks.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-lg border border-slate-300 bg-white p-4 text-sm font-medium">Intent Inputs</div>
            <div className="rounded-lg border border-slate-300 bg-white p-4 text-sm font-medium">Context Engine</div>
            <div className="rounded-lg border border-slate-300 bg-white p-4 text-sm font-medium">Policy Layer</div>
            <div className="rounded-lg border border-slate-300 bg-white p-4 text-sm font-medium">Execution Plane</div>
          </div>
          <div className="mt-4 hidden items-center justify-between text-center text-xs font-semibold text-slate-500 md:flex">
            <span>normalize</span>
            <span>enrich</span>
            <span>validate</span>
            <span>deliver</span>
          </div>
        </section>
      </div>
    </div>
  );
}
