import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";

import { daycare } from "@/data/krewe";

import "./globals.css";

// Soft, rounded type to match the bubbly lettering on their logo.
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const title = `${daycare.name} | Opening soon in New Orleans`;

export const metadata: Metadata = {
  title,
  description: daycare.description,
  // Demo build, shared only with Porters Little Krewe Daycare: keep it out of search results.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description: daycare.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#062f8f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
