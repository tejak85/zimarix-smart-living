import { motion } from "framer-motion";
import { Home, Building2, Hotel } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "New Home Construction",
    description:
      "Build smart from day one. Perfect integration during construction phase.",
    gradient: "from-accent/30 via-blue-light/15 to-primary/80",
  },
  {
    icon: Building2,
    title: "Luxury Apartments & Villas",
    description:
      "Premium automation for premium living. Impress residents with modern amenities.",
    gradient: "from-blue-light/25 via-accent/10 to-charcoal/90",
  },
  {
    icon: Hotel,
    title: "Smart Offices & Hotels",
    description:
      "Centralized control for commercial spaces. Save energy, enhance experience.",
    gradient: "from-silver/30 via-accent/10 to-primary/90",
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
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Ideal For
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl lg:text-5xl">
            Built for Every{" "}
            <span className="bg-gradient-to-r from-accent to-blue-light bg-clip-text text-transparent">
              Space
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            From cozy homes to sprawling hotels, Zimarix adapts to your unique
            needs.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-muted/50 transition-all duration-500 hover:shadow-elevated sm:rounded-3xl"
            >
              <div className="aspect-[4/5] overflow-hidden sm:aspect-[16/10]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_32%),radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.12),transparent_28%)]" />
                <div className="absolute inset-x-6 top-8 h-20 rounded-full bg-primary-foreground/10 blur-2xl" />
                <div className="absolute right-6 top-6 h-20 w-20 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 backdrop-blur-sm" />
                <div className="absolute left-6 top-20 h-28 w-36 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm sm:top-24" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20 backdrop-blur-sm sm:h-12 sm:w-12">
                    <useCase.icon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-primary-foreground sm:text-xl">
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
