import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description: "Explore integration partners in the ProxyLayers ecosystem.",
  openGraph: {
    title: "ProxyLayers Partners",
    description: "Integration partners collaborating with ProxyLayers.",
  },
};

const partners = [
  {
    name: "NimbusKite Cloud Services",
    tagline: "Consistency at scale.",
    description: "Cloud infrastructure alignment and deployment orchestration support.",
    link: "#",
  },
  {
    name: "BlueMop Facility Services",
    tagline: "Facilities, standardized.",
    description: "Facility operations integration and environmental telemetry workflows.",
    link: "#",
  },
  {
    name: "SteelSpan Construction Group",
    tagline: "Building the future.",
    description: "Project governance and execution layer harmonization across field systems.",
    link: "#",
  },
  {
    name: "Gatehouse Access Systems",
    tagline: "Access, governed.",
    description: "Access management and policy-enforced movement orchestration.",
    link: "#",
  },
];

export default function PartnersPage() {
  return (
    <div className="section-space">
      <div className="container-shell">
        <h1 className="text-4xl font-semibold tracking-tight">Integration Partners</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">
          ProxyLayers works with integration partners to bring consistent execution to physical and digital operating environments.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <article key={partner.name} className="rounded-xl border border-slate-200 p-6">
              <h2 className="text-xl font-semibold">{partner.name}</h2>
              <p className="mt-2 text-sm font-medium text-slate-600">{partner.tagline}</p>
              <p className="mt-4 text-sm text-slate-700">{partner.description}</p>
              <Link href={partner.link} className="mt-6 inline-block text-sm font-semibold text-slate-900 underline underline-offset-4">
                View partner profile
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
