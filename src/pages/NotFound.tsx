import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HomeIcon, Search } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found - GetMore Centre";
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 flex items-center min-h-[80vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Search className="h-24 w-24 lg:h-32 lg:w-32 text-primary/20" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            404 - Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[800px] text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed"
          >
            Sorry, the page you are looking for doesn't exist or has been moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button
              asChild
              size="lg"
              className="text-base lg:text-lg h-12 lg:h-14 px-8"
            >
              <Link to="/" className="flex items-center">
                <HomeIcon className="mr-2 h-5 w-5 lg:h-6 lg:w-6" />
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="text-base lg:text-lg h-12 lg:h-14 px-8"
            >
              <Link to="/contact">Contact Support</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
