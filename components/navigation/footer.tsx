import Link from "next/link";
import { Button } from "../ui/button";
import { footerLinks } from "@/constant";

const Footer = () => {
  return (
    <footer className="w-full min-h-24 bg-[#0072aa] bg-[url('/textured_stripes_brand_primary.png')]">
      <div className="w-full min-h-24 py-2 max-w-6xl mx-auto px-4 sm:px-2 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-wrap">
          {footerLinks.map((f) => (
            <Button variant={"link"} key={f.label} asChild>
              <Link href={f.link} className="text-xs xx:text-sm  text-white">
                {f.label}
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-white text-xs pt-2">
          Copyright © 2024-2025 digitalgujarat.net. All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
