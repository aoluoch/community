import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timeline = [
  {
    year: 2020,
    title: "Foundation Established",
    description:
      "GetMore Centre was founded with a vision to empower communities through education and support.",
    badge: "Milestone",
  },
  {
    year: 2021,
    title: "First Programs Launched",
    description:
      "Successfully launched our core programs focusing on youth development and adult education.",
    badge: "Programs",
  },
  {
    year: 2022,
    title: "Community Growth",
    description:
      "Expanded our reach to serve over 1,000 community members through various initiatives.",
    badge: "Growth",
  },
  {
    year: 2023,
    title: "New Partnerships",
    description:
      "Formed strategic partnerships with local and international organizations to enhance our impact.",
    badge: "Partnership",
  },
  {
    year: 2024,
    title: "Digital Transformation",
    description:
      "Introduced online learning platforms and digital resources to reach more community members.",
    badge: "Innovation",
  },
  {
    year: 2025,
    title: "Future Vision",
    description:
      "Setting ambitious goals to expand our programs and create lasting positive change.",
    badge: "Vision",
  },
];

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
    <div className="container-width container-padding">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16">
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
          className="max-w-[800px] text-muted-foreground text-lg md:text-xl"
        >
          A timeline of our growth and impact in the community
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-border" />

        <div className="space-y-12">
          {timeline.map((event, index) => (
            <motion.div
              key={event.year}
              variants={item}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 flex justify-end">
                <Card
                  className={`w-full max-w-[500px] ${
                    index % 2 === 0 ? "mr-8" : "ml-8"
                  } border-none shadow-md hover:shadow-xl transition-standard`}
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold">
                        {event.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="bg-primary/5 text-base"
                      >
                        {event.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-base lg:text-lg">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                  <span className="text-primary font-bold">{event.year}</span>
                </div>
              </div>

              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
