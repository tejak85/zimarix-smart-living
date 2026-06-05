import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Database,
  Settings,
  Smartphone,
  Share2,
  Clock,
  UserCheck,
  Baby,
  RefreshCw,
  Mail,
  FileText,
  Mic,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const LAST_UPDATED = "June 6, 2026";

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
      <>
        <div className="rounded-xl bg-accent/5 border border-accent/20 p-4 mb-4">
          <p>
            By downloading, installing, or using the Zimarix mobile application (the
            "App"), enabling the Zimarix skill on Amazon Alexa, or using our related
            services, you acknowledge that we may process your personal information as
            described in this Privacy Policy. If you do not agree, please do not use the
            App or Skill.
          </p>
        </div>
        <p className="mb-4">
          This Privacy Policy describes how <strong>Zimarix IoT Private Limited</strong>{" "}
          ("Zimarix," "we," "us," or "our") collects, uses, stores, and shares information
          when you use the Zimarix App, Amazon Alexa Skill, and connected smart-home and
          building-automation devices.
        </p>
        <p>
          This policy applies to information collected through the App, the Alexa Skill, our
          cloud services, and customer support channels. It does not apply to third-party
          websites, apps, or services that we do not operate.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    icon: Database,
    content: (
      <>
        <p className="mb-4">
          We collect information necessary to create your account, connect and control your
          devices, and improve the reliability of our services.
        </p>
        <h3 className="font-semibold text-foreground mb-2">Account and profile information</h3>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>Email address</li>
          <li>Phone number</li>
          <li>Account credentials (password stored in hashed form)</li>
          <li>Profile details you choose to provide</li>
        </ul>
        <h3 className="font-semibold text-foreground mb-2">Device and smart-home data</h3>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>Connected device identifiers, models, and configuration</li>
          <li>Switch, port, scene, and automation settings</li>
          <li>Device network information (such as IP addresses and Wi‑Fi details)</li>
          <li>Bluetooth identifiers used for local device discovery and setup</li>
          <li>Device status, logs, and operational events you enable</li>
        </ul>
        <h3 className="font-semibold text-foreground mb-2">App usage and technical data</h3>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>App interactions, feature usage, and preferences</li>
          <li>Diagnostic, crash, and performance data</li>
          <li>Push notification tokens</li>
          <li>Device type, operating system version, and app version</li>
          <li>General network and connection metadata</li>
          <li>Alexa account linking information and voice-request metadata needed to control authorized devices</li>
        </ul>
        <h3 className="font-semibold text-foreground mb-2">Information from your device (with permission)</h3>
        <p className="mb-4">
          Depending on the features you use, the App may request access to device
          capabilities such as Wi‑Fi, Bluetooth, location (for Wi‑Fi network scanning on
          supported platforms), camera (for optional profile or setup flows), notifications,
          and local storage. We only access these capabilities when needed for the feature
          you are using.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Category</th>
                <th className="text-left p-3 font-semibold text-foreground">Examples</th>
                <th className="text-left p-3 font-semibold text-foreground">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-3">Account data</td>
                <td className="p-3">Email, phone, login activity</td>
                <td className="p-3">You / App</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Smart-home data</td>
                <td className="p-3">Device names, switch states, scenes</td>
                <td className="p-3">You / Devices / App</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Technical data</td>
                <td className="p-3">Crash logs, app version, connection status</td>
                <td className="p-3">App / Servers</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Communications</td>
                <td className="p-3">Support requests and feedback</td>
                <td className="p-3">You</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    icon: Settings,
    content: (
      <>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>Provide, operate, and maintain the App and connected services</li>
          <li>Authenticate you and secure your account</li>
          <li>Enable local and remote control of your registered devices</li>
          <li>Sync device configuration and state across your account</li>
          <li>Send service-related notifications, alerts, and OTP messages</li>
          <li>Diagnose technical issues and improve performance and reliability</li>
          <li>Enable voice control through the Amazon Alexa Skill where you have linked your account</li>
          <li>Respond to support requests and communicate important updates</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
        <p>
          We process your information based on your consent (where required), the
          performance of our contract with you, our legitimate interests in operating and
          improving the service, and compliance with law.
        </p>
      </>
    ),
  },
  {
    id: "device-permissions",
    title: "4. Device Permissions",
    icon: Smartphone,
    content: (
      <>
        <p className="mb-4">
          The App requests certain device permissions to deliver core functionality. You can
          manage many of these permissions in your device settings.
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>
            <strong>Internet &amp; network:</strong> Required to communicate with Zimarix
            servers and your connected devices.
          </li>
          <li>
            <strong>Wi‑Fi:</strong> Used to discover, configure, and reconnect devices on
            your local network.
          </li>
          <li>
            <strong>Bluetooth:</strong> Used for local device discovery, provisioning, and
            control when cloud connectivity is unavailable.
          </li>
          <li>
            <strong>Location:</strong> Required on some platforms to scan for nearby Wi‑Fi
            networks during device setup. We do not use location for advertising or
            unrelated tracking.
          </li>
          <li>
            <strong>Camera &amp; storage:</strong> Used only when you choose features that
            involve capturing or uploading images.
          </li>
          <li>
            <strong>Notifications:</strong> Used to deliver device alerts, account messages,
            and service updates.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "alexa-integration",
    title: "5. Amazon Alexa Integration",
    icon: Mic,
    content: (
      <>
        <p className="mb-4">
          If you enable the Zimarix skill on Amazon Alexa, the following also applies:
        </p>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>Voice requests are processed through Amazon Alexa services before being sent to Zimarix.</li>
          <li>Zimarix only accesses devices that you have explicitly linked and authorized through account linking.</li>
          <li>Zimarix does not store Amazon Alexa voice recordings; voice data is managed by Amazon.</li>
          <li>
            Alexa authentication is handled through secure OAuth-based account linking. Zimarix
            does not receive or store your Amazon account password.
          </li>
          <li>We may receive device control commands, linked account identifiers, and related metadata needed to execute voice requests.</li>
        </ul>
        <p>
          Your use of the Alexa Skill is also governed by our{" "}
          <Link to="/terms#alexa-skill" className="text-accent hover:underline">
            Terms of Use
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. Sharing and Disclosure",
    icon: Share2,
    content: (
      <>
        <p className="mb-4">
          We do not sell your personal information. We may share information only in the
          following circumstances:
        </p>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>
            <strong>Service providers:</strong> With trusted vendors who help us operate the
            App (such as cloud hosting, messaging, and analytics providers), subject to
            contractual confidentiality and security obligations.
          </li>
          <li>
            <strong>Legal requirements:</strong> When required by law, regulation, legal
            process, or governmental request.
          </li>
          <li>
            <strong>Protection of rights:</strong> To protect the safety, rights, or
            property of Zimarix, our users, or others.
          </li>
          <li>
            <strong>Business transfers:</strong> In connection with a merger, acquisition, or
            sale of assets, with notice where required by law.
          </li>
        </ul>
        <p>
          Where devices in your home are shared among multiple app users, certain device and
          account metadata may be visible to other authorized users on the same installation,
          as required for multi-user device management.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "7. Data Retention",
    icon: Clock,
    content: (
      <>
        <p className="mb-4">
          We retain personal information for as long as needed to provide the App, fulfill
          the purposes described in this policy, comply with legal obligations, resolve
          disputes, and enforce our agreements.
        </p>
        <p>
          When you delete your account or request deletion of specific data, we will remove
          or anonymize your information within a reasonable period, except where retention is
          required by law or for legitimate business purposes such as security and fraud
          prevention.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "8. Security",
    icon: Lock,
    content: (
      <>
        <p className="mb-4">
          We implement technical and organizational measures designed to protect your
          information, including access controls, encryption in transit, and secure credential
          handling. No method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
        <p>
          You are responsible for keeping your login credentials confidential and for ensuring
          that devices on your premises are installed and used safely.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "9. Your Rights and Choices",
    icon: UserCheck,
    content: (
      <>
        <p className="mb-4">
          Depending on your location, you may have rights regarding your personal
          information, including the right to:
        </p>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, contact us at{" "}
          <a href="mailto:support@zimarix.com" className="text-accent hover:underline">
            support@zimarix.com
          </a>
          . We will respond within the timeframe required by applicable law.
        </p>
        <p>
          You can also manage certain preferences directly in the App, such as notification
          settings and connected devices.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    icon: Baby,
    content: (
      <p>
        The App is not directed to children under 18, and we do not knowingly collect
        personal information from children. If you believe a child has provided us with
        personal information, please contact us and we will take appropriate steps to
        delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    icon: RefreshCw,
    content: (
      <>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. When we make material changes,
          we will provide notice through the App, Alexa Skill, by email, or by posting an updated policy
          on our website with a revised "Last updated" date.
        </p>
        <p>
          Your continued use of the App or Alexa Skill after changes take effect constitutes acceptance of
          the updated policy, unless otherwise required by law.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy — Zimarix App &amp; Alexa Skill</title>
        <meta
          name="description"
          content="Privacy Policy for the Zimarix mobile application, Amazon Alexa Skill, and connected services operated by Zimarix IoT Private Limited."
        />
        <link rel="canonical" href="/privacy-policy" />
        <meta property="og:title" content="Zimarix Privacy Policy" />
        <meta
          property="og:description"
          content="Privacy Policy for the Zimarix mobile application and Amazon Alexa Skill."
        />
        <meta property="og:url" content="/privacy-policy" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          about: "Zimarix mobile application, Amazon Alexa Skill, and connected services",
          dateModified: "2026-06-06",
        })}</script>
      </Helmet>

      <Navbar />

      <main>
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
                <span className="text-sm font-medium text-accent">Legal</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Privacy <span className="text-accent">Policy</span>
              </h1>

              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed mb-6">
                How Zimarix IoT Private Limited collects, uses, and protects your information
                when you use our mobile application, Amazon Alexa Skill, and connected services.
              </p>

              <p className="text-sm text-primary-foreground/60">
                Last Updated: <span className="text-accent font-medium">{LAST_UPDATED}</span>
              </p>
            </motion.div>
          </div>
        </section>

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
                  <h2 className="text-2xl sm:text-3xl font-bold pt-1.5">12. Contact Us</h2>
                </header>
                <p className="text-primary-foreground/70 mb-6 sm:pl-16 leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <ul className="space-y-3 sm:pl-16 text-primary-foreground/90">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:support@zimarix.com" className="text-accent hover:underline">
                      support@zimarix.com
                    </a>
                  </li>
                  <li>
                    <strong>General inquiries:</strong>{" "}
                    <a href="mailto:contact@zimarix.com" className="text-accent hover:underline">
                      contact@zimarix.com
                    </a>
                  </li>
                  <li>
                    <strong>Company:</strong> Zimarix IoT Private Limited
                  </li>
                  <li>
                    <strong>Address:</strong> Plot No 77, JBR Tech Park, 6th Road, EPIP Layout,
                    Bangalore South, Whitefield, Bangalore – 560066, Karnataka, India
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+918867050606" className="text-accent hover:underline">
                      +91 88670 50606
                    </a>
                  </li>
                </ul>
              </motion.article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
