"use client";
import { NavItems } from "./nav";
import Link from "next/link";

const handleMenuClick = () => {
    const menuDropdown = document.getElementById("menu-dropdown");
    if (menuDropdown) {
        if (menuDropdown.classList.contains("hidden")) {
            menuDropdown.classList.remove("hidden");
        } else {
            menuDropdown.classList.add("hidden");
        }
    }
};

export const Menu = () => {

    const navLinks = NavItems.map((item) => (
        <li key={item.href} className="flex text-center justify-center my-6">
            <Link href={item.href} className="text-gray-400 text-4xl hover:text-[#00bf63] hover:animate-pulse">
                {item.name}
            </Link>
        </li>
    ));

    return (
        <>
        <div className="lg:hidden md:hidden flex flex-col gap-1 hover:cursor-pointer active:animate-ping" onClick={handleMenuClick}>
            <span className="w-5 h-1 bg-[#00bf63]"></span>
            <span className="w-4 h-1 bg-green-300"></span>
            <span className="w-5 h-1 bg-[#00bf63]"></span>
        </div>
        <div className="absolute top-24 mt-6 pt-8 left-0 bg-gray-900 min-h-screen w-full lg:hidden md:hidden hidden" id="menu-dropdown">
            <ul className="">
                {navLinks}
            </ul>
        </div>
        </>
    );
}