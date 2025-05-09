import { motion } from "framer-motion";
import { Grid } from "@/components/ui/grid";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { team } from "@/lib/data";

export default function Team() {
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
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[800px] text-muted-foreground text-lg md:text-xl"
        >
          Dedicated professionals working to make a difference
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Grid cols={3} gap="lg">
          {team.map((member) => (
            <motion.div key={member.id} variants={item}>
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-standard">
                <div className="relative aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 lg:p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-xl lg:text-2xl mb-1">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground text-base lg:text-lg">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-base lg:text-lg">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          variant="outline"
                          className="bg-primary/5 text-base"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </motion.div>
    </div>
  );
}
