import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    //    <div className={cn("mx-auto w-full px-4 md:max-w-6xl md:px-8 xl:max-w-7xl", className)}>
    //<div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", className)}>
    <div
      className={cn(
        "   md:mx-auto md:max-w-6xl xl:max-w-7xl md:px-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
