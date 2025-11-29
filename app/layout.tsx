import type { Metadata } from "next";
import { poppins } from "./ui/fonts";
import "./globals.css";
import { NavItems } from "./ui/Navbar/nav";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/alrifatsabbir-logo.png";

const navLinks = NavItems.map((item) => (
  <li key={item.href} className="flex ">
    <Link href={item.href} className="text-white text-xl hover:text-blue-500  hover:animate-pulse">
      {item.name}
    </Link>
  </li>
))

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
        <nav className="flex items-center justify-between p-6">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={50} className="rounded-full"/>
          </Link>
          <ul className="flex gap-6">
            {navLinks}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
