import { motion } from "framer-motion";
import { Grid } from "@/components/ui/grid";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Target,
  Lightbulb,
  Users,
  Infinity,
  Shield,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach every interaction with empathy and understanding, ensuring everyone feels valued and supported.",
  },
  {
    icon: Target,
    title: "Impact",
    description:
      "Our programs are designed to create measurable, long-lasting positive change in our communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously seek new and better ways to serve our community's evolving needs.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description:
      "We celebrate diversity and ensure our programs are accessible to all community members.",
  },
  {
    icon: Infinity,
    title: "Sustainability",
    description:
      "Our initiatives focus on creating lasting impact through sustainable practices and solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We maintain the highest standards of transparency and ethical conduct in all our operations.",
  },
];

export default function Mission() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
          Our Mission & Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[800px] text-muted-foreground text-lg md:text-xl"
        >
          Committed to empowering communities through education, support, and
          sustainable development
        </motion.p>
      </div>

      <div className="space-y-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[800px] mx-auto text-center space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
              To create positive change by providing accessible education,
              fostering community engagement, and developing sustainable
              solutions that address the unique challenges faced by our
              communities.
            </p>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 lg:mb-12"
          >
            <h3 className="text-2xl lg:text-3xl font-bold">Our Values</h3>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Grid cols={3} gap="lg">
              {values.map((value) => (
                <motion.div key={value.title} variants={item}>
                  <Card className="h-full border-none shadow-md hover:shadow-xl transition-standard">
                    <CardContent className="p-6 lg:p-8 flex flex-col items-center text-center">
                      <div className="rounded-full bg-primary/10 p-4 mb-6">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl lg:text-2xl font-bold mb-4">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-base lg:text-lg">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
