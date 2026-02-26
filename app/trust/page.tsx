import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust Center",
  description: "Security, compliance, reliability, and responsible use information for ProxyLayers.",
  openGraph: {
    title: "ProxyLayers Trust Center",
    description: "Enterprise trust information for ProxyLayers.",
  },
};

const trustSections = [
  {
    title: "Security",
    description: "Layered controls, least-privilege design, and continuous posture assessments across execution domains.",
  },
  {
    title: "Compliance",
    description: "Policy-first workflows designed to support evolving regulatory obligations and internal control frameworks.",
  },
  {
    title: "Reliability",
    description: "Redundant pathways and measurable service objectives for predictable, resilient operations.",
  },
  {
    title: "Data Handling",
    description: "Clear processing boundaries, retention principles, and governed movement of operational metadata.",
  },
  {
    title: "Responsible Use",
    description: "Human-in-the-loop safeguards and transparent escalation patterns for high-impact decisions.",
  },
];

export default function TrustPage() {
  return (
    <div className="section-space">
      <div className="container-shell">
        <h1 className="text-4xl font-semibold tracking-tight">Trust Center</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          ProxyLayers publishes trust commitments to help stakeholders evaluate our approach to secure, compliant, and reliable platform operations.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {trustSections.map((section) => (
            <section key={section.title} className="rounded-xl border border-slate-200 p-6">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm text-slate-700">{section.description}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-xl border border-slate-900 bg-slate-900 p-6 text-white">
          <h2 className="text-lg font-semibold">Uptime</h2>
          <p className="mt-2 text-4xl font-semibold">99.99%</p>
          <p className="mt-1 text-sm text-slate-200">Reported quarterly.</p>
        </section>

        <section className="mt-12 rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold">Policy Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li><Link href="/trust/security" className="underline underline-offset-4">Security Policy</Link></li>
            <li><Link href="/trust/privacy" className="underline underline-offset-4">Privacy Policy</Link></li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold">Brand Kit</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Logo usage: keep icon and wordmark together; avoid distortion.</li>
            <li>Colors: black and white palette only.</li>
            <li>Typography: modern sans-serif with clear heading/body contrast.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
