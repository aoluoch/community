import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import HeaderCarousel from "./HeaderCarousel";
import { headerImages } from "@/lib/headerImages";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  page: keyof typeof headerImages;
}

export default function PageHeader({
  title,
  description,
  className,
  page,
}: PageHeaderProps) {
  return (
    <Section
      container={false}
      className={cn(
        "relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden",
        "text-white mt-[-64px] pt-[88px] sm:pt-[64px]", // Adjusted padding for mobile
        className
      )}
    >
      <HeaderCarousel page={page} />

      <div className="container-width container-padding relative z-20">
        <div className="text-content-md text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-[90%] mx-auto"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent"
      />
    </Section>
  );
}
