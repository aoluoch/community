import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  image?: string;
}

export default function PageHeader({
  title,
  description,
  className,
  image,
}: PageHeaderProps) {
  return (
    <Section
      className={cn(
        "relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {image && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 mix-blend-multiply z-10" />
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </>
      )}

      <div className="container-width container-padding relative z-20">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl",
              image && "text-white"
            )}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn(
                "mt-4 text-lg md:text-xl lg:text-2xl",
                image ? "text-white/90" : "text-muted-foreground"
              )}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>

      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        />
      )}
    </Section>
  );
}
