import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Product = {
  name: string;
  description: string;
  images: { src: string; alt: string }[];
};

const products: Product[] = [
  {
    name: "Smart Switch Panel",
    description:
      "Milled from aircraft-grade aluminium and anodised in-house. Fits standard Indian switch boxes — no rewiring required.",
    images: [
      {
        src: "/zimarix-luxury-smart-home-switch-panel-marble-wall-bangalore.webp",
        alt: "Zimarix smart switch panel mounted on a marble wall in a living room, Bangalore",
      },
      {
        src: "/zimarix-smart-home-switch-panel-marble-luxury-interior-bangalore.webp",
        alt: "Zimarix smart switch panel on a marble interior wall, Bangalore",
      },
      {
        src: "/zimarix-smart-home-switch-panel-bedside-marble-bangalore.webp",
        alt: "Zimarix smart switch panel beside a bed, next to a bedside lamp, Bangalore",
      },
    ],
  },
  {
    name: "Scene Controller",
    description:
      "A compact, plug-in controller finished to match your panel — for scene triggers and fast charging on the go.",
    images: [
      {
        src: "/zimarix-smart-home-automation-controller-macro-detail.webp",
        alt: "Zimarix scene controller macro detail, showing display and USB-C cable",
      },
    ],
  },
];

function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-3xl leading-none text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-6 sm:top-6"
        aria-label="Close image preview"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>,
    document.body,
  );
}

export default function Products() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Products | Zimarix Smart Home</title>
        <meta
          name="description"
          content="Zimarix smart switch panels and scene controller — milled from aircraft-grade aluminium, anodised in-house, made in Bangalore."
        />
        <link rel="canonical" href="https://www.zimarix.com/products" />
        <meta property="og:title" content="Products | Zimarix Smart Home" />
        <meta
          property="og:description"
          content="Zimarix smart switch panels and scene controller — milled from aircraft-grade aluminium, anodised in-house, made in Bangalore."
        />
        <meta property="og:url" content="https://www.zimarix.com/products" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#07090C] pt-28 text-white sm:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(30,140,255,0.18),transparent_28%),linear-gradient(180deg,rgba(7,9,12,0)_0%,#07090C_100%)]" />
          <div className="container-tight relative py-20 sm:py-24">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Products
            </p>
            <h1 className="mt-6 max-w-4xl font-heading text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[1.04] tracking-[-0.05em]">
              Panels &amp; controller.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/68">
              Every piece designed, engineered, and manufactured in-house.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-tight space-y-16 sm:space-y-20">
            {products.map((product, productIndex) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: productIndex * 0.05 }}
              >
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                  {product.name}
                </h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-muted-foreground">
                  {product.description}
                </p>

                <div
                  className={`mt-8 grid grid-cols-1 gap-4 sm:gap-6 ${
                    product.images.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-1"
                  }`}
                >
                  {product.images.map((image) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setLightboxImage(image)}
                      className="group overflow-hidden rounded-2xl border border-border/50 shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:rounded-3xl"
                      aria-label={`Open larger image: ${image.alt}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}
