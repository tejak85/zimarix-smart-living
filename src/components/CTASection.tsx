import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <span className="text-sm font-medium text-accent">
              Limited Time Offer
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Make Your Home{" "}
            <span className="text-accent">Intelligent?</span>
          </h2>

          <p className="text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of Indian homeowners who have already upgraded to
            Zimarix. Experience the future of home automation today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" className="group">
              Upgrade Your Switchboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Calendar className="w-5 h-5" />
              Book a Demo
            </Button>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/60"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+918867050606" className="hover:text-primary-foreground transition-colors">+91 88670 50606</a>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/30" />
            <span>sales@zimarix.com</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
