import { FooterLogo } from "./footerLogo";
import { FooterItems } from "./footer";
import Link from "next/link";

export const FooterFrame = () => {
    return (
        <footer className="bg-gray-700 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <FooterLogo />
                    <ul className="flex flex-col md:flex-row gap-9 mt-4 md:mt-0">
                        {FooterItems.map((item) => (
                            <li key={item.Header}>
                                <div className="p-8 rounded-lg">
                                    <h3 className="font-semibold text-xl mb-2">{item.Header}</h3>
                                    <ul className="flex flex-col gap-1">
                                        {item.links.map((link) => (
                                            <li key={link.href}>
                                                <Link href={link.href} className="hover:text-blue-400">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}