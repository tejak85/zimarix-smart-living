import { motion } from "framer-motion";

export function OverviewSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-widest uppercase text-accent mb-6"
          >
            Zimarix Overview
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10"
          >
            Zimarix creates extreme-premium smart switch panels built for people
            who don't accept "good enough." We treat the switch panel as a piece
            of functional art—something you touch every day, something that
            should feel timeless, precise, and unquestionably high-end. After
            years of iteration and dozens of revisions, our product philosophy
            is simple: perfection is not optional.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-gold-light to-accent bg-clip-text text-transparent"
          >
            Good Isn't Enough
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
