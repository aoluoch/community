import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-sm">
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
                  "text-base font-medium transition-standard relative py-2",
                  "text-foreground hover:text-primary",
                  location.pathname === link.href &&
                    "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/donate" className="text-base">
                Donate
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/contact" className="text-base">
                Get Involved
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-accent"
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
                            "block py-3 px-4 text-lg font-medium rounded-md transition-standard",
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
                  <Button
                    asChild
                    className="w-full"
                    variant="outline"
                    size="lg"
                  >
                    <Link
                      to="/donate"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base"
                    >
                      Donate
                    </Link>
                  </Button>
                  <Button asChild className="w-full" size="lg">
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base"
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
