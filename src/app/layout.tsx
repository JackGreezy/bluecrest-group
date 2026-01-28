import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/JsonLd";
import { siteConfig } from "@/data/site-config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | Fractional CFO and Accounting Services in ${siteConfig.city}, ${siteConfig.stateAbbr}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.businessName} provides fractional CFO, accounting, and business consulting services for growing businesses in ${siteConfig.city}, ${siteConfig.stateAbbr} and Orange County. Expert financial leadership for companies with $1M+ revenue.`,
  keywords: [
    "fractional CFO",
    "fractional CFO Orange County",
    "outsourced CFO",
    "fractional accounting services",
    "business consulting",
    "Newport Beach CFO",
    "Orange County accounting",
  ],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | Fractional CFO Services`,
    description: `Expert fractional CFO and accounting services for growing businesses in ${siteConfig.city}, ${siteConfig.stateAbbr}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description: `Fractional CFO and accounting services in ${siteConfig.city}, ${siteConfig.stateAbbr}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
