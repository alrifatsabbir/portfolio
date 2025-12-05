
import Image from "next/image";
import Link from "next/link";

export const NavLogo = () => {
    return (
        <Link href="/">
            <Image loading="eager" src="/alrifatsabbir-logo.png" alt="Logo" width={150} height={50} className="rounded-full nav_logo drop-shadow-sm ease-in-out duration-200 hover:drop-shadow-[#fffddd]" />
        </Link>
    );
};