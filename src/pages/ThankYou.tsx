import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Thank You | Zimarix</title>
        <meta
          name="description"
          content="Thank you for requesting a Zimarix demo. The Zimarix team will contact you soon."
        />
        <link rel="canonical" href="https://www.zimarix.com/thank-you" />
        <meta property="og:title" content="Thank You | Zimarix" />
        <meta
          property="og:description"
          content="Thank you for requesting a Zimarix demo. The Zimarix team will contact you soon."
        />
        <meta property="og:url" content="https://www.zimarix.com/thank-you" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main>
        <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-[#07090C] pt-28 text-white sm:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(30,140,255,0.2),transparent_30%),linear-gradient(180deg,rgba(7,9,12,0)_0%,#07090C_100%)]" />
          <div className="container-tight relative py-20 sm:py-28">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Demo request received
              </p>
              <h1 className="mt-6 font-heading text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[1.04] tracking-[-0.05em]">
                Thank you — we'll be in touch soon.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-white/68">
                We've received your demo request. Someone from the Zimarix team will
                contact you within 24 hours to schedule your free live demo.
              </p>
              <Link
                to="/"
                className="mt-10 inline-flex text-sm font-semibold text-white/60 underline underline-offset-4 transition-colors hover:text-white"
              >
                Return to homepage
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
