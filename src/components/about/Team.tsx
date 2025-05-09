import { motion } from 'framer-motion';
import { team } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { 
  Facebook, 
  Twitter, 
  Linkedin,
  Mail
} from 'lucide-react';

export default function Team() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            Meet Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed"
          >
            The dedicated people behind GetMore Centre's mission and impact.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div 
              key={member.id}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden h-full border-none shadow-md">
                <div className="relative group">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-center space-x-2">
                      <motion.a 
                        href="#" 
                        className="bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}