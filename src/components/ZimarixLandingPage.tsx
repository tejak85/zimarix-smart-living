import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bluetooth,
  ChevronRight,
  Cloud,
  Cpu,
  Mail,
  Phone,
  PlayCircle,
  Router,
  Server,
  Smartphone,
} from "lucide-react";
import appDevices from "@/assets/app-devices.png";
import anodisedFinishPanels from "@/assets/anodised-finish-panels.png";
import apartmentHallway from "@/assets/apartment-hallway.png";
import appRemote from "@/assets/app-remote.png";
import appRooms from "@/assets/app-rooms.png";
import appSwitches from "@/assets/app-switches.png";
import cncMilledAluminiumGrain from "@/assets/cnc-milled-aluminium-grain.png";
import diningRoomAutomation from "@/assets/dining-room-automation.png";
import homeTheatreWall from "@/assets/home-theatre-wall.png";
import heroLuxuryBackground from "@/assets/hero-luxury-background.png";
import livingRoomInstall from "@/assets/living-room-install.png";
import masterBedroomPanel from "@/assets/master-bedroom-panel.png";
import milledTouchButton from "@/assets/milled-touch-button.png";
import villaEntranceFoyer from "@/assets/villa-entrance-foyer.png";
import zimarixExplodedView from "@/assets/zimarix-exploded-view.png";
import zimarixFinishesGroupPhoto from "@/assets/zimarix-finishes-group-photo.png";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackGAEvent(eventName: string, eventParams?: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, eventParams ?? {});
}

function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-accent">
      {children}
    </p>
  );
}

function ConsultationCTA({
  variant = "primary",
  className = "",
  trackingLocation = "unknown",
}: {
  variant?: "primary" | "secondary";
  className?: string;
  trackingLocation?: string;
}) {
  const isPrimary = variant === "primary";

  return (
    <a
      href="#consultation"
      onClick={() =>
        trackGAEvent("book_consultation_click", {
          location: trackingLocation,
        })
      }
      className={`inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-7 ${
        isPrimary
          ? "border-accent bg-accent text-accent-foreground shadow-blue hover:-translate-y-0.5 hover:bg-accent/90"
          : "border-foreground/15 bg-background/70 text-foreground hover:border-accent hover:text-accent"
      } ${className}`}
    >
      Book a Consultation
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function DemoVideoButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-3 rounded-full border border-foreground/15 bg-background/70 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <PlayCircle className="h-4 w-4" />
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

function ClusterAutomationVisual() {
  const reduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className={`cluster-automation ${isActive && !reduceMotion ? "is-active" : ""}`}
      aria-hidden="true"
      viewport={{ once: true, amount: 0.75 }}
      onViewportEnter={() => {
        if (!reduceMotion) {
          setIsActive(true);
        }
      }}
    >
      <svg className="cluster-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 14 50 C 24 50, 30 50, 39 50" />
        <path d="M 45 50 C 58 50, 62 22, 80 22" />
        <path d="M 45 50 C 58 50, 62 50, 80 50" />
        <path d="M 45 50 C 58 50, 62 78, 80 78" />
      </svg>
      <div className="cluster-node cluster-device">Home</div>
      <div className="cluster-node cluster-tap">Tap</div>
      <div className="cluster-output cluster-output-light">
        <span>Light</span>
      </div>
      <div className="cluster-output cluster-output-fan">
        <span>Fan</span>
      </div>
      <div className="cluster-output cluster-output-ac">
        <span>AC</span>
      </div>
      <div className="cluster-signal cluster-signal-ac">IR signal</div>
      <div className="cluster-pulse cluster-pulse-tap" />
      <div className="cluster-pulse cluster-pulse-light" />
      <div className="cluster-pulse cluster-pulse-fan" />
      <div className="cluster-pulse cluster-pulse-ac" />
    </motion.div>
  );
}

function SecurityWatchVisual() {
  const reduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className={`watch-automation ${isActive && !reduceMotion ? "is-active" : ""}`}
      aria-hidden="true"
      viewport={{ once: true, amount: 0.75 }}
      onViewportEnter={() => {
        if (!reduceMotion) {
          setIsActive(true);
        }
      }}
    >
      <svg className="watch-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 19 50 C 30 50, 35 50, 43 50" />
        <path d="M 49 50 C 60 50, 65 25, 82 25" />
        <path d="M 49 50 C 60 50, 66 50, 84 50" />
        <path d="M 49 50 C 60 50, 65 75, 82 75" />
      </svg>
      <div className="watch-home">
        <span>Home</span>
      </div>
      <div className="watch-shield">✓</div>
      <div className="watch-motion">Motion</div>
      <div className="watch-phone watch-phone-one">
        <span>Alert</span>
      </div>
      <div className="watch-phone watch-phone-two">
        <span>Alert</span>
      </div>
      <div className="watch-phone watch-phone-three">
        <span>Alert</span>
      </div>
      <div className="watch-pulse watch-pulse-motion" />
      <div className="watch-pulse watch-pulse-phone-one" />
      <div className="watch-pulse watch-pulse-phone-two" />
      <div className="watch-pulse watch-pulse-phone-three" />
    </motion.div>
  );
}

function PowerSavingVisual() {
  const reduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className={`power-automation ${isActive && !reduceMotion ? "is-active" : ""}`}
      aria-hidden="true"
      viewport={{ once: true, amount: 0.75 }}
      onViewportEnter={() => {
        if (!reduceMotion) {
          setIsActive(true);
        }
      }}
    >
      <svg className="power-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 16 50 C 28 50, 33 50, 42 50" />
        <path d="M 48 50 C 60 50, 64 25, 82 25" />
        <path d="M 48 50 C 60 50, 66 50, 84 50" />
        <path d="M 48 50 C 60 50, 64 75, 82 75" />
      </svg>
      <div className="power-sun">Day</div>
      <div className="power-away">Away</div>
      <div className="power-controller">Auto</div>
      <div className="power-device power-device-light">
        <span>Light</span>
        <strong>On</strong>
      </div>
      <div className="power-device power-device-fan">
        <span>Fan</span>
        <strong>On</strong>
      </div>
      <div className="power-device power-device-ac">
        <span>AC</span>
        <strong>On</strong>
      </div>
      <div className="power-pulse power-pulse-trigger" />
      <div className="power-pulse power-pulse-light" />
      <div className="power-pulse power-pulse-fan" />
      <div className="power-pulse power-pulse-ac" />
    </motion.div>
  );
}

function IRMacroVisual() {
  const reduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className={`ir-automation ${isActive && !reduceMotion ? "is-active" : ""}`}
      aria-hidden="true"
      viewport={{ once: true, amount: 0.75 }}
      onViewportEnter={() => {
        if (!reduceMotion) {
          setIsActive(true);
        }
      }}
    >
      <svg className="ir-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 16 50 C 26 50, 31 50, 39 50" />
        <path d="M 47 50 C 58 50, 64 28, 82 28" />
        <path d="M 47 50 C 58 50, 66 50, 84 50" />
        <path d="M 47 50 C 58 50, 64 74, 82 74" />
      </svg>
      <div className="ir-button">TV On</div>
      <div className="ir-blaster">IR</div>
      <div className="ir-target ir-target-tv">TV</div>
      <div className="ir-channel">
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </div>
      <div className="ir-target ir-target-light">Light</div>
      <div className="ir-wait ir-wait-five">Wait 5s</div>
      <div className="ir-wait ir-wait-one">Wait 1s</div>
      <div className="ir-pulse ir-pulse-start" />
      <div className="ir-pulse ir-pulse-tv" />
      <div className="ir-pulse ir-pulse-four" />
      <div className="ir-pulse ir-pulse-five" />
      <div className="ir-pulse ir-pulse-six" />
      <div className="ir-pulse ir-pulse-light" />
    </motion.div>
  );
}

