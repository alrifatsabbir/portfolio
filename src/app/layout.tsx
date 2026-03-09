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
  title: "AL RIFAT SABBIR - WEB DEV.",
  description: "Al Rifat Sabbir a Web Developer with 3+ Years of Experience.",
  icons: {
    icon: '/alrifatsabbir-part1.png', 
    shortcut: '/alrifatsabbir-part1.png',
    apple: '/alrifatsabbir-part1.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/alrifatsabbir-part1.png',
    },
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
