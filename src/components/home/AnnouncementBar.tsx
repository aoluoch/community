import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-primary text-primary-foreground"
      >
        <div className="container-width container-padding">
          <div className="flex items-center justify-between py-2 text-sm lg:text-base">
            <div className="flex items-center gap-2">
              <span className="font-medium">New Program Starting Soon:</span>
              <Link
                to="/programs"
                className="underline-offset-4 hover:underline"
              >
                Learn more about our Youth Leadership Workshop
              </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close announcement</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
