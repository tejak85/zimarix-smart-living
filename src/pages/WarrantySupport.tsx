import { Helmet } from "react-helmet-async";
import { CheckCircle2, Clock, PackageCheck, ShieldCheck, Wrench } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const servicePoints = [
  "48-hour diagnosis from the time you report an issue",
  "Replacement shipped within 5 days if a repair isn't possible on-site",
  "No third-party hand-offs — your panel is serviced by the same engineering team that built it",
];

export default function WarrantySupport() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>5-Year Warranty | Zimarix Support</title>
        <meta
          name="description"
          content="Every Zimarix smart switch panel comes with a 5-year warranty, 48-hour diagnosis, and in-house service."
        />
      </Helmet>

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#07090C] pt-28 text-white sm:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(30,140,255,0.18),transparent_28%),linear-gradient(180deg,rgba(7,9,12,0)_0%,#07090C_100%)]" />
          <div className="container-tight relative py-20 sm:py-24">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Warranty & Support
            </p>
            <h1 className="mt-6 max-w-4xl font-heading text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[1.04] tracking-[-0.05em]">
              5-Year Warranty
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/68">
              Every Zimarix smart switch panel comes with a 5-year warranty.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-tight grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-3xl border border-border bg-muted/40 p-6 sm:p-8">
              <ShieldCheck className="h-10 w-10 text-accent" />
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                Why our service is faster
              </h2>
              <p className="mt-5 text-lg leading-9 text-muted-foreground">
                Most smart home brands assemble products from components sourced across
                multiple manufacturers — so when something fails, support often means
                escalating through someone else's supply chain. Zimarix designs, engineers,
                and manufactures every panel ourselves. That means our service team can
                diagnose the issue directly, without waiting on a third-party vendor.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-background p-6 shadow-elevated sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-muted/30 p-5">
                  <Clock className="h-6 w-6 text-accent" />
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Diagnosis
                  </p>
                  <p className="mt-2 text-2xl font-semibold">48 hours</p>
                </div>
                <div className="rounded-2xl border border-border bg-muted/30 p-5">
                  <PackageCheck className="h-6 w-6 text-accent" />
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Replacement
                  </p>
                  <p className="mt-2 text-2xl font-semibold">5 days</p>
                </div>
                <div className="rounded-2xl border border-border bg-muted/30 p-5">
                  <Wrench className="h-6 w-6 text-accent" />
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Service
                  </p>
                  <p className="mt-2 text-2xl font-semibold">In-house</p>
                </div>
              </div>

              <ul className="mt-8 space-y-4 border-t border-border pt-8">
                {servicePoints.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-7 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
