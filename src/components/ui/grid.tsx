import * as React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg";
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = "md", ...props }, ref) => {
    const gapClasses = {
      sm: "gap-4 md:gap-6",
      md: "gap-6 md:gap-8",
      lg: "gap-8 md:gap-12",
    };

    const gridColsClasses = {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          gridColsClasses[cols],
          gapClasses[gap],
          className
        )}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";

export { Grid };
