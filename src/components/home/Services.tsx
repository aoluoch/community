import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GraduationCap, HeartHandshake, Users } from "lucide-react";

// Map for icon components
const iconMap = {
  GraduationCap: GraduationCap,
  HeartHandshake: HeartHandshake,
  Users: Users,
};

export default function Services() {
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
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl/relaxed"
          >
            We provide a range of programs designed to empower and strengthen
            our community.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                variants={item}
                className={cn(
                  "flex flex-col items-center text-center p-8 lg:p-10 rounded-lg",
                  "bg-background shadow-md transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1"
                )}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {IconComponent && (
                    <IconComponent className="h-8 w-8 text-primary" />
                  )}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
