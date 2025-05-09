import { Link } from "react-router-dom";
import { Grid } from "@/components/ui/grid";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const mainLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const programLinks = [
  { label: "Youth Development", href: "/programs#youth" },
  { label: "Adult Education", href: "/programs#adult" },
  { label: "Skills Training", href: "/programs#skills" },
  { label: "Community Support", href: "/programs#support" },
  { label: "Mental Health", href: "/programs#health" },
];


export default function Footer() {
  return (
    <footer className="bg-accent mt-auto">
      <div className="container-width container-padding section-spacing-md">
        <Grid cols={4} gap="lg" className="mb-16">
          <div className="col-span-4 md:col-span-1">
            <Link to="/" className="block mb-6">
              <img src="/logo.svg" alt="GetMore Centre" className="h-12" />
            </Link>
            <p className="text-muted-foreground text-base lg:text-lg mb-6">
              Empowering communities through education, support, and sustainable
              development.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>

          <div className="col-span-4 md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-standard"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-standard"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest news and announcements.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12"
              />
              <Button size="icon" className="h-12 w-12">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Grid>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
            <Link
              to="/privacy"
              className="hover:text-foreground transition-standard"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-standard"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="hover:text-foreground transition-standard"
            >
              Cookie Policy
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} GetMore Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-standard"
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">Social Link</span>
    </a>
  );
}
