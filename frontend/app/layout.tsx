import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summit Core - Kitchen, Bathrooms & Floors | Tampa Bay Area",
  description: "Summit Core: Your Fix-and-Flip Partnership. Specializing in kitchen, bathroom, and flooring solutions serving the Tampa Bay Area.",
  keywords: ["kitchen renovation", "bathroom remodeling", "flooring installation", "Tampa Bay Area", "fix and flip", "home renovation"],
  authors: [{ name: "Summit Core" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://summitcore.com",
    siteName: "Summit Core",
    title: "Summit Core - Kitchen, Bathrooms & Floors",
    description: "Summit Core: Your Fix-and-Flip Partnership. Specializing in kitchen, bathroom, and flooring solutions serving the Tampa Bay Area.",
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
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
