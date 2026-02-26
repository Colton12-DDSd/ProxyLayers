import Link from "next/link";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/partners", label: "Partners" },
  { href: "/trust", label: "Trust Center" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
