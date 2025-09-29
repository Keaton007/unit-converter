import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UnitConverter - Fast & Accurate Unit Conversions",
  description: "Convert between length, weight, temperature, volume, and more with our fast and accurate unit converter. Clean, modern interface with instant results.",
  keywords: "unit converter, length converter, weight converter, temperature converter, volume converter, metric conversion",
  authors: [{ name: "UnitConverter" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "UnitConverter - Fast & Accurate Unit Conversions",
    description: "Convert between different units instantly with our clean, modern unit converter.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
