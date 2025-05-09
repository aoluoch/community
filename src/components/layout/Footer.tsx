import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card w-full py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 xl:gap-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Heart
                className="h-7 w-7 lg:h-8 lg:w-8 text-primary"
                fill="currentColor"
              />
              <span className="font-bold text-xl lg:text-2xl">
                GetMore Centre
              </span>
            </div>
            <p className="text-base lg:text-lg text-muted-foreground">
              Empowering communities through education, support, and
              opportunity.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to="#"
                className={cn(
                  "h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full",
                  "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
                  "transition-all duration-300 hover:scale-110"
                )}
              >
                <Facebook className="h-5 w-5 lg:h-6 lg:w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="#"
                className={cn(
                  "h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full",
                  "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
                  "transition-all duration-300 hover:scale-110"
                )}
              >
                <Twitter className="h-5 w-5 lg:h-6 lg:w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to="#"
                className={cn(
                  "h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full",
                  "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
                  "transition-all duration-300 hover:scale-110"
                )}
              >
                <Instagram className="h-5 w-5 lg:h-6 lg:w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to="#"
                className={cn(
                  "h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full",
                  "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
                  "transition-all duration-300 hover:scale-110"
                )}
              >
                <Youtube className="h-5 w-5 lg:h-6 lg:w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-base lg:text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-base lg:text-lg">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-base lg:text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-base lg:text-lg">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 lg:h-6 lg:w-6 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Community St, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-muted-foreground" />
                <span className="text-muted-foreground">+254 712 345 678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-muted-foreground" />
                <span className="text-muted-foreground">
                  info@getmorecentre.org
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-base lg:text-lg font-semibold">Newsletter</h3>
            <p className="text-base lg:text-lg text-muted-foreground">
              Stay updated with our latest news and events.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="h-12 lg:h-14 text-base lg:text-lg"
              />
              <Button
                size="icon"
                className="h-12 w-12 lg:h-14 lg:w-14 shrink-0"
              >
                <Send className="h-5 w-5 lg:h-6 lg:w-6" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 lg:my-16" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-base lg:text-lg text-muted-foreground">
          <p>© {currentYear} GetMore Centre. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
