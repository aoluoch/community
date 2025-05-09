import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  size?: "default" | "sm" | "lg";
}

const sizeClasses = {
  default: "py-12 md:py-16 lg:py-24",
  sm: "py-8 md:py-12 lg:py-16",
  lg: "py-16 md:py-24 lg:py-32",
};

export function Section({
  container = true,
  size = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("w-full", sizeClasses[size], className)} {...props}>
      {container ? (
        <div className="container-width container-padding">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
