"use client";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const HeaderText = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-between w-full pb-2 border-b border-gray-300">
      <h2 className={cn("text-xl font-semibold", poppins.className)}>
        {label}
      </h2>
    </div>
  );
};
