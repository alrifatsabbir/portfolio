"use client";

import Link from "next/link";
import { FooterLogo } from "./footerLogo";
import { FooterItems } from "./footer";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export const FooterFrame = () => {
  const year = new Date().getFullYear();

  // Social icons
  const socials = [
    { name: "GitHub", href: "https://github.com/alrifatsabbir", Icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/alrifatsabbir/", Icon: FaLinkedin },
    { name: "Email", href: "mailto:alrifatsabbir@gmail.com", Icon: FaEnvelope },

  ];

  const renderLinks = (links: typeof FooterItems[0]["links"]) =>
    links.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          target={"Icon" in link ? "_blank" : "_self"}
          rel={"Icon" in link ? "noopener noreferrer" : undefined}
          className="flex items-center text-gray-400 text-sm hover:text-[#00bf63] transition-all duration-200 p-1 rounded-md hover:bg-gray-800/40"
        >
          {"Icon" in link && "Icon" in link && <link.Icon className="mr-2 w-5 h-5" />}
          {link.name}
          {"Icon" in link && <FaExternalLinkAlt className="ml-1 w-3 h-3 text-gray-400" />}
        </Link>
      </li>
    ));

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700/50 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <FooterLogo />
            <p className="text-gray-400 text-sm max-w-sm">
              <span className="text-lg text-white">AL RIFAT SABBIR</span> <br/>
              An enthusiast and problem solver. <br />
              Mirpur, Dhaka, Bangladesh.
            </p>

            <div className="flex space-x-4">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00bf63] hover:scale-110 transition-transform duration-300"
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {FooterItems.map((item, index) => (
            <div key={index} className="col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700/50 pb-2 flex items-center space-x-2">
                    {item.Icon && <item.Icon className="text-[#00bf63] w-5 h-5" />}
                    <span>{item.Header}</span>
                </h3>
                <ul className="space-y-1">{renderLinks(item.links)}</ul>
            </div>
          ))}

        </div>
        <div className="mt-16 border-t border-gray-800"></div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-sm text-gray-500">
          <p>&copy; {year} alrifatsabbir. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Developed with 💓 by{" "}
            <Link
              href="https://alrifatsabbir.com"
              target="_blank"
              className="text-[#00bf63] hover:underline font-medium"
            >
              @alrifatsabbir
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
