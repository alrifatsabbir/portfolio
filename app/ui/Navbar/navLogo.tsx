
import Image from "next/image";
import Link from "next/link";

export const NavLogo = () => {
    return (
        <Link href="/">
            <Image src="/alrifatsabbir-logo.png" alt="Logo" width={150} height={50} className="rounded-full" />
        </Link>
    );
};