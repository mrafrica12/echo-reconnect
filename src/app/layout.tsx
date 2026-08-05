import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/analytics/Analytics";
import GhlChatWidget from "@/components/ghl/GhlChatWidget";
import { BookingModalProvider } from "@/components/ghl/BookingModalContext";
import {
  BUILDER,
  DEFAULT_DESCRIPTION,
  siteJsonLd,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

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
  alternates: { canonical: SITE_URL },
  // Echo Reconnects publishes the site; UmojaServ designed and built the
  // front end. Rendered as <meta name="author"> / <link rel="author"> /
  // <meta name="creator">, alongside the visible footer credit.
  authors: [{ name: BUILDER.name, url: BUILDER.url }],
  creator: BUILDER.name,
  publisher: SITE_NAME,
  other: {
    "designer": BUILDER.name,
    "design-credit": `${BUILDER.name} — ${BUILDER.url}`,
  },
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
        <JsonLd data={siteJsonLd} />
        <BookingModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <GhlChatWidget />
        </BookingModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
