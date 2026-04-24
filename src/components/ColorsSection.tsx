import { motion } from "framer-motion";
import colorOptionsImg from "@/assets/color-options.jpeg";

const finishes = [
  {
    name: "Obsidian Black",
    description: "Glossy black glass with chrome accents.",
    swatch: "linear-gradient(135deg, hsl(0 0% 8%), hsl(0 0% 18%))",
  },
  {
    name: "Graphite Matte",
    description: "Soft matte black aluminum, stealth look.",
    swatch: "linear-gradient(135deg, hsl(0 0% 14%), hsl(0 0% 26%))",
  },
  {
    name: "Brushed Silver",
    description: "Anodized aluminum with brushed texture.",
    swatch: "linear-gradient(135deg, hsl(0 0% 78%), hsl(0 0% 92%))",
  },
  {
    name: "Midnight Blue",
    description: "Deep blue glass with metallic shimmer.",
    swatch: "linear-gradient(135deg, hsl(220 60% 12%), hsl(220 50% 24%))",
  },
  {
    name: "Espresso Bronze",
    description: "Warm bronze for wooden interiors.",
    swatch: "linear-gradient(135deg, hsl(20 30% 15%), hsl(25 35% 28%))",
  },
];

export function ColorsSection() {
  return (
    <section id="colors" className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Finishes &amp; <span className="text-accent">Colors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Crafted from anodized aluminum. Choose a finish that blends seamlessly
            with your interior.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-border/50 shadow-elevated mb-16"
        >
          <img
            src={colorOptionsImg}
            alt="Zimarix smart switch panels in five finishes"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {finishes.map((finish, i) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-500"
            >
              <div className="h-32 w-full" style={{ background: finish.swatch }} />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1.5">{finish.name}</h3>
                <p className="text-sm text-muted-foreground">{finish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
