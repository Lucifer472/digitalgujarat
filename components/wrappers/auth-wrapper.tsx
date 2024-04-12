"use client";
import { Suspense } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

interface AuthWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const AuthWrapper = ({ children, headerLabel }: AuthWrapperProps) => {
  return (
    <Suspense>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <div className="flex w-full flex-col items-center justify-center gap-y-4">
            <h1 className={cn("text-3xl font-semibold", font.className)}>
              🖥️ OJASINFO
            </h1>
            <p className="text-muted-foreground text-sm">{headerLabel}</p>
          </div>
        </CardHeader>
        <CardContent className="pb-0">{children}</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Suspense>
  );
};
