import type { Metadata } from "next";
import { Bebas_Neue, Cinzel, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const cinzel = Cinzel({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Festival De Ophef — 27 Juni 2026, Groningen",
  description:
    "Festival De Ophef in Groningen. Een dag vol workshops, muziek, politiek en samen feest vieren. 27 juni 2026, 11:00–23:00.",
  openGraph: {
    title: "Festival De Ophef — 27 Juni 2026",
    description:
      "Schrijf je in voor het programma en doneer voor een solidaire bijdrage.",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${bebas.variable} ${cinzel.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
