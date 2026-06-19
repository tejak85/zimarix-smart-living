import { motion } from "framer-motion";
import colorOptionsImg from "@/assets/color-options.jpeg";

const finishes = [
  {
    name: "Obsidian Black",
    swatch: "linear-gradient(135deg, hsl(0 0% 8%), hsl(0 0% 18%))",
  },
  {
    name: "Silver",
    swatch: "linear-gradient(135deg, hsl(0 0% 78%), hsl(0 0% 92%))",
  },
  {
    name: "Dark Olive Brown",
    swatch: "linear-gradient(135deg, hsl(60 15% 12%), hsl(55 20% 22%))",
  },
  {
    name: "Espresso Bronze",
    swatch: "linear-gradient(135deg, hsl(20 30% 15%), hsl(25 35% 28%))",
  },
  {
    name: "Grey",
    swatch: "linear-gradient(135deg, hsl(0 0% 40%), hsl(0 0% 55%))",
  },
];

export function ColorsSection() {
  return (
    <section id="colors" className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Finishes &amp; <span className="text-accent">Colors</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Crafted from anodized aluminum. Choose a finish that blends seamlessly
            with your interior.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-10 overflow-hidden rounded-2xl border border-border/50 shadow-elevated sm:mb-16 sm:rounded-3xl"
        >
          <img
            src={colorOptionsImg}
            alt="Zimarix smart switch panels in five finishes"
            className="h-[260px] w-full object-cover object-center sm:h-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {finishes.map((finish, i) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:shadow-elevated"
            >
              <div className="h-24 w-full sm:h-32" style={{ background: finish.swatch }} />
              <div className="p-5 text-center sm:p-6">
                <h3 className="font-serif text-lg tracking-wide">{finish.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
