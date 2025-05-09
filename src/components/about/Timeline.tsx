import { motion } from 'framer-motion';
import { milestones } from '@/lib/data';
import { cn } from '@/lib/utils';

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
    <section className="w-full py-12 md:py-24 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Our Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed"
          >
            Milestones in the growth and impact of GetMore Centre.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-[50%] -ml-px h-full w-[2px] bg-border hidden md:block"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div 
              key={milestone.id}
              variants={item}
              className={cn(
                "flex flex-col md:flex-row md:items-center mb-10 md:mb-0",
                index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
              )}
            >
              <div className={cn(
                "flex-1 mb-6 md:mb-16",
                index % 2 === 0 ? "md:pr-10" : "md:pl-10"
              )}>
                <div className="bg-background p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={cn(
                    "inline-block px-4 py-2 rounded-full font-bold bg-primary/10 text-primary mb-4",
                    index % 2 === 0 ? "md:ml-auto" : ""
                  )}>
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
              
              {/* Circle marker on timeline */}
              <div className="md:w-9 md:h-9 bg-primary rounded-full md:absolute left-[50%] -ml-[18px] hidden md:flex items-center justify-center z-10">
                <div className="w-5 h-5 bg-background rounded-full"></div>
              </div>
              
              {/* Right/Left empty space */}
              <div className="flex-1 md:mb-16"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}