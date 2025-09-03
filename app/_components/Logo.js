import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/assets/images/Logo.png"
        height={35}
        width={89}
        alt="auto-rent logo"
      />
    </Link>
  );
}

export default Logo;
