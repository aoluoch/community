import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg";
  container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, size = "md", container = true, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          // Base styles
          size === "sm" && "section-spacing-sm",
          size === "md" && "section-spacing-md",
          size === "lg" && "section-spacing-lg",
          className
        )}
        {...props}
      >
        {container ? (
          <div className="container-width container-padding">
            {props.children}
          </div>
        ) : (
          props.children
        )}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };
