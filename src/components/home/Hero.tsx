import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 mix-blend-multiply" />
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Community Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-width container-padding relative z-10 py-20">
        <div className="max-w-[800px] space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
          >
            Building Stronger Communities Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed"
          >
            Join us in creating positive change through education, support, and
            community engagement. Together, we can make a lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="text-base lg:text-lg h-12 lg:h-14 px-8"
            >
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base lg:text-lg h-12 lg:h-14 px-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30 text-white"
            >
              <Link to="/donate" className="flex items-center gap-2">
                Support Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}
