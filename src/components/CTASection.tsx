import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-charcoal to-primary overflow-hidden">
      <div className="container-tight relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 sm:mb-8"
          >
            <span className="text-sm font-medium text-accent">
              Limited Time Offer
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="mb-5 text-3xl font-bold text-primary-foreground sm:mb-6 sm:text-4xl lg:text-6xl">
            Ready to Make Your Home{" "}
            <span className="text-accent">Intelligent?</span>
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:mb-10 sm:text-xl">
            Contact us at
          </p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto flex max-w-sm flex-col items-stretch justify-center gap-3 text-primary-foreground/70 sm:max-w-none sm:flex-row sm:items-center sm:gap-6"
          >
            <div className="flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 sm:border-0 sm:bg-transparent sm:p-0">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <a href="tel:+918867050606" className="hover:text-primary-foreground transition-colors">+91 8867050606</a>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/30" />
            <div className="flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 sm:border-0 sm:bg-transparent sm:p-0">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <a href="tel:+918884184647" className="hover:text-primary-foreground transition-colors">+91 8884184647</a>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/30" />
            <div className="flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 sm:border-0 sm:bg-transparent sm:p-0">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <a href="mailto:sales@zimarix.com" className="hover:text-primary-foreground transition-colors">
                sales@zimarix.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
