import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Heart,
  Menu,
  X,
  BookOpen,
  Calendar,
  Image,
  MessageSquare,
  Home,
  Users,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home", icon: <Home className="w-4 h-4 mr-2" /> },
  {
    path: "/about",
    label: "About Us",
    icon: <Users className="w-4 h-4 mr-2" />,
  },
  {
    path: "/programs",
    label: "Programs",
    icon: <GraduationCap className="w-4 h-4 mr-2" />,
  },
  {
    path: "/events",
    label: "Events",
    icon: <Calendar className="w-4 h-4 mr-2" />,
  },
  {
    path: "/gallery",
    label: "Gallery",
    icon: <Image className="w-4 h-4 mr-2" />,
  },
  { path: "/blog", label: "Blog", icon: <BookOpen className="w-4 h-4 mr-2" /> },
  {
    path: "/contact",
    label: "Contact",
    icon: <MessageSquare className="w-4 h-4 mr-2" />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="font-bold text-lg">GetMore Centre</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors whitespace-nowrap",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild variant="default" className="ml-2 lg:ml-4">
              <Link to="/donate" className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Donate
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <div className="container px-4 md:px-6 py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "px-4 py-3 rounded-md text-sm font-medium flex items-center transition-colors",
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground/70 hover:text-foreground hover:bg-accent"
                      )
                    }
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                ))}
                <Button asChild variant="default" className="mt-4 w-full">
                  <Link
                    to="/donate"
                    className="flex items-center justify-center"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Donate
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
