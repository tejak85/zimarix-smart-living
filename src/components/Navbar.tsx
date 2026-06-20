import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Craft", href: "/#craftsmanship" },
  { name: "Reliability", href: "/#reliability" },
  { name: "Intelligence", href: "/#intelligence" },
  { name: "Engineering", href: "/#engineering" },
  { name: "Warranty", href: "/warranty" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 text-foreground backdrop-blur-xl border-b border-border/50 shadow-soft"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container-tight">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/zimarix-logo.png"
              alt="Zimarix"
              className="h-9 w-9 flex-shrink-0 rounded-xl object-cover sm:h-10 sm:w-10"
            />
            <span className="truncate text-lg font-bold tracking-tight sm:text-xl">
              Zimarix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#consultation"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Book
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`rounded-lg p-2 transition-colors md:hidden ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background/95 shadow-soft backdrop-blur-xl md:hidden"
          >
            <div className="container-tight flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-xl px-3 py-3 font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#consultation"
                className="mt-2 rounded-xl bg-accent px-3 py-3 text-center font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