function PhotoPlaceholder({
  label,
  alt,
  className = "",
}: {
  label: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-[#D6D9DD] via-[#AEB5BE] to-[#3D4652] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.45),transparent_28%),linear-gradient(120deg,rgba(255,255,255,0.2),transparent_45%)]" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/85 to-transparent p-5">
        <p className="text-sm font-medium text-primary-foreground">{label}</p>
      </div>
    </div>
  );
}

function ClickablePhotoCard({
  label,
  alt,
  image,
  className = "",
}: {
  label: string;
  alt: string;
  image: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`group relative block overflow-hidden rounded-3xl border border-border/60 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
        aria-label={`Open image: ${label}`}
      >
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-sm font-medium text-primary-foreground">{label}</p>
          <p className="mt-1 text-xs text-primary-foreground/60">Click to enlarge</p>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close image preview"
            >
              ×
            </button>
            <img src={image} alt={alt} className="max-h-[92vh] w-full object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-sm font-medium text-white">{label}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#07090C] pt-20 text-white sm:pt-24">
      <div className="absolute inset-0">
        <img
          src={heroLuxuryBackground}
          alt="Zimarix smart switch panel installed on a wall with blue LED accents"
          className="h-full w-full object-cover object-[22%_50%] opacity-100 contrast-110 saturate-110 sm:object-[24%_50%] lg:object-left"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_46%,rgba(30,140,255,0.12),transparent_22%),radial-gradient(circle_at_28%_48%,transparent_0%,transparent_36%,rgba(7,9,12,0.08)_56%,rgba(7,9,12,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,12,0)_0%,rgba(7,9,12,0.02)_34%,rgba(7,9,12,0.48)_62%,rgba(7,9,12,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,12,0.2)_0%,rgba(7,9,12,0)_42%,#07090C_100%)]" />
      </div>

      <div className="container-tight relative flex min-h-[calc(100vh-5rem)] flex-col justify-center pb-12 sm:pb-16 lg:pb-20">
        <Reveal>
          <div className="max-w-3xl lg:ml-auto lg:w-[56%]">
            <h1 className="font-heading font-medium leading-[1.08] tracking-[-0.045em]">
              <span className="block text-[clamp(2.35rem,4.55vw,4.75rem)] text-white">
                A switch that never feels <span className="text-accent">cheap.</span>
              </span>
              <span className="mt-3 block text-[clamp(1.95rem,3.75vw,4.05rem)] text-white">
                A touch that never <span className="text-accent">lags.</span>
              </span>
              <span className="mt-3 block text-[clamp(1.95rem,3.75vw,4.05rem)] text-white">
                A home that never depends on{" "}
                someone else's <span className="text-accent">server.</span>
              </span>
            </h1>

            <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
              This is Zimarix.
            </p>

            <div className="mt-8">
              <ConsultationCTA
                trackingLocation="hero"
                className="border-white/25 bg-white/10 text-white shadow-[0_0_32px_rgba(30,140,255,0.18)] backdrop-blur-md hover:border-accent hover:bg-accent hover:text-accent-foreground"
              />
            </div>

            <p className="mt-6 rounded-full border border-white/12 bg-white/[0.06] px-5 py-3 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md sm:inline-flex sm:text-left">
              5-Year Warranty · 48-Hour Diagnosis · In-House Service
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-12 hidden border-t border-white/10 pt-5 sm:block lg:ml-auto lg:w-[56%]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/46 lg:grid-cols-4">
            <span className="whitespace-nowrap">Aluminium 6061 T6</span>
            <span className="whitespace-nowrap">Anodise 20+ micron</span>
            <span className="whitespace-nowrap">Protocol ZX</span>
            <span className="whitespace-nowrap">Made in India</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CraftsmanshipSection() {
  const details = [
    {
      title: "6061 T6 aluminium grain",
      alt: "CNC milling close-up of aircraft-grade aluminium 6061 T6 panel grain",
      image: cncMilledAluminiumGrain,
    },
    {
      title: "20+ micron anodised finish",
      alt: "Anodised Zimarix aluminium faceplates showing multiple finish tones",
      image: anodisedFinishPanels,
    },
    {
      title: "Milled touch button",
      alt: "Close-up of milled metallic touch buttons in multiple finishes",
      image: milledTouchButton,
    },
  ];

  return (
    <section id="craftsmanship" className="section-padding bg-background">
      <div className="container-tight grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div>
            <Eyebrow>02 — Craftsmanship</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.045em] text-foreground">
              Every detail, <span className="text-accent">milled.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-muted-foreground">
              <p>
                Most switch panels are assembled from parts bought off a shelf. Zimarix
                isn't.
              </p>
              <p>
                Every panel is milled from{" "}
                <strong className="font-semibold text-foreground">
                  aircraft-grade aluminium 6061 T6
                </strong>{" "}
                — the same alloy used in aerospace and premium electronics — then anodised
                in-house to a consistent{" "}
                <strong className="font-semibold text-foreground">20+ micron finish</strong>.
                Not for aesthetics. Because it distributes heat evenly, detects temperature
                accurately, and outlasts everything around it.
              </p>
              <p className="text-2xl font-semibold leading-snug text-foreground">
                Even the touch buttons are milled.
              </p>
              <p>
                You'll feel the difference the first time you touch it. You'll still feel it
                ten years from now.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:gap-5">
          {details.map((detail, index) => (
            <Reveal key={detail.title} delay={index * 0.08}>
              {detail.image ? (
                <ClickablePhotoCard
                  label={detail.title}
                  alt={detail.alt}
                  image={detail.image}
                  className="aspect-[4/5]"
                />
              ) : (
                <PhotoPlaceholder
                  label={detail.title}
                  alt={detail.alt}
                  className="aspect-[4/5]"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinishesSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="finishes" className="section-padding bg-muted/30">
      <div className="container-tight">
        <Reveal>
          <div className="max-w-4xl">
            <Eyebrow>Multiple finishes. One standard.</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.045em] text-foreground">
              Every finish, <span className="text-accent">anodised the same way.</span>
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-muted-foreground">
              Every Zimarix panel — 1x3, 1x4, or 2x3 — comes in a range of finishes.
              All milled from the same aircraft-grade aluminium. All anodised in-house
              to the same 20+ micron standard.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group mt-12 block overflow-hidden rounded-[2rem] bg-background shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Open finishes product photo"
          >
            <img
              src={zimarixFinishesGroupPhoto}
              alt="Studio product photo showing Zimarix panels in multiple anodised finishes"
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </button>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Shown: a selection of available finishes. Click to enlarge.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-10 border-t border-border pt-5 text-lg font-semibold leading-relaxed text-foreground">
            Available across every panel size — 1x3, 1x4, and 2x3. And the scene
            controller, finished to match.
          </p>
        </Reveal>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Finishes product photo preview"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close image preview"
            >
              ×
            </button>
            <img
              src={zimarixFinishesGroupPhoto}
              alt="Studio product photo showing Zimarix panels in multiple anodised finishes"
              className="max-h-[92vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export function ReliabilitySection() {
  const paths = [
    { icon: Router, label: "Local socket", note: "Primary path", primary: true },
    { icon: Server, label: "Server", note: "When away" },
    { icon: Bluetooth, label: "Bluetooth", note: "WiFi fallback" },
  ];

  return (
    <section id="reliability" className="section-padding bg-[#07090C] text-white">
      <div className="container-tight grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div>
            <Eyebrow>03 — Reliability</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.045em] text-white">
              Your home should never depend on{" "}
              <span className="text-accent">someone else's server.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-white/68">
              <p>
                Most smart switches stop being smart the moment the WiFi drops, or the
                company behind them shuts down a server somewhere. Zimarix doesn't work that
                way.
              </p>
              <p>
                Every Zimarix device runs its own intelligence — on the device itself.
                Scheduling, automation, monitoring — none of it lives in the cloud.
              </p>
              <p>
                Lose your WiFi, and the app still reaches your switches over Bluetooth.
                Lose the internet entirely, and your home keeps running exactly as you set
                it up.
              </p>
              <p className="text-2xl font-semibold leading-snug text-white">
                This isn't a feature. It's how it was always meant to work.
              </p>
            </div>
            <ConsultationCTA
              variant="secondary"
              trackingLocation="reliability"
              className="mt-9 border-white/20 bg-white/5 text-white"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            role="img"
            aria-label="Technical diagram showing Zimarix device connecting to app through local socket, server relay, and Bluetooth with local socket emphasized"
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl sm:p-8"
          >
            <div className="reliability-diagram relative grid gap-6 md:grid-cols-[1fr_1.1fr_1fr] md:items-center">
              <svg
                className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path className="reliability-line reliability-line-primary reliability-line-local" d="M 18 50 C 30 50, 35 24, 45 24" />
                <path className="reliability-line reliability-line-primary reliability-line-local" d="M 55 24 C 66 24, 69 50, 82 50" />
                <path className="reliability-line reliability-line-server" d="M 18 50 C 30 50, 34 50, 45 50" />
                <path className="reliability-line reliability-line-server" d="M 55 50 C 66 50, 70 50, 82 50" />
                <path className="reliability-line reliability-line-bluetooth" d="M 18 50 C 30 50, 35 76, 45 76" />
                <path className="reliability-line reliability-line-bluetooth" d="M 55 76 C 66 76, 69 50, 82 50" />
              </svg>
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full md:hidden"
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path className="reliability-line reliability-line-primary reliability-line-local" d="M 50 15 C 40 24, 27 34, 22 44" />
                <path className="reliability-line reliability-line-primary reliability-line-local" d="M 22 58 C 28 70, 40 80, 50 88" />
                <path className="reliability-line reliability-line-server" d="M 50 15 C 50 28, 50 36, 50 44" />
                <path className="reliability-line reliability-line-server" d="M 50 58 C 50 70, 50 80, 50 88" />
                <path className="reliability-line reliability-line-bluetooth" d="M 50 15 C 60 24, 73 34, 78 44" />
                <path className="reliability-line reliability-line-bluetooth" d="M 78 58 C 72 70, 60 80, 50 88" />
              </svg>
              <div className="reliability-pulse reliability-pulse-primary-start" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-primary-end" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-primary-reverse-start" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-primary-reverse-end" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-server-start" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-server-end" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-server-reverse-start" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-server-reverse-end" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-bluetooth-start" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-bluetooth-end" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-bluetooth-reverse-start" aria-hidden="true" />
              <div className="reliability-pulse reliability-pulse-bluetooth-reverse-end" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-primary-start" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-primary-end" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-primary-reverse-start" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-primary-reverse-end" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-server-start" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-server-end" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-server-reverse-start" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-server-reverse-end" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-bluetooth-start" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-bluetooth-end" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-bluetooth-reverse-start" aria-hidden="true" />
              <div className="reliability-pulse-mobile reliability-pulse-mobile-bluetooth-reverse-end" aria-hidden="true" />

              <div className="reliability-card-device relative z-10 rounded-3xl border border-accent/35 bg-accent/10 p-5 text-center">
                <Cpu className="mx-auto h-10 w-10 text-accent" />
                <p className="mt-3 font-semibold">Zimarix Device</p>
                <p className="mt-1 font-mono text-xs text-white/50">Intelligence on-device</p>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-3 md:block md:space-y-3">
                {paths.map((path) => (
                  <div
                    key={path.label}
                    className={`relative flex min-h-36 items-center justify-center rounded-2xl border p-3 text-center md:block md:min-h-0 md:p-4 md:text-left ${
                      path.primary
                        ? "reliability-card-local border-accent bg-accent/15 shadow-[0_0_34px_rgba(30,140,255,0.25)]"
                        : path.label === "Server"
                          ? "reliability-card-server border-white/10 bg-white/[0.03]"
                        : "reliability-card-bluetooth border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-start md:gap-3">
                      <path.icon
                        className={`h-5 w-5 ${path.primary ? "text-accent" : "text-white/55"}`}
                      />
                      <div className="md:block">
                        <p className="font-semibold leading-tight [writing-mode:vertical-rl] rotate-180 md:[writing-mode:horizontal-tb] md:rotate-0">
                          {path.label}
                        </p>
                        <p className="mt-2 hidden font-mono text-[10px] text-white/45 md:mt-0 md:block md:text-xs">
                          {path.note}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reliability-card-app relative z-10 rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-center">
                <Smartphone className="mx-auto h-10 w-10 text-white/75" />
                <p className="mt-3 font-semibold">Zimarix App</p>
                <p className="mt-1 font-mono text-xs text-white/50">Direct when possible</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function IntelligenceSection() {
  const scenarios = [
    {
      visual: "cluster",
      text: "Walk in the door, and the lights, fan, and AC turn on together — one tap, one cluster.",
    },
    {
      visual: "watch",
      text: "Leave for the weekend, and Zimarix watches your home. If something moves when it shouldn't, every phone on your account knows immediately.",
    },
    {
      visual: "power",
      text: "No one home during the day? Devices configured for power-saving switch off on their own.",
    },
    {
      visual: "ir",
      text: "Want the TV to turn on, switch to channel 456, and dim the lights — all from one button? Record it once. Use it forever.",
    },
  ];

  return (
    <section id="intelligence" className="section-padding bg-muted/30">
      <div className="container-tight">
        <Reveal className="max-w-3xl">
          <Eyebrow>04 — Intelligence</Eyebrow>
          <h2 className="mt-6 font-heading text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.045em] text-foreground">
            It doesn't just turn things{" "}
            <span className="text-accent">on and off.</span>
          </h2>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {scenarios.map((scenario, index) => (
            <Reveal key={scenario.text} delay={index * 0.06}>
              <article className="glass-card h-full rounded-3xl p-5 sm:p-8">
                {"visual" in scenario && scenario.visual === "cluster" ? (
                  <ClusterAutomationVisual />
                ) : "visual" in scenario && scenario.visual === "watch" ? (
                  <SecurityWatchVisual />
                ) : "visual" in scenario && scenario.visual === "power" ? (
                  <PowerSavingVisual />
                ) : "visual" in scenario && scenario.visual === "ir" ? (
                  <IRMacroVisual />
                ) : (
                  <scenario.icon className="h-8 w-8 text-accent" />
                )}
                <p className="mt-5 text-xl font-semibold leading-8 text-foreground">
                  {scenario.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-2xl font-semibold leading-snug text-foreground">
            This is what your switches do when they're actually thinking.
          </p>
          <ConsultationCTA variant="secondary" trackingLocation="intelligence" />
        </Reveal>
      </div>
    </section>
  );
}

export function EngineeringSection() {
  const specs = [
    { label: "Protocol", value: "ZX, IN-HOUSE" },
    { label: "Transport", value: "LOW-LEVEL SOCKET" },
    { label: "Security", value: "END-TO-END ENCRYPTED" },
    { label: "PCB Finish", value: "ENIG" },
    { label: "Back Panel", value: "FR4 (MILLED)" },
  ];
  const [activeDemo, setActiveDemo] = useState<{
    title: string;
    embedUrl: string;
  } | null>(null);

  return (
    <section id="engineering" className="section-padding bg-background">
      <div className="container-tight grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <Reveal>
          <div>
            <Eyebrow>05 — Engineering</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.045em] text-foreground">
              For those who want to know{" "}
              <span className="text-accent">why it works.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-muted-foreground">
              <p>
                At the core of every Zimarix device is{" "}
                <strong className="font-semibold text-foreground">ZX</strong> — a
                communication protocol built entirely in-house, designed for
                mission-critical reliability and extreme low latency.
              </p>
              <p>
                The architecture uses low level socket design — the same standard found in
                aerospace, medical, and defence systems. Not because we had to. Because
                nothing else was precise enough.
              </p>
              <p>
                Every PCB is designed in-house and built on ENIG finish for superior signal
                integrity and long-term reliability. Every command, encrypted end to end.
                Every device updates itself over the air. Every device watches its own health
                — temperature, memory, connectivity — and tells you before something goes
                wrong.
              </p>
            </div>
            <div className="mt-8 border-t border-border pt-5">
              <p className="text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
                We didn't start with how it looks.
                <br />
                We started with what it has to survive.
                <br />
                The rest followed.
              </p>
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Engineering demos
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <DemoVideoButton
                  onClick={() =>
                    setActiveDemo({
                      title: "Watch Voltage Stability Test",
                      embedUrl:
                        "https://www.youtube.com/embed/q_1IYpQOGoU?autoplay=1&rel=0&modestbranding=1",
                    })
                  }
                >
                  Watch Voltage Stability Test
                </DemoVideoButton>
                <DemoVideoButton
                  onClick={() =>
                    setActiveDemo({
                      title: "Watch Temperature Alert Demo",
                      embedUrl:
                        "https://www.youtube.com/embed/HGrO_tm2XNQ?autoplay=1&rel=0&modestbranding=1",
                    })
                  }
                >
                  Watch Temperature Alert Demo
                </DemoVideoButton>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-[2rem] border border-border bg-gradient-to-br from-muted to-background p-5 shadow-elevated sm:p-8">
            <div
              role="img"
              aria-label="SolidWorks exploded-view render showing Zimarix aluminium faceplate, milled touch buttons, and precision housing"
              className="overflow-hidden rounded-3xl bg-[#0C1016] p-5 text-white sm:p-7"
            >
              <div className="relative overflow-hidden rounded-[1.4rem] bg-[#0C1016] p-3 sm:p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(12,16,22,0)_58%)]" />
                <img
                  src={zimarixExplodedView}
                  alt="SolidWorks exploded-view render of the Zimarix panel showing faceplate, milled touch buttons, and back housing"
                  className="relative h-auto w-full object-contain opacity-90 mix-blend-luminosity [filter:brightness(0.72)_contrast(1.18)_saturate(0.65)]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.32),rgba(30,140,255,0.08)_45%,rgba(0,0,0,0.28))] mix-blend-multiply" />
              </div>
            </div>
            <div className="mt-5 rounded-3xl border border-white/10 bg-[#0C1016] p-5 text-white shadow-[0_28px_70px_rgba(0,0,0,0.24)] sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
                Specifications
              </p>
              <div className="mt-4 border-t border-white/10">
                {specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`grid grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] gap-4 py-6 font-mono max-[430px]:block ${
                      index === specs.length - 1 ? "" : "border-b border-white/10"
                    } ${index === specs.length - 1 ? "sm:pb-4 sm:pt-8" : "sm:py-8"}`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/42 sm:text-[11px]">
                      {spec.label}
                    </p>
                    <p className="text-right text-xs uppercase tracking-[0.12em] text-white/88 max-[430px]:mt-2 max-[430px]:text-left sm:text-sm">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {activeDemo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeDemo.title}
          onClick={() => setActiveDemo(null)}
        >
          <div
            className="relative aspect-[9/16] max-h-[88vh] w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl sm:max-w-md"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveDemo(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close video preview"
            >
              ×
            </button>
            <iframe
              src={activeDemo.embedUrl}
              title={activeDemo.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export function AppSection() {
  const screens = [
    {
      title: "Devices",
      image: appDevices,
      alt: "Zimarix app devices screen showing registered and active smart devices",
    },
    {
      title: "Switches",
      image: appSwitches,
      alt: "Zimarix app switch control screen with on-off toggles for a device",
    },
    {
      title: "Remote",
      image: appRemote,
      alt: "Zimarix app remote control screen for TV and IR commands",
    },
    {
      title: "Rooms",
      image: appRooms,
      alt: "Zimarix app rooms screen showing room cards and navigation",
    },
  ];

  return (
    <section id="app" className="section-padding bg-[#07090C] text-white">
      <div className="container-tight grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div>
            <Eyebrow>06 — The App</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.045em] text-white">
              Built to get out of{" "}
              <span className="text-accent">your way.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-white/68">
              <p>
                Native on iOS and Android. Designed to get you to the action you want in
                the fewest taps possible.
              </p>
              <p>
                Control multiple homes from one account. See exactly which devices are
                active, right now. Choose exactly which switches you want Alexa to control —
                and keep the rest private.
              </p>
              <p>
                When you're home, commands reach your switches directly. When you're not,
                they still reach you — through Zimarix's own relay, automatically, with no
                setup required.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {screens.map((screen, index) => (
            <Reveal key={screen.title} delay={index * 0.08}>
              <div
                className={`mx-auto w-full max-w-[230px] rounded-[2rem] border border-white/15 bg-[#0D1117] p-2.5 shadow-2xl ${
                  index % 2 === 1 ? "xl:mt-10" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[1.55rem] bg-black">
                  <img
                    src={screen.image}
                    alt={screen.alt}
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                </div>
                <div className="px-3 pb-2 pt-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                    {screen.title}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RealHomesSection() {
  const homes = [
    {
      label: "Living room application",
      alt: "Zimarix smart switch panel installed on a wood-panelled living room wall",
      image: livingRoomInstall,
    },
    {
      label: "Bedroom placement reference",
      alt: "Zimarix smart switch panel installed near a master bedroom",
      image: masterBedroomPanel,
    },
    {
      label: "Foyer application",
      alt: "Zimarix smart switch panel installed beside a villa entrance foyer",
      image: villaEntranceFoyer,
    },
    {
      label: "Dining room reference",
      alt: "Zimarix smart switch panel installed beside a modern kitchen and dining area",
      image: diningRoomAutomation,
    },
    {
      label: "Hallway placement reference",
      alt: "Zimarix smart switch panel shown in a luxury apartment hallway and interior collage",
      image: apartmentHallway,
    },
    {
      label: "Media room application",
      alt: "Zimarix smart switch panel installed on a home theatre wall",
      image: homeTheatreWall,
    },
  ];

  return (
    <section id="real-homes" className="section-padding bg-muted/30">
      <div className="container-tight">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>07 — Design Reference</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.045em] text-foreground">
              How it looks, <span className="text-accent">where it lives.</span>
            </h2>
          </div>
          <ConsultationCTA variant="secondary" trackingLocation="design_reference" />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homes.map((home, index) => (
            <Reveal key={home.label} delay={index * 0.04}>
              {home.image ? (
                <ClickablePhotoCard
                  label={home.label}
                  alt={home.alt}
                  image={home.image}
                  className="aspect-[4/3]"
                />
              ) : (
                <PhotoPlaceholder
                  label={home.label}
                  alt={`${home.label} placeholder photo of a Zimarix smart switch panel installed in a real home`}
                  className="aspect-[4/3]"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WarrantySupportSection() {
  const stats = [
    { value: "5 YEARS", label: "Warranty coverage" },
    { value: "48 HOURS", label: "Issue diagnosis" },
    { value: "5 DAYS", label: "Replacement shipped" },
  ];

  return (
    <section id="warranty-support" className="section-padding bg-background">
      <div className="container-tight">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-muted/35 p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <Eyebrow>Warranty & Support</Eyebrow>
                <h2 className="mt-6 max-w-3xl font-heading text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.045em] text-foreground">
                  Backed by the people{" "}
                  <span className="text-accent">who built it.</span>
                </h2>
                <p className="mt-8 max-w-3xl text-lg leading-9 text-muted-foreground">
                  Because Zimarix designs and manufactures every panel in-house, there's no
                  third party to wait on. Every panel comes with a 5-year warranty. If
                  something goes wrong, our team diagnoses the issue within 48 hours and
                  ships a replacement within 5 days — start to finish, handled by the people
                  who built your product.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ConsultationSection() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleConsultationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL as string | undefined;
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!endpoint) {
      setSubmitState("error");
      setSubmitMessage("Lead capture is not configured yet. Please call or email us directly.");
      return;
    }

    setSubmitState("submitting");
    setSubmitMessage("");

    const payload = new URLSearchParams({
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      city: String(formData.get("city") || ""),
      propertyType: String(formData.get("propertyType") || ""),
      source: "zimarix.com",
      submittedAt: new Date().toISOString(),
    });

    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload,
      });

      form.reset();
      setSubmitState("success");
      setSubmitMessage("Thank you. We have received your request and will contact you soon.");
      trackGAEvent("consultation_form_submit", {
        location: "consultation_form",
      });
    } catch {
      setSubmitState("error");
      setSubmitMessage("Something went wrong. Please call or email us directly.");
    }
  };

  return (
    <section id="consultation" className="section-padding bg-[#07090C] text-white">
      <div className="container-tight grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <Reveal>
          <div>
            <Eyebrow>08 — Book a Consultation</Eyebrow>
            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              See it in person.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/68">
              Talk to us about your home, your requirements, and how Zimarix fits in.
            </p>

            <div className="mt-8 space-y-3 text-white/75">
              <a className="flex items-center gap-3 hover:text-white" href="mailto:contact@zimarix.com">
                <Mail className="h-5 w-5 text-accent" />
                contact@zimarix.com
              </a>
              <a className="flex items-center gap-3 hover:text-white" href="tel:+918867050606">
                <Phone className="h-5 w-5 text-accent" />
                +91 88670 50606
              </a>
              <a className="flex items-center gap-3 hover:text-white" href="https://www.zimarix.com">
                <Cloud className="h-5 w-5 text-accent" />
                www.zimarix.com
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl sm:p-8"
            onSubmit={handleConsultationSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-white/75">Name</span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-white/75">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  placeholder="+91"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-white/75">City</span>
                <input
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-white/75">Property Type</span>
                <select
                  name="propertyType"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select property type
                  </option>
                  <option>Apartment</option>
                  <option>Independent House</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              disabled={submitState === "submitting"}
              onClick={() =>
                trackGAEvent("book_consultation_click", {
                  location: "consultation_form",
                })
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090C]"
            >
              {submitState === "submitting" ? "Submitting..." : "Book a Consultation"}
              <ChevronRight className="h-4 w-4" />
            </button>
            {submitMessage && (
              <p
                className={`mt-4 rounded-2xl border px-4 py-3 text-sm leading-6 ${
                  submitState === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                    : "border-red-400/30 bg-red-400/10 text-red-100"
                }`}
                role="status"
              >
                {submitMessage}
              </p>
            )}
            <p className="mt-4 text-sm leading-6 text-white/45">
              Your details are used only to contact you about your Zimarix consultation.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function ZimarixLandingPage() {
  return (
    <>
      <HeroSection />
      <CraftsmanshipSection />
      <FinishesSection />
      <ReliabilitySection />
      <IntelligenceSection />
      <EngineeringSection />
      <AppSection />
      <RealHomesSection />
      <WarrantySupportSection />
      <ConsultationSection />
    </>
  );
}
