import type { Metadata } from "next";
import { poppins } from "./ui/fonts";
import "./globals.css";
import { NavTop } from "./ui/Navbar/navTop";
import { FooterFrame } from "./ui/Footer/footerFrame";


export const metadata: Metadata = {
  title: "alrifatsabbir",
  description: "Portfolio of alrifatsabbir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NavTop />
        {children}
        <FooterFrame />
      </body>
    </html>
  );
}
