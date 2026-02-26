import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="ProxyLayers Home">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="26" height="26" rx="6" className="stroke-slate-900" strokeWidth="2" />
        <path d="M7 17L14 10L21 17" className="stroke-slate-900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 21L14 14L21 21" className="stroke-slate-900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xl font-semibold tracking-tight">ProxyLayers</span>
    </Link>
  );
}
