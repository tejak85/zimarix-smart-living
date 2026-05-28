import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  Lock,
  Database,
  Settings,
  Mic,
  Share2,
  Clock,
  UserCheck,
  Baby,
  RefreshCw,
  Mail,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const LAST_UPDATED = "May 28, 2026";

type Section = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
};

const sections: Section[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    icon: FileText,
    content: (
      <p>
        Zimarix ("we", "our", or "us") provides smart home automation products and
        services, including smart switch panels, IoT devices, cloud services, mobile
        applications, and Amazon Alexa integrations. This Privacy Policy explains how
        we collect, use, store, and protect information when you use our products and
        services. By using Zimarix products or our Alexa Skill, you agree to the
        practices described in this policy.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    icon: Database,
    content: (
      <ul className="space-y-2 list-disc pl-5">
        <li>User account information (name, email, phone number, password credentials).</li>
        <li>Device information (model, firmware version, unique device identifiers).</li>
        <li>Smart home device status and control data (on/off states, schedules, scenes).</li>
        <li>WiFi and network-related device metadata required for provisioning and connectivity.</li>
        <li>Alexa account linking information required to authorize device control.</li>
        <li>Usage analytics and diagnostics to improve reliability and performance.</li>
        <li>Mobile app interaction data such as feature usage and crash reports.</li>
      </ul>
    ),
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Information",
    icon: Settings,
    content: (
      <ul className="space-y-2 list-disc pl-5">
        <li>Device control, scheduling, and home automation execution.</li>
        <li>Voice assistant integration with Amazon Alexa.</li>
        <li>Improving service reliability, stability, and performance.</li>
        <li>Security monitoring and fraud prevention.</li>
        <li>Sending notifications and executing user-defined automations.</li>
        <li>Providing customer support and troubleshooting.</li>
        <li>Delivering firmware updates and new feature rollouts.</li>
      </ul>
    ),
  },
  {
    id: "alexa-integration",
    title: "4. Alexa Integration",
    icon: Mic,
    content: (
      <ul className="space-y-2 list-disc pl-5">
        <li>All voice requests are processed through Amazon Alexa services.</li>
        <li>Zimarix only accesses devices that you have explicitly linked and authorized.</li>
        <li>Zimarix does not store voice recordings; these are managed by Amazon.</li>
        <li>
          Alexa authentication is handled securely through OAuth-based account linking,
          and credentials are never exposed to third parties.
        </li>
      </ul>
    ),
  },
  {
    id: "data-security",
    title: "5. Data Security",
    icon: Lock,
    content: (
      <ul className="space-y-2 list-disc pl-5">
        <li>All communication between devices, apps, and cloud is encrypted in transit.</li>
        <li>Cloud infrastructure is hosted on secure, industry-trusted providers.</li>
        <li>Authentication and authorization controls protect access to your account.</li>
        <li>Continuous safeguards help prevent unauthorized access, alteration, or disclosure.</li>
      </ul>
    ),
  },
  {
    id: "data-sharing",
    title: "6. Data Sharing",
    icon: Share2,
    content: (
      <ul className="space-y-2 list-disc pl-5">
        <li>Zimarix does not sell your personal information to any third party.</li>
        <li>
          Data may be shared only with essential cloud and service providers required to
          operate the service (e.g. hosting, analytics, voice integration).
        </li>
        <li>
          We may disclose information when required by law, regulation, or valid legal
          process.
        </li>
      </ul>
    ),
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    icon: Clock,
    content: (
      <ul className="space-y-2 list-disc pl-5">
        <li>
          Data is retained only as long as necessary to provide the service and meet
          legal obligations.
        </li>
        <li>You may request deletion of your account and associated data at any time.</li>
      </ul>
    ),
  },
  {
    id: "user-rights",
    title: "8. User Rights",
    icon: UserCheck,
    content: (
      <ul className="space-y-2 list-disc pl-5">
        <li>Access the personal data associated with your account.</li>
        <li>Request deletion of your account and related data.</li>
        <li>Unlink your Alexa account at any time from the Alexa app.</li>
        <li>Disable specific devices or services through the Zimarix mobile application.</li>
      </ul>
    ),
  },
  {
    id: "childrens-privacy",
    title: "9. Children's Privacy",
    icon: Baby,
    content: (
      <p>
        Zimarix services are not directed to or intended for children under the age of
        13. We do not knowingly collect personal information from children. If we become
        aware of such collection, the information will be promptly deleted.
      </p>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to This Privacy Policy",
    icon: RefreshCw,
    content: (
      <p>
        We may update this Privacy Policy periodically to reflect changes in our
        practices, technology, legal requirements, or service improvements. Updates will
        be posted on this page along with a revised "Last Updated" date.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy — Zimarix Smart Switch Panels & Alexa Skill</title>
        <meta
          name="description"
          content="Learn how Zimarix collects, uses, and protects your data across smart switch panels, IoT devices, mobile apps, and the Amazon Alexa integration."
        />
        <link rel="canonical" href="/privacy-policy" />
        <meta property="og:title" content="Zimarix Privacy Policy" />
        <meta
          property="og:description"
          content="Privacy Policy for Zimarix Smart Switch Panels, IoT devices, and Alexa Skill integration."
        />
        <meta property="og:url" content="/privacy-policy" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          about: "Zimarix Smart Switch Panels and Alexa Skill",
          dateModified: "2026-05-28",
        })}</script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary via-charcoal to-primary">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container-tight relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Trust & Security
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Privacy <span className="text-accent">Policy</span>
              </h1>

              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed mb-6">
                Your privacy is fundamental to how we design Zimarix smart switch panels,
                IoT devices, mobile apps, and our Amazon Alexa Skill.
              </p>

              <p className="text-sm text-primary-foreground/60">
                Last Updated: <span className="text-accent font-medium">{LAST_UPDATED}</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sections */}
        <section className="section-padding">
          <div className="container-tight">
            <div className="grid gap-6 md:gap-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.article
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.04 }}
                    className="glass-card rounded-2xl p-6 sm:p-8 hover:shadow-elevated transition-shadow"
                  >
                    <header className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground pt-2">
                        {section.title}
                      </h2>
                    </header>
                    <div className="text-muted-foreground leading-relaxed sm:pl-16 text-base">
                      {section.content}
                    </div>
                  </motion.article>
                );
              })}

              {/* Contact section */}
              <motion.article
                id="contact"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-primary via-charcoal to-primary text-primary-foreground shadow-elevated"
              >
                <header className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold pt-1.5">
                    11. Contact Information
                  </h2>
                </header>
                <p className="text-primary-foreground/70 mb-6 sm:pl-16 leading-relaxed">
                  If you have questions, concerns, or requests regarding this Privacy
                  Policy or your data, please reach out to us:
                </p>
                <dl className="grid sm:grid-cols-3 gap-4 sm:pl-16">
                  <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-4">
                    <dt className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">
                      Company
                    </dt>
                    <dd className="font-semibold">Zimarix</dd>
                  </div>
                  <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-4">
                    <dt className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">
                      Website
                    </dt>
                    <dd>
                      <a
                        href="https://zimarix.com"
                        className="font-semibold text-accent hover:underline inline-flex items-center gap-1"
                      >
                        zimarix.com <ChevronRight className="w-4 h-4" />
                      </a>
                    </dd>
                  </div>
                  <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-4">
                    <dt className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">
                      Email
                    </dt>
                    <dd>
                      <a
                        href="mailto:support@zimarix.com"
                        className="font-semibold text-accent hover:underline break-all"
                      >
                        support@zimarix.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </motion.article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
