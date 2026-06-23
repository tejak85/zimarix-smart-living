import { motion } from "framer-motion";
import heroImage from "@/assets/hero-switch-panel.webp";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background px-4 pb-10 pt-24 sm:min-h-[68vh] sm:px-6 sm:pb-14 lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-8 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-accent/5 to-transparent sm:h-[800px] sm:w-[800px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div className="flex flex-col items-center">
          {/* Right Content - Product Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[1500px]"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 to-blue-light/20 blur-2xl sm:rounded-3xl sm:blur-3xl lg:scale-105" />

              {/* Product Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-muted shadow-elevated sm:rounded-3xl">
                <img
                  src={heroImage}
                  alt="Zimarix premium smart switch panel installed in a modern Indian home"
                  width={1200}
                  height={800}
                  className="h-[360px] w-full object-cover object-center sm:h-[520px] lg:h-auto"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
