import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richkid Ltd — Empowering Africa's Service Economy",
  description:
    "Richkid Ltd is a technology company and parent company of My Padi — a high-speed, geolocation-based marketplace connecting verified local service providers with clients across Africa.",
  keywords: [
    "Richkid Ltd",
    "My Padi",
    "African service economy",
    "geolocation marketplace",
    "service providers Africa",
    "personal shoppers",
    "cleaners",
    "movers",
    "Cameroon tech",
  ],
  verification: {
    google: "LZEGCVmipNfrP7Aoy3owDyFh-n1v2urdekCi_wJOmDw",
  },
  openGraph: {
    title: "Richkid Ltd — Empowering Africa's Service Economy",
    description:
      "Parent company of My Padi, connecting verified service providers with clients across Africa.",
    type: "website",
    locale: "en_US",
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
      className={`${outfit.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
