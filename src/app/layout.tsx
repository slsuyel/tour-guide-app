import type { Metadata } from "next";
import { Tiro_Bangla } from 'next/font/google';
import "./globals.css";
import Provider from "@/components/Provider/MainProvider";

// Load Tiro Bangla font
const tiroBanglaFont = Tiro_Bangla({
  variable: "--font-bangla",
  subsets: ["bengali"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "পঞ্চগড় ভ্রমণ গাইড | Panchagarh Tour Guide",
  description: "পঞ্চগড় জেলার দর্শনীয় স্থান, আবাসন, খাবার, পরিবহন এবং অন্যান্য পর্যটন তথ্যসমূহ একসাথে জানুন।",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        {/* Custom Meta Tag */}
        <meta
          name="simpledcver"
          content="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJhcGkucGFuY2hhZ2FyaHRvdXJndWlkZS54eXoiLCJleHAiOjE3NTQ3ODQwMDB9.coGa-dvNT-8yaB3Zf6HKNxQ2UokALbrIbvkx2qvKucw"
        />
      </head>
      <body className={`${tiroBanglaFont.variable} antialiased font-bangla`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
