import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-width container-padding">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="GetMore Centre" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-base font-medium transition-colors relative py-2",
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80",
                  location.pathname === link.href &&
                    "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-current"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              variant={isScrolled ? "outline" : "secondary"}
              className={cn(
                "transition-colors",
                !isScrolled && "bg-white/10 hover:bg-white/20 border-white/30"
              )}
            >
              <Link to="/donate">Donate</Link>
            </Button>
            <Button
              asChild
              variant={isScrolled ? "default" : "secondary"}
              className={cn(
                !isScrolled && "bg-white text-primary hover:bg-white/90"
              )}
            >
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "transition-colors",
                  isScrolled
                    ? "text-foreground hover:bg-accent"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <img src="/logo.svg" alt="GetMore Centre" className="h-8" />
                </div>
                <nav className="flex-1 overflow-y-auto">
                  <ul className="p-6 space-y-2">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "block py-3 px-4 text-lg font-medium rounded-md transition-colors",
                            location.pathname === link.href
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-accent"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 border-t space-y-3">
                  <Button asChild className="w-full" variant="outline">
                    <Link
                      to="/donate"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Donate
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Involved
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
