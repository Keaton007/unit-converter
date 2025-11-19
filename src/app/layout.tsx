import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://unitconverter.it.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'UnitFlow | Fast, Educational Unit Converter',
    template: '%s | UnitFlow',
  },
  description:
    'Convert length, weight, temperature, currency, and more with UnitFlow. Interactive calculator plus research-backed guides, examples, and FAQs.',
  keywords: [
    'unit converter',
    'meters to feet',
    'kilograms to pounds',
    'celsius to fahrenheit',
    'currency converter',
    'measurement guides',
  ],
  authors: [{ name: 'Codtive LLC' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UnitFlow | Fast, Educational Unit Converter',
    description: 'Free converter with examples, guides, and structured learning paths.',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'UnitFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnitFlow | Fast, Educational Unit Converter',
    description: 'Convert any unit instantly and learn the formulas behind each measurement.',
  },
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UnitFlow',
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  sameAs: ['https://www.linkedin.com/company/codtive'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'support@codtive.com',
      contactType: 'customer support',
      availableLanguage: ['English'],
    },
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'UnitFlow',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5769093982077943"
          crossOrigin="anonymous"
          suppressHydrationWarning
        />
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
