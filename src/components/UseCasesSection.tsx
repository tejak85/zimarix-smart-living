import { motion } from "framer-motion";
import { Home, Building2, HardHat, Hotel } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "New Home Construction",
    description:
      "Build smart from day one. Perfect integration during construction phase.",
    image: "/usecase-home.png",
  },
  {
    icon: Building2,
    title: "Luxury Apartments & Villas",
    description:
      "Premium automation for premium living. Impress residents with modern amenities.",
    image: "/usecase-apartment.png",
  },
  {
    icon: HardHat,
    title: "Renovations",
    description:
      "Upgrade existing homes without major rewiring. Simple and effective.",
    image: "/usecase-renovation.png",
  },
  {
    icon: Hotel,
    title: "Smart Offices & Hotels",
    description:
      "Centralized control for commercial spaces. Save energy, enhance experience.",
    image: "/usecase-hotel.png",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="section-padding">
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
            Ideal For
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for Every{" "}
            <span className="bg-gradient-to-r from-accent to-gold-light bg-clip-text text-transparent">
              Space
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From cozy homes to sprawling hotels, Zimarix adapts to your unique
            needs.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-muted/50 border border-border/50 hover:shadow-elevated transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
