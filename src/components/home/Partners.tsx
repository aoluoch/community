import { motion } from "framer-motion";
import { partners } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export default function Partners() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Our Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl"
          >
            Organizations that help us make a difference.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="border-none bg-transparent shadow-none overflow-hidden"
            >
              <CardContent className="p-6 lg:p-8 flex items-center justify-center h-[140px] lg:h-[160px]">
                <motion.img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-[100px] lg:max-h-[120px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
