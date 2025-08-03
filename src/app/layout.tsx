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
  verification: {
    google: "ANItNYqQDazN0dV4pu2og6_UlDQsExze00cb7OPVUUM"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${tiroBanglaFont.variable} antialiased font-bangla`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
