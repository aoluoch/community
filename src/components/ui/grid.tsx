import { cn } from "@/lib/utils";
import React from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | "auto-fit" | "auto-fill";
  gap?: "default" | "sm" | "md" | "lg" | "xl";
}

const gapClasses = {
  default: "gap-4",
  sm: "gap-2",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
} as const;

const colClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  "auto-fit": "grid-cols-auto-fit",
  "auto-fill": "grid-cols-auto-fill",
} as const;

export function Grid({
  cols = 1,
  gap = "default",
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={cn("grid", colClasses[cols], gapClasses[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
}
