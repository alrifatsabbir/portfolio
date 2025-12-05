import Image from "next/image";
import Link from "next/link";

export const FooterLogo = () => {
    return (
        <Link href="/">
            <Image src="/alrifatsabbir-logo.png" alt="Logo" width={250} height={100} className="rounded-full foot_logo" />
        </Link>
    );
}