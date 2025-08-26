import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/Logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} height={35} width={89} alt="auto-rent" />
    </Link>
  );
}

export default Logo;
