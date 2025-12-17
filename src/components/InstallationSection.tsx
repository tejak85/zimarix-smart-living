import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const installationPoints = [
  {
    title: "No Rewiring Needed",
    description: "Works with existing wiring in Indian homes",
  },
  {
    title: "Electrician-Friendly",
    description: "Standard installation process your electrician knows",
  },
  {
    title: "Builder Ready",
    description: "Perfect for new construction projects",
  },
  {
    title: "Interior Designer Approved",
    description: "Sleek design that enhances any décor",
  },
];

export function InstallationSection() {
  return (
    <section id="installation" className="section-padding bg-muted/30">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl scale-105" />

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/50">
                <img
                  src="/installation-image.png"
                  alt="Zimarix Installation"
                  className="w-full h-auto"
                />

                {/* Overlay Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4"
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">30</div>
                      <div className="text-xs text-muted-foreground">
                        Min Install
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">0</div>
                      <div className="text-xs text-muted-foreground">
                        Rewiring
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">5</div>
                      <div className="text-xs text-muted-foreground">
                        Year Warranty
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Installation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Simple Setup,{" "}
              <span className="bg-gradient-to-r from-accent to-gold-light bg-clip-text text-transparent">
                Powerful Results
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Designed for hassle-free installation. Whether you're building new
              or renovating, Zimarix fits seamlessly into your home.
            </p>

            <div className="space-y-6 mb-8">
              {installationPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{point.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="gold" size="xl">
              Request Installation Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
