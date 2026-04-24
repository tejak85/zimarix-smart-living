import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import colorOptionsImg from "@/assets/color-options.jpeg";

const finishes = [
  {
    name: "Obsidian Black",
    description: "Glossy black glass with chrome accents — bold and modern.",
    swatch: "linear-gradient(135deg, hsl(0 0% 8%), hsl(0 0% 18%))",
  },
  {
    name: "Graphite Matte",
    description: "Soft matte black aluminum for a stealth, understated look.",
    swatch: "linear-gradient(135deg, hsl(0 0% 14%), hsl(0 0% 26%))",
  },
  {
    name: "Brushed Silver",
    description: "Anodized aluminum with a fine brushed texture.",
    swatch: "linear-gradient(135deg, hsl(0 0% 78%), hsl(0 0% 92%))",
  },
  {
    name: "Midnight Blue",
    description: "Deep blue glass with subtle metallic shimmer.",
    swatch: "linear-gradient(135deg, hsl(220 60% 12%), hsl(220 50% 24%))",
  },
  {
    name: "Espresso Bronze",
    description: "Warm bronze finish that complements wooden interiors.",
    swatch: "linear-gradient(135deg, hsl(20 30% 15%), hsl(25 35% 28%))",
  },
];

export default function Colors() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-6 -ml-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
              </Button>
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Finishes &amp; <span className="text-accent">Colors</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Every Zimarix panel is crafted from anodized aluminum and tempered glass.
              Choose a finish that blends seamlessly with your interior.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-border/50 shadow-elevated mb-20"
          >
            <img
              src={colorOptionsImg}
              alt="Zimarix smart switch panels in five finishes"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Finish Grid */}
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
                <div
                  className="h-40 w-full"
                  style={{ background: finish.swatch }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{finish.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {finish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center bg-muted/30 border border-border/50 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Need a custom finish?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We offer bespoke colors and textures for premium projects. Talk to our
              design team to match your space exactly.
            </p>
            <Button variant="gold">Request Custom Finish</Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
