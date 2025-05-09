import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HomeIcon, Search } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found - GetMore Centre';
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center min-h-[70vh]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Search className="h-24 w-24 text-primary/20" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
          >
            404 - Page Not Found
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed"
          >
            Sorry, the page you are looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button asChild>
              <Link to="/" className="flex items-center">
                <HomeIcon className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}