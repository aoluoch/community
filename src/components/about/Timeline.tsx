import { motion } from "framer-motion";
import { milestones } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Timeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[900px] text-muted-foreground text-lg md:text-xl lg:text-2xl"
          >
            Milestones in the growth and impact of GetMore Centre.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-[1200px] mx-auto"
        >
          {/* Vertical line */}
          <div className="absolute left-[50%] -ml-px h-full w-[3px] bg-border hidden md:block"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              variants={item}
              className={cn(
                "flex flex-col md:flex-row md:items-center mb-12 md:mb-0",
                index % 2 === 0
                  ? "md:text-right"
                  : "md:flex-row-reverse md:text-left"
              )}
            >
              <div
                className={cn(
                  "flex-1 mb-8 md:mb-24 lg:mb-32",
                  index % 2 === 0 ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"
                )}
              >
                <div className="bg-background p-6 lg:p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div
                    className={cn(
                      "inline-block px-6 py-2 rounded-full font-bold text-lg bg-primary/10 text-primary mb-4",
                      index % 2 === 0 ? "md:ml-auto" : ""
                    )}
                  >
                    {milestone.year}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Circle marker on timeline */}
              <div className="md:w-12 md:h-12 bg-primary rounded-full md:absolute left-[50%] -ml-[24px] hidden md:flex items-center justify-center z-10 shadow-lg">
                <div className="w-6 h-6 bg-background rounded-full"></div>
              </div>

              {/* Right/Left empty space */}
              <div className="flex-1 md:mb-24 lg:mb-32"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
