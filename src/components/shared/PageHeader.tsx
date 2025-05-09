import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="w-full py-12 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}