import { motion } from "framer-motion";
import { team } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

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
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[800px] text-muted-foreground text-lg md:text-xl lg:text-2xl"
          >
            The dedicated people behind GetMore Centre's mission and impact.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full flex justify-center space-x-3">
                      <motion.a
                        href="#"
                        className="bg-white/20 text-white p-2.5 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="bg-white/20 text-white p-2.5 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="bg-white/20 text-white p-2.5 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="bg-white/20 text-white p-2.5 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl lg:text-2xl mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-base lg:text-lg mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-base">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
