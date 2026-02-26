import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy",
  description: "Placeholder security policy for ProxyLayers.",
};

export default function SecurityPolicyPage() {
  return (
    <div className="container-shell section-space">
      <h1 className="text-3xl font-semibold">Security Policy</h1>
      <p className="mt-4 text-slate-700">This placeholder page summarizes security principles for ProxyLayers.</p>
    </div>
  );
}
