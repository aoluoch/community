import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              To empower underserved communities by providing access to education, skills training, and support services that create pathways to social and economic independence.
            </p>
            <h2 className="text-3xl font-bold tracking-tighter pt-6">Our Vision</h2>
            <p className="text-muted-foreground text-lg">
              We envision vibrant, self-sustaining communities where all members have the opportunity to develop their potential and contribute meaningfully to society.
            </p>
            <h2 className="text-3xl font-bold tracking-tighter pt-6">Our Values</h2>
            <ul className="space-y-2 text-muted-foreground text-lg">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Inclusion:</span>
                Creating spaces where everyone belongs, regardless of background.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Innovation:</span>
                Finding creative solutions to complex community challenges.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Impact:</span>
                Measurable, sustainable change that transforms lives.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Integrity:</span>
                Upholding the highest standards of honesty and accountability.
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Community members collaborating" 
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 bg-primary/10 p-8 rounded-xl"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-6 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Youth Development</h3>
              <p className="text-muted-foreground">
                500+ young adults trained in technology skills, with 75% securing employment or starting businesses within six months.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Women's Empowerment</h3>
              <p className="text-muted-foreground">
                Supported 300+ women with entrepreneurship training, leadership development, and microfinance connections.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Community Support</h3>
              <p className="text-muted-foreground">
                Provided mental health resources, family services, and social support to 1000+ community members since founding.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}