import { motion } from "framer-motion";
import { Grid } from "@/components/ui/grid";
import { Card, CardContent } from "@/components/ui/card";
import { partners } from "@/lib/data";

export default function Partners() {
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
          Our Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[800px] text-muted-foreground text-lg md:text-xl"
        >
          Organizations that help us make a difference
        </motion.p>
      </div>

      <Grid cols={4} gap="lg">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border-none bg-transparent shadow-none overflow-hidden">
              <CardContent className="p-6 lg:p-8 flex items-center justify-center h-[140px] lg:h-[160px]">
                <motion.img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-[100px] lg:max-h-[120px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Grid>
    </div>
  );
}
