import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-primary text-primary-foreground w-full py-3"
        >
          <div className="container px-4 md:px-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-medium">
                New Tech Training Program Starting June 15th!
              </span>
              <Button variant="outline" size="sm" asChild className="text-xs border-primary-foreground/20 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/events">Learn More</Link>
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0 rounded-full hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}