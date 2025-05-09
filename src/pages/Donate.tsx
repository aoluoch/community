import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DonationTier as DonationTierType } from '@/types';
import { donationTiers } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import DonationTier from '@/components/donate/DonationTier';
import DonationForm from '@/components/donate/DonationForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  LucideQrCode, 
  CreditCard, 
  SquareCheck, 
  Coins, 
  HelpCircle, 
  AlignLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Donate() {
  const [selectedTier, setSelectedTier] = useState<DonationTierType | null>(null);
  
  useEffect(() => {
    document.title = 'Donate - GetMore Centre';
  }, []);

  const handleSelectTier = (tier: DonationTierType) => {
    setSelectedTier(tier);
  };

  return (
    <>
      <PageHeader 
        title="Support Our Mission" 
        description="Your contribution helps us create positive change in our community." 
      />

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 p-6 rounded-lg inline-block mb-6"
            >
              <Heart className="h-10 w-10 text-primary mx-auto" fill="currentColor" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold mb-4"
            >
              Make a Difference Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-6"
            >
              Your generous donation allows us to continue providing valuable programs and services to those who need them most in our community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <div className="flex items-center">
                <SquareCheck className="h-5 w-5 text-primary mr-2" />
                <span>Tax Deductible</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-primary mr-2" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center">
                <Coins className="h-5 w-5 text-primary mr-2" />
                <span>Transparent Impact</span>
              </div>
            </motion.div>
          </div>

          <Tabs defaultValue="donation-tiers" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="donation-tiers">Choose Amount</TabsTrigger>
              <TabsTrigger value="payment-details">Payment Details</TabsTrigger>
              <TabsTrigger value="other-ways">Other Ways to Help</TabsTrigger>
            </TabsList>
            
            <TabsContent value="donation-tiers">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {donationTiers.map((tier) => (
                  <DonationTier 
                    key={tier.id}
                    tier={tier}
                    onSelect={handleSelectTier}
                    isSelected={selectedTier?.id === tier.id}
                  />
                ))}
              </motion.div>
              
              <div className="flex justify-end mt-8">
                <Button 
                  size="lg"
                  onClick={() => document.querySelector('[data-value="payment-details"]')?.click()}
                  disabled={!selectedTier}
                >
                  Continue to Payment
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="payment-details">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <h3 className="text-xl font-bold mb-4">Donation Summary</h3>
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span>Donation Amount:</span>
                          <span className="font-bold">
                            ${selectedTier?.amount || "0"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Donation Type:</span>
                          <span>{selectedTier?.title || "None selected"}</span>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex justify-between font-bold">
                          <span>Total:</span>
                          <span>${selectedTier?.amount || "0"}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full mt-4"
                        onClick={() => document.querySelector('[data-value="donation-tiers"]')?.click()}
                      >
                        Edit Donation
                      </Button>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-4">Payment Method</h3>
                      <DonationForm />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="other-ways">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <AlignLeft className="h-5 w-5 mr-2 text-primary" />
                        Other Ways to Support
                      </h3>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Volunteer Your Time</AccordionTrigger>
                          <AccordionContent>
                            Contribute your skills and time to help with our programs. 
                            We need mentors, tutors, event organizers, and more.
                            <Button variant="link" className="mt-2 p-0" asChild>
                              <a href="/contact?type=volunteer">Learn More</a>
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Donate Supplies</AccordionTrigger>
                          <AccordionContent>
                            We accept donations of computers, books, art supplies, 
                            and other materials that support our educational programs.
                            <Button variant="link" className="mt-2 p-0" asChild>
                              <a href="/contact">Contact Us</a>
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>Corporate Partnerships</AccordionTrigger>
                          <AccordionContent>
                            Partner with us through sponsorships, employee volunteer 
                            programs, or skill-based volunteering.
                            <Button variant="link" className="mt-2 p-0" asChild>
                              <a href="/contact?type=partnership">Learn More</a>
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger>Legacy Giving</AccordionTrigger>
                          <AccordionContent>
                            Include GetMore Centre in your will or estate plans to 
                            create a lasting impact on future generations.
                            <Button variant="link" className="mt-2 p-0" asChild>
                              <a href="/contact">Contact Us</a>
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                        Donation FAQ
                      </h3>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="faq-1">
                          <AccordionTrigger>Is my donation tax-deductible?</AccordionTrigger>
                          <AccordionContent>
                            Yes, GetMore Centre is a registered non-profit organization, 
                            and your donation is tax-deductible to the extent allowed by law.
                            We will provide a receipt for your donation.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2">
                          <AccordionTrigger>How is my donation used?</AccordionTrigger>
                          <AccordionContent>
                            Your donation directly supports our programs and services, 
                            including youth skills training, women's empowerment initiatives, 
                            and community support services. We maintain transparent financial 
                            reporting.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-3">
                          <AccordionTrigger>Can I make a recurring donation?</AccordionTrigger>
                          <AccordionContent>
                            Yes, you can set up a monthly recurring donation by selecting the 
                            option during the payment process. Recurring donations provide steady 
                            support for our ongoing programs.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-4">
                          <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                          <AccordionContent>
                            Yes, we use industry-standard encryption and secure payment 
                            processors to ensure your payment information is protected. 
                            We do not store your credit card details.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 border rounded-lg bg-primary/5">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="md:w-1/4 flex justify-center">
                        <LucideQrCode className="h-24 w-24 text-primary" />
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold mb-2">Mobile Payment Option</h3>
                        <p className="text-muted-foreground mb-4">
                          You can also donate using mobile payment services by scanning 
                          our QR code or sending directly to our account.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <div>
                            <p className="font-medium">M-Pesa:</p>
                            <p className="text-muted-foreground">123456</p>
                          </div>
                          <div>
                            <p className="font-medium">Account Name:</p>
                            <p className="text-muted-foreground">GetMore Centre</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}