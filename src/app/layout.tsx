import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GhlChatWidget from "@/components/ghl/GhlChatWidget";
import { BookingModalProvider } from "@/components/ghl/BookingModalContext";
import { COMPANY } from "@/data/company";
import { DEFAULT_DESCRIPTION, serializeJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

const generalSans = localFont({
  src: [
    { path: "../fonts/GeneralSans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/GeneralSans-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/GeneralSans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Never miss another call.`,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "business automation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} — Never miss another call.`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Never miss another call.`,
    description: DEFAULT_DESCRIPTION,
  },
  verification: {
    google: "o_LbmKKZvjmV4ZuXL1DvDJBJpkjC1XJgEzI8q28fpEU",
    other: {
      "msvalidate.01": "FB236DBAF61287CCD2D3D1221901F5D5",
    },
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "Echo Reconnect",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-echo-lockup.webp`,
      description: DEFAULT_DESCRIPTION,
      email: COMPANY.email,
      telephone: COMPANY.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "City",
        name: "Atlanta",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales and customer support",
        telephone: COMPANY.phoneHref.replace("tel:", ""),
        email: COMPANY.email,
        areaServed: "US",
        availableLanguage: "English",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }}
        />
        <BookingModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <GhlChatWidget />
        </BookingModalProvider>
      </body>
    </html>
  );
}
