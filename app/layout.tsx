// app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Manrope } from "next/font/google";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import "./globals.css";

// Configure fonts with Next.js optimization
const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PRIMARYCARE.BOT — Precision Primary Care Directory",
    template: "%s | PRIMARYCARE.BOT",
  },
  description:
    "A precision instrument for finding primary care physicians by zip, insurance, specialty, and modality.",
  openGraph: {
    title: "PRIMARYCARE.BOT — Precision Primary Care Directory",
    description:
      "Find primary care doctors near you. Verified by NPI registry.",
    type: "website",
    url: "https://primarycare.bot",
    siteName: "PRIMARYCARE.BOT",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIMARYCARE.BOT — Precision Primary Care Directory",
    description:
      "Find primary care doctors near you. Verified by NPI registry.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://primarycare.bot",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${jetbrainsMono.variable} ${manrope.variable} bg-obsidian`}
    >
      <body className="bg-obsidian text-bone antialiased">
        <div className="min-h-dvh flex flex-col bg-obsidian">
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
