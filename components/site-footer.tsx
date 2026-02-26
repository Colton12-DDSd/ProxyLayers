import Link from "next/link";

const partnerLinks = [
  "NimbusKite Cloud Services",
  "BlueMop Facility Services",
  "SteelSpan Construction Group",
  "Gatehouse Access Systems",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Company</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li><Link href="/platform" className="hover:text-slate-900">Platform</Link></li>
              <li><Link href="/partners" className="hover:text-slate-900">Partners</Link></li>
              <li><Link href="/trust" className="hover:text-slate-900">Trust Center</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Partner Directory</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {partnerLinks.map((partner) => (
                <li key={partner}>
                  <Link href="/partners" className="hover:text-slate-900">{partner}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Brand Kit</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Logo usage: preserve icon + wordmark lockup with generous white space.</li>
              <li>Colors: black and white only.</li>
              <li>Typography: use clean sans-serif styles with strong heading hierarchy.</li>
            </ul>
          </section>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          ProxyLayers is a fictional entity for design and storytelling purposes.
        </p>
      </div>
    </footer>
  );
}
