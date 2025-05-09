import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
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
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card w-full py-12 md:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="font-bold text-lg">GetMore Centre</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering communities through education, support, and opportunity.
            </p>
            <div className="flex items-center space-x-3">
              <Link
                to="#"
                className={cn(
                  'h-8 w-8 flex items-center justify-center rounded-full',
                  'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground',
                  'transition-colors duration-200'
                )}
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="#"
                className={cn(
                  'h-8 w-8 flex items-center justify-center rounded-full',
                  'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground',
                  'transition-colors duration-200'
                )}
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to="#"
                className={cn(
                  'h-8 w-8 flex items-center justify-center rounded-full',
                  'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground',
                  'transition-colors duration-200'
                )}
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to="#"
                className={cn(
                  'h-8 w-8 flex items-center justify-center rounded-full',
                  'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground',
                  'transition-colors duration-200'
                )}
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Community St, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+254 712 345 678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@getmorecentre.org</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest news and events.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="max-w-[180px]"
              />
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} GetMore Centre. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
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