import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cover bg-center min-h-[600px] md:min-h-[700px] flex items-center" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
        backgroundAttachment: 'fixed' 
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering Communities Through Education and Support
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            GetMore Centre provides skills training, education, and social programs to youth, women, and underprivileged groups in our community.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" asChild>
              <Link to="/programs" className="flex items-center gap-2">
                Join a Program
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Support Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}