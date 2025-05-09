import { motion } from 'framer-motion';
import { partners } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function Partners() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tighter sm:text-3xl"
          >
            Our Partners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[600px] text-muted-foreground"
          >
            Organizations that help us make a difference.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {partners.map((partner) => (
            <Card key={partner.id} className="border-none bg-transparent shadow-none overflow-hidden">
              <CardContent className="p-4 flex items-center justify-center h-[120px]">
                <motion.img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-[80px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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