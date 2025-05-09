import { motion } from 'framer-motion';
import { stats } from '@/lib/data';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState<string[]>(stats.map(() => "0"));

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        let allDone = true;
        
        setCounters(prev => 
          prev.map((value, i) => {
            const targetValue = stats[i].value;
            
            // If target is percentage, we'll animate to the number
            const targetNum = parseInt(targetValue.replace(/\D/g, ''));
            const currentNum = parseInt(value.replace(/\D/g, ''));
            
            // If current value reached target, keep it
            if (currentNum >= targetNum) {
              return targetValue;
            }
            
            allDone = false;
            const increment = Math.ceil(targetNum / 20); // Adjust speed
            const newValue = Math.min(currentNum + increment, targetNum);
            
            // Add % if original had it
            if (targetValue.includes('%')) {
              return `${newValue}%`;
            }
            
            return `${newValue}${targetValue.includes('+') ? '+' : ''}`;
          })
        );
        
        if (allDone) {
          clearInterval(interval);
        }
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="w-full py-12 md:py-16 bg-accent">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, i) => (
            <div key={stat.id} className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold">{counters[i]}</h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}