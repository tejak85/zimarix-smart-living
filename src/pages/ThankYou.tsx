import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const DEMO_VIDEO_URL = "https://youtube.com/shorts/jgtshkQz_ic";
const DEMO_VIDEO_THUMBNAIL = "https://img.youtube.com/vi/jgtshkQz_ic/hqdefault.jpg";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Thank You | Zimarix</title>
        <meta
          name="description"
          content="Your Zimarix home demo request is confirmed. We'll call you within 24 hours to schedule your free home demo."
        />
        <link rel="canonical" href="https://www.zimarix.com/thank-you" />
        <meta property="og:title" content="Thank You | Zimarix" />
        <meta
          property="og:description"
          content="Your Zimarix home demo request is confirmed. We'll call you within 24 hours to schedule your free home demo."
        />
        <meta property="og:url" content="https://www.zimarix.com/thank-you" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#07090C] pt-28 text-white sm:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(30,140,255,0.2),transparent_30%),linear-gradient(180deg,rgba(7,9,12,0)_0%,#07090C_100%)]" />
          <div className="container-tight relative py-16 sm:py-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Demo request received
              </p>
              <h1 className="mt-6 font-heading text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[1.04] tracking-[-0.05em]">
                You&apos;re on the list.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-white/68">
                We&apos;ll call you within 24 hours to schedule your free home demo. In the
                meantime, watch how Zimarix works without WiFi or internet:
              </p>

              <a
                href={DEMO_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 block max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl transition-transform hover:-translate-y-0.5"
              >
                <div className="relative aspect-video overflow-hidden bg-[#0C1016]">
                  <img
                    src={DEMO_VIDEO_THUMBNAIL}
                    alt="Watch how Zimarix smart home automation works without WiFi or internet"
                    width={480}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-semibold text-accent-foreground shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                      ▶
                    </span>
                  </div>
                </div>
              </a>

              <p className="mt-8 text-sm leading-7 text-white/52">
                Questions? Call us directly:{" "}
                <a className="text-white/72 underline underline-offset-4 hover:text-white" href="tel:+918867050606">
                  +91 88670 50606
                </a>{" "}
                or email{" "}
                <a
                  className="text-white/72 underline underline-offset-4 hover:text-white"
                  href="mailto:contact@zimarix.com"
                >
                  contact@zimarix.com
                </a>
              </p>

              <Link
                to="/"
                className="mt-8 inline-flex text-sm font-semibold text-white/60 underline underline-offset-4 transition-colors hover:text-white"
              >
                ← Back to zimarix.com
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
