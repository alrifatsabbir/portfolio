import { NavLogo } from "./navLogo";
import { NavItems } from "./nav";
import Link from "next/link";
import { Menu } from "./menu";


export const NavTop = () => {
    const navLinks = NavItems.map((item) => (
        <li key={item.href} className="flex ">
            <Link href={item.href} className="text-white lg:text-xl md:text-sm hover:text-blue-500  hover:animate-pulse">
                {item.name}
            </Link>
        </li>
    ));

    return (
        <nav className="flex items-center justify-between p-6">
            <NavLogo />
            <Menu />
            <ul className="hidden gap-6 md:flex lg:flex">
                {navLinks}
            </ul>
        </nav>
    );
}