import { motion } from "framer-motion";
import { Package, Cable, Hand, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Install the Panel",
    description:
      "Replace your existing switchboard with Zimarix Smart Panel. Fits standard Indian switch boxes.",
  },
  {
    number: "02",
    icon: Cable,
    title: "Connect Appliances",
    description:
      "Connect your lights, fans, AC, and appliances. Our electrician-friendly design makes it simple.",
  },
  {
    number: "03",
    icon: Hand,
    title: "Control Your Way",
    description:
      "Use touch, voice commands, or the Zimarix app. Works with Alexa and Google Home.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Automate & Relax",
    description:
      "Set schedules, create scenes, and let your home work for you. It's that simple.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Four Simple Steps to a{" "}
            <span className="bg-gradient-to-r from-accent to-gold-light bg-clip-text text-transparent">
              Smarter Home
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your home in minutes, not days. No complex setup or
            technical knowledge required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center border border-accent/20 shadow-soft">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-accent text-charcoal text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
