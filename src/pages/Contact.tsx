import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - GetMore Centre';
  }, []);

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our team for inquiries, partnerships, or support." 
      />

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-card rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mt-0.5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">123 Community St, Nairobi, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+254 712 345 678</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@getmorecentre.org</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>Monday - Friday</span>
                      </div>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>Saturday</span>
                      </div>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>Sunday</span>
                      </div>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Visit Our Centre</h3>
                  <div className="aspect-video overflow-hidden rounded-md mb-4">
                    {/* Google Maps embed - replace with actual embed code */}
                    <div className="bg-accent h-full w-full flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-muted-foreground">Interactive map would be embedded here</p>
                        <Button variant="link" className="mt-2">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View on Google Maps
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Our community centre is easily accessible via public transport. Free parking is available for visitors.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Volunteer or Partner With Us</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Interested in volunteering or establishing a partnership? 
                    We're always looking for dedicated individuals and organizations to help us make a difference.
                  </p>
                  <div className="flex space-x-2">
                    <Button asChild>
                      <a href="/contact?type=volunteer">Volunteer</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/contact?type=partnership">Partnerships</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}