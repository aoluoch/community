import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  
  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    // Reset timeout when current changes or autoplay is toggled
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    if (autoplay) {
      timeoutRef.current = window.setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [current, autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section 
      className="w-full py-12 md:py-24 bg-primary/5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            What People Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed"
          >
            Hear from those who have experienced our programs firsthand.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-background">
                    <CardContent className="p-6 md:p-8">
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <p className="text-lg md:text-xl italic mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 border-2 border-primary/10">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className={cn(
              "absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10",
              "rounded-full bg-background shadow-md md:flex hidden"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className={cn(
              "absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10",
              "rounded-full bg-background shadow-md md:flex hidden"
            )}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === current ? "bg-primary w-4" : "bg-primary/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}