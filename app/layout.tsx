import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://proxylayers.vercel.app"),
  title: {
    default: "ProxyLayers | Unify intent. Execute consistently.",
    template: "%s | ProxyLayers",
  },
  description:
    "ProxyLayers unifies service intent, routing context, and compliance signals into one execution layer.",
  openGraph: {
    title: "ProxyLayers",
    description:
      "ProxyLayers unifies service intent, routing context, and compliance signals into one execution layer.",
    url: "https://proxylayers.vercel.app",
    siteName: "ProxyLayers",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
