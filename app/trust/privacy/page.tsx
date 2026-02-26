import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Placeholder privacy policy for ProxyLayers.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-shell section-space">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-slate-700">This placeholder page summarizes privacy and data handling principles for ProxyLayers.</p>
    </div>
  );
}
