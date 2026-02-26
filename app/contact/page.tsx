import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ProxyLayers to discuss enterprise execution consistency.",
  openGraph: {
    title: "Contact ProxyLayers",
    description: "Connect with ProxyLayers via form UI or email.",
  },
};

export default function ContactPage() {
  return (
    <div className="section-space">
      <div className="container-shell max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-lg text-slate-700">
          Reach out to discuss operating consistency across your enterprise architecture.
        </p>

        <form className="mt-10 space-y-5 rounded-xl border border-slate-200 p-6" action="#">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-800">Name</label>
            <input id="name" name="name" type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-800">Work Email</label>
            <input id="email" name="email" type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-800">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <button type="submit" className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Send Inquiry
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-700">
          Prefer email? <a href="mailto:contact@proxylayers.com" className="font-semibold underline underline-offset-4">contact@proxylayers.com</a>
        </p>
      </div>
    </div>
  );
}
