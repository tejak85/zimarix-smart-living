import { motion } from "framer-motion";
import {
  Fingerprint,
  Wifi,
  WifiOff,
  Shield,
  Wrench,
  Clock,
  Eye,
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Smart Touch Control",
    description:
      "Premium capacitive touch with anodized aluminum panel. Responsive and elegant.",
  },
  {
    icon: WifiOff,
    title: "Works Online & Offline",
    description:
      "Local control even without internet. Never lose access to your home.",
  },
  {
    icon: Shield,
    title: "Encrypted Communication",
    description:
      "Enterprise-grade security with end-to-end encryption for peace of mind.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    description:
      "Fits standard Indian switch boxes. No rewiring required — electrician friendly.",
  },
  {
    icon: Clock,
    title: "Scheduling & Automation",
    description:
      "Create clusters, timers, and scenes. Automate your daily routines effortlessly.",
  },
  {
    icon: Eye,
    title: "Smart Monitoring",
    description:
      "Intrusion detection and real-time alerts. Know what's happening at home.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-muted/30">
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
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for a{" "}
            <span className="bg-gradient-to-r from-accent to-gold-light bg-clip-text text-transparent">
              Smarter Home
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Zimarix combines cutting-edge technology with elegant design, built
            specifically for Indian homes and power conditions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
