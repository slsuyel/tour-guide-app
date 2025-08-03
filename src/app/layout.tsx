// app/layout.tsx
import type { Metadata } from "next";
import { Tiro_Bangla } from 'next/font/google';
import "./globals.css";
import Provider from "@/components/Provider/MainProvider";

// Load Tiro Bangla font with proper subset configuration
const tiroBanglaFont = Tiro_Bangla({
  variable: "--font-bangla",
  subsets: ["bengali", "latin"],
  weight: ["400"],
  display: 'swap',
});

// Domain verification token (consider moving to environment variables)
const DOMAIN_VERIFICATION_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJhcGkucGFuY2hhZ2FyaHRvdXJndWlkZS54eXoiLCJleHAiOjE3NTQ3ODQwMDB9.coGa-dvNT-8yaB3Zf6HKNxQ2UokALbrIbvkx2qvKucw";

export const metadata: Metadata = {
  title: {
    default: "পঞ্চগড় ভ্রমণ গাইড | Panchagarh Tour Guide",
    template: "%s | পঞ্চগড় ভ্রমণ গাইড"
  },
  description: "পঞ্চগড় জেলার দর্শনীয় স্থান, আবাসন, খাবার, পরিবহন এবং অন্যান্য পর্যটন তথ্যসমূহ একসাথে জানুন।",
  metadataBase: new URL('https://panchagarhtourguide.xyz'),
  alternates: {
    canonical: '/',
  },
  verification: {
    other: {
      simpledcver: DOMAIN_VERIFICATION_TOKEN
    }
  },
  openGraph: {
    title: "পঞ্চগড় ভ্রমণ গাইড | Panchagarh Tour Guide",
    description: "পঞ্চগড় জেলার দর্শনীয় স্থান, আবাসন, খাবার, পরিবহন এবং অন্যান্য পর্যটন তথ্যসমূহ একসাথে জানুন।",
    url: 'https://panchagarhtourguide.xyz',
    siteName: 'Panchagarh Tour Guide',
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "পঞ্চগড় ভ্রমণ গাইড | Panchagarh Tour Guide",
    description: "পঞ্চগড় জেলার দর্শনীয় স্থান, আবাসন, খাবার, পরিবহন এবং অন্যান্য পর্যটন তথ্যসমূহ একসাথে জানুন।",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" dir="ltr" suppressHydrationWarning>
      <body className={`${tiroBanglaFont.variable} font-bangla antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Provider>
          <main className="min-h-screen">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}