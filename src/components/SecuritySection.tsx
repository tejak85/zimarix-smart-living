import { motion } from "framer-motion";
import { Shield, Lock, Zap, CheckCircle2 } from "lucide-react";

const securityFeatures = [
  "End-to-end encrypted communication",
  "Safe for Indian power conditions",
  "Surge protection built-in",
  "No cloud dependency for basic operations",
  "Regular firmware security updates",
  "ISI certified components",
];

export function SecuritySection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Security & Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Built for{" "}
              <span className="text-accent">Trust</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed">
              Your home deserves the highest level of protection. Zimarix is
              engineered with enterprise-grade security and built to handle
              India's unique power challenges.
            </p>

            <div className="grid gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl scale-110" />

              {/* Security Visual Grid */}
              <div className="relative grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
                >
                  <Shield className="w-10 h-10 text-accent mb-4" />
                  <h4 className="font-semibold mb-2">256-bit Encryption</h4>
                  <p className="text-sm text-primary-foreground/60">
                    Military-grade security for your data
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 mt-8"
                >
                  <Lock className="w-10 h-10 text-accent mb-4" />
                  <h4 className="font-semibold mb-2">Local Processing</h4>
                  <p className="text-sm text-primary-foreground/60">
                    Your data stays in your home
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
                >
                  <Zap className="w-10 h-10 text-accent mb-4" />
                  <h4 className="font-semibold mb-2">Surge Protection</h4>
                  <p className="text-sm text-primary-foreground/60">
                    Built for Indian power conditions
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-accent to-gold-light rounded-2xl p-6 mt-8"
                >
                  <div className="text-charcoal">
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <p className="text-sm font-medium">Uptime Guarantee</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
