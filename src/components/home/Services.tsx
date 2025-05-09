import { motion } from "framer-motion";
import { Grid } from "@/components/ui/grid";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/lib/data";

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container-width container-padding">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16">
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
          className="max-w-[800px] text-muted-foreground text-lg md:text-xl"
        >
          Comprehensive support for our community's growth and development
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Grid cols={3} gap="lg">
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-standard">
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  <div className="rounded-full bg-primary/10 p-4 w-fit mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-base lg:text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-fit text-primary hover:text-primary/80"
                  >
                    <Link to={service.link} className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </motion.div>
    </div>
  );
}
