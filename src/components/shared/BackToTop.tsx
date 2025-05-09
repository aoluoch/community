import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-10 w-10 rounded-full shadow-lg bg-primary"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}