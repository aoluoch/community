import { Section } from "@/components/ui/section";
import { Grid } from "@/components/ui/grid";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Community Street, Nairobi, Kenya",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@getmorecentre.org",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+254 712 345 678",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: "Mon - Fri: 9:00 AM - 5:00 PM",
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with us. We're here to help and answer any questions you may have."
      />

      <Section>
        <Grid cols={4} gap="lg" className="mb-16">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </Grid>

        <div className="max-w-[800px] mx-auto">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
