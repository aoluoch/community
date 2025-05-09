import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-primary text-primary-foreground w-full py-3 lg:py-4"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-sm lg:text-base">
                New Tech Training Program Starting June 15th!
              </span>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="text-sm border-primary-foreground/20 hover:bg-primary-foreground/10 hover:text-primary-foreground h-8 lg:h-9 px-3 lg:px-4"
              >
                <Link to="/events">Learn More</Link>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-7 w-7 lg:h-8 lg:w-8 p-0 rounded-full hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
