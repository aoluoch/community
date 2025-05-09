import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';
import { GraduationCap, HeartHandshake, Users } from 'lucide-react';

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
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed"
          >
            We provide a range of programs designed to empower and strengthen our community.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                variants={item}
                className={cn(
                  "flex flex-col items-center text-center p-6 rounded-lg",
                  "bg-background shadow-md transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1"
                )}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}