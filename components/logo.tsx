import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <Link href="/" className={cn("relative w-[125px]")}>
      <span className="text-white font-semibold text-nowrap text-2xl">
        Digital Gujarat{" "}
      </span>
    </Link>
  );
};

export default Logo;
