"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { adminLinks } from "@/constant";
import { logOut } from "@/action/logout-user";

const AdminNavbar = () => {
  const pathname = usePathname();

  const handleLogout = () => {
    logOut();
  };
  return (
    <nav className="w-full max-w-5xl mx-auto h-16 border border-gray-300 shadow-md rounded-xl my-8">
      <div className="w-full flex items-center justify-center gap-x-2 h-16 py-2">
        {adminLinks.map((a) => (
          <React.Fragment key={a.label}>
            <Button variant={"link"} size={"sm"}>
              <Link href={a.link}>{a.label}</Link>
            </Button>
            <Separator orientation="vertical" />
          </React.Fragment>
        ))}
        <Button variant={"link"} onClick={handleLogout} size={"sm"}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
