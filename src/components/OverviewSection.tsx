import { motion } from "framer-motion";

export function OverviewSection() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-14 sm:py-20 lg:py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent sm:mb-6"
          >
            Zimarix Overview
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass-card mb-8 rounded-3xl p-6 text-left sm:mb-10 sm:p-10"
          >
            <p className="mb-6 text-xl font-semibold leading-snug text-foreground sm:text-2xl lg:text-3xl">
              Zimarix is a smart switch panel engineered from the ground up — not assembled
              from available parts.
            </p>

            <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
              <p>
                Every panel is milled from{" "}
                <span className="font-semibold text-foreground">
                  aircraft-grade aluminium 6061 T6
                </span>{" "}
                — the same alloy used in aerospace and premium electronics — then anodised
                in-house to a consistent{" "}
                <span className="font-semibold text-foreground">20+ micron finish</span>,
                not for aesthetics, but because it distributes heat evenly, detects
                temperature accurately, and outlasts everything around it. Even the touch
                buttons are milled.
              </p>

              <p>
                Beneath the surface, Zimarix runs on{" "}
                <span className="font-semibold text-foreground">ZX</span> — a proprietary
                protocol built in-house for mission-critical reliability and extreme low
                latency. The architecture uses{" "}
                <span className="font-semibold text-foreground">
                  low level socket design
                </span>
                , the same standard found in aerospace, medical, and defence systems. Not
                because we had to. Because nothing else was precise enough.
              </p>
            </div>

            <div className="mt-8 border-t border-border/70 pt-6 text-center">
              <p className="text-lg font-semibold leading-relaxed text-foreground sm:text-2xl">
                We didn't start with how it looks.
              </p>
              <p className="text-lg font-semibold leading-relaxed text-foreground sm:text-2xl">
                We started with what it has to survive.
              </p>
              <p className="text-lg font-semibold leading-relaxed text-foreground sm:text-2xl">
                The rest followed.
              </p>
              <p className="mt-2 bg-gradient-to-r from-accent via-blue-light to-accent bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">
                Built where others stop.
              </p>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="sr-only"
          >
            Built where others stop.
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
