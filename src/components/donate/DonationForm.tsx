import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, Calendar, CreditCard, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DonationTier } from "@/types";

const formSchema = z.object({
  amount: z.string().min(1, "Please enter an amount"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  cardNumber: z
    .string()
    .min(16, "Invalid card number")
    .max(16, "Invalid card number"),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Invalid expiry date"),
  cvv: z.string().min(3, "Invalid CVV").max(4, "Invalid CVV"),
});

interface DonationFormProps {
  selectedTier: DonationTier;
}

export default function DonationForm({ selectedTier }: DonationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: selectedTier.amount.toString(),
      fullName: "",
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: "Donation successful",
        description: "Thank you for your generous donation!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error processing donation",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 lg:p-8 border-none shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-6">
                Donation Amount
              </h3>
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base lg:text-lg">
                      Amount ($)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        className="h-12 text-base lg:text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-base" />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-6">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base lg:text-lg">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          className="h-12 text-base lg:text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-base" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base lg:text-lg">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email"
                          className="h-12 text-base lg:text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-base" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-6">
                Payment Information
              </h3>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base lg:text-lg">
                        Card Number
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="1234 5678 9012 3456"
                            className="h-12 text-base lg:text-lg"
                            {...field}
                          />
                          <CreditCard className="absolute right-4 top-3.5 h-5 w-5 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-base" />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base lg:text-lg">
                          Expiry Date
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="MM/YY"
                              className="h-12 text-base lg:text-lg"
                              {...field}
                            />
                            <Calendar className="absolute right-4 top-3.5 h-5 w-5 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-base" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base lg:text-lg">
                          CVV/CVC
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="123"
                              className="h-12 text-base lg:text-lg"
                              {...field}
                            />
                            <Lock className="absolute right-4 top-3.5 h-5 w-5 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-base" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-base lg:text-lg h-12 lg:h-14"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                `Donate $${form.getValues("amount")}`
              )}
            </Button>
          </form>
        </Form>
      </Card>
    </motion.div>
  );
}
