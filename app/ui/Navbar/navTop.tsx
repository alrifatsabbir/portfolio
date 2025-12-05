import { NavLogo } from "./navLogo";
import { NavItems } from "./nav";
import Link from "next/link";
import { Menu } from "./menu";


export const NavTop = () => {
    const navLinks = NavItems.map((item) => (
        <li key={item.href} className="flex ">
            <Link href={item.href} className="text-white lg:hover:bg-[#10182833] lg:px-4 lg:py-2 rounded-xl transition-all ease-in-out duration-700 lg:text-xl md:text-sm hover:text-[#00bf63]">
                {item.name}
            </Link>
        </li>
    ));

    return (
        <nav className="flex items-center justify-between p-6 bg_nav bg-[#10182833] m-4 md:m-2 rounded-lg">
            <NavLogo />
            <Menu />
            <ul className="hidden gap-5 lg:gap-1 md:flex lg:flex">
                {navLinks}
            </ul>
        </nav>
    );
}