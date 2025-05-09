import { motion } from "framer-motion";
import { Grid } from "@/components/ui/grid";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    value: 5000,
    suffix: "+",
    label: "Community Members",
    description: "Active participants in our programs",
  },
  {
    id: 2,
    value: 50,
    suffix: "+",
    label: "Programs",
    description: "Educational and support initiatives",
  },
  {
    id: 3,
    value: 100,
    suffix: "%",
    label: "Success Rate",
    description: "Program completion rate",
  },
  {
    id: 4,
    value: 10,
    suffix: "K",
    label: "Volunteer Hours",
    description: "Contributed by our community",
  },
];

export default function Stats() {
  return (
    <div className="container-width container-padding">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Our Impact in Numbers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[800px] text-muted-foreground text-lg md:text-xl"
        >
          Measuring our community's growth and achievements
        </motion.p>
      </div>

      <Grid cols={4} gap="lg">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center space-y-2"
          >
            <div className="text-4xl lg:text-5xl font-bold text-primary">
              <CountUp
                end={stat.value}
                duration={2.5}
                suffix={stat.suffix}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold">{stat.label}</h3>
            <p className="text-base lg:text-lg text-muted-foreground">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </Grid>
    </div>
  );
}
