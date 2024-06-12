"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LiveSearch = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    router.push(`/admin/list?search=${encodeURI(search.toLowerCase())}`);
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        placeholder="Search Blogs..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant={"outline"}>
        <Search />
      </Button>
    </form>
  );
};

export default LiveSearch;
