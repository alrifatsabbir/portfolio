import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube,  FaBuilding, FaLightbulb, FaUsers, FaBalanceScale } from "react-icons/fa";


export const FooterItems = [
   {
    Header: "Company",
    Icon: FaBuilding,
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    Header: "Resources",
    Icon: FaLightbulb,
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Projects", href: "/projects" },
      { name: "Resume", href: "/resume" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    Header: "Community",
    Icon: FaUsers,
    links: [
      { name: "GitHub", href: "https://github.com/alrifatsabbir", Icon: FaGithub },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/alrifatsabbir/", Icon: FaLinkedin },
      { name: "Twitter", href: "https://twitter.com/alrifatsabbir", Icon: FaTwitter },
      { name: "Facebook", href: "https://www.facebook.com/alrifatsabbir1", Icon: FaFacebook },
      { name: "Instagram", href: "https://www.instagram.com/alrifatsabbir/", Icon: FaInstagram },
      { name: "YouTube", href: "https://www.youtube.com/@alrifatsabbir", Icon: FaYoutube },
    ],
  },
  {
    Header: "Legal",
    Icon: FaBalanceScale,
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];
