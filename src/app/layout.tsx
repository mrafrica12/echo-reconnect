import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GhlChatWidget from "@/components/ghl/GhlChatWidget";
import { BookingModalProvider } from "@/components/ghl/BookingModalContext";

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

const SITE_URL = "https://echoreconnects.com";
const SITE_NAME = "Echo Reconnect";
const DEFAULT_DESCRIPTION =
  "Echo Reconnect answers every missed call, texts the customer back, and books the appointment automatically for service businesses in Atlanta, GA.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Never miss another call.`,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
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
