import { motion } from "framer-motion";
import {
  Fingerprint,
  Wifi,
  WifiOff,
  Shield,
  Wrench,
  Clock,
  Eye,
  Radio,
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
  {
    icon: Radio,
    title: "Universal IR Control",
    description:
      "Record any remote and control TVs, ACs, and appliances from your phone. No more juggling multiple remotes.",
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
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Features
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl lg:text-5xl">
            Everything You Need for a{" "}
            <span className="bg-gradient-to-r from-accent to-blue-light bg-clip-text text-transparent">
              Smarter Home
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Zimarix combines cutting-edge technology with elegant design, built
            specifically for Indian homes and power conditions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
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
              <div className="glass-card h-full rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated sm:p-8">
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 transition-transform duration-500 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14">
                  <feature.icon className="h-6 w-6 text-accent sm:h-7 sm:w-7" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
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
