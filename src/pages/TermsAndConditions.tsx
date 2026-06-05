import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Shield,
  FileText,
  Layers,
  Smartphone,
  Mic,
  User,
  ShieldAlert,
  Cpu,
  Copyright,
  AlertTriangle,
  Scale,
  Ban,
  Gavel,
  RefreshCw,
  Mail,
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
    title: "1. Agreement to Terms",
    icon: FileText,
    content: (
      <>
        <div className="rounded-xl bg-accent/5 border border-accent/20 p-4 mb-4">
          <p>
            By accessing or using the Zimarix mobile application, Amazon Alexa Skill,
            website, smart switch panels, IoT devices, cloud services, or any related
            products and services (collectively, the "Services"), you agree to be bound by
            these Terms of Use. If you do not agree, do not use the Services.
          </p>
        </div>
        <p>
          These Terms constitute a legally binding agreement between you and{" "}
          <strong>Zimarix IoT Private Limited</strong> ("Zimarix," "we," "us," or "our"),
          a company registered in India with its registered office at Plot No 77, JBR Tech
          Park, 6th Road, EPIP Layout, Bangalore South, Whitefield, Bangalore – 560066,
          Karnataka, India.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "2. Description of Services",
    icon: Layers,
    content: (
      <>
        <p className="mb-4">
          Zimarix provides smart home automation products and services, including:
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>Smart switch panels and compatible IoT hardware</li>
          <li>Mobile applications for device setup, monitoring, and control</li>
          <li>Cloud connectivity for remote access and automation</li>
          <li>Integrations with voice assistants and third-party platforms where supported</li>
          <li>Customer support, firmware updates, and related software features</li>
        </ul>
        <p className="mt-4">
          We may modify, suspend, or discontinue any part of the Services at any time, with
          or without notice, where permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "mobile-app",
    title: "3. Mobile Application",
    icon: Smartphone,
    content: (
      <>
        <p className="mb-4">
          The Zimarix mobile application (Android and iOS) allows you to register, configure,
          monitor, and control compatible Zimarix devices. By using the App, you agree that:
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>You will provide accurate account information and keep your credentials secure.</li>
          <li>You grant the App permissions required for features you choose to use (such as Wi‑Fi, Bluetooth, notifications, and location for network setup on supported platforms).</li>
          <li>You are responsible for all activity under your account and for configuring automations safely.</li>
          <li>The App requires internet connectivity for cloud features; local control may be available depending on your devices and network.</li>
          <li>App updates may be required to maintain compatibility, security, and access to new features.</li>
        </ul>
      </>
    ),
  },
  {
    id: "alexa-skill",
    title: "4. Amazon Alexa Skill",
    icon: Mic,
    content: (
      <>
        <p className="mb-4">
          The Zimarix Alexa Skill allows you to control compatible devices using voice commands
          through Amazon Alexa-enabled devices. By enabling or using the Skill, you also agree to
          the following:
        </p>
        <h3 className="font-semibold text-foreground mb-2">Account linking</h3>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>You must link your Zimarix account with your Amazon account through secure OAuth-based account linking in the Alexa app.</li>
          <li>You authorize Zimarix to receive and process Alexa voice requests for your linked devices only.</li>
          <li>You may unlink your account at any time through the Alexa app or Zimarix account settings.</li>
          <li>You are responsible for ensuring only authorized users can issue voice commands on linked Alexa devices.</li>
        </ul>
        <h3 className="font-semibold text-foreground mb-2">Voice control</h3>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>Voice commands are processed by Amazon Alexa before being sent to Zimarix.</li>
          <li>Voice recognition may not always interpret commands accurately.</li>
          <li>Device control depends on internet connectivity, cloud services, and device availability.</li>
          <li>Voice commands may affect physical devices in your home; you are responsible for safe use.</li>
          <li>Zimarix does not store Amazon Alexa voice recordings; voice data is managed by Amazon.</li>
        </ul>
        <h3 className="font-semibold text-foreground mb-2">Third-party services</h3>
        <p>
          The Skill operates through Amazon Alexa, a third-party service not controlled by Zimarix.
          We are not responsible for Amazon's services, voice recognition accuracy, or changes to
          Alexa functionality. Your use of Alexa is also subject to Amazon's terms and privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "5. Eligibility and Account Registration",
    icon: User,
    content: (
      <>
        <p className="mb-4">
          You must be at least 18 years old and capable of entering into a binding contract
          under applicable law to use the Services. By creating an account, you represent
          that the information you provide is accurate and complete.
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>You are responsible for all activity that occurs under your account.</li>
          <li>You must notify us promptly of any unauthorized access or security breach.</li>
          <li>We may suspend or terminate accounts that contain false or misleading information.</li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "6. Acceptable Use",
    icon: ShieldAlert,
    content: (
      <>
        <p className="mb-4">You agree not to:</p>
        <ul className="space-y-2 list-disc pl-5 mb-4">
          <li>Use the Services or Alexa Skill for any unlawful, harmful, or fraudulent purpose</li>
          <li>Interfere with or disrupt the Services, servers, or connected devices</li>
          <li>Attempt to gain unauthorized access to systems, accounts, or data</li>
          <li>Reverse engineer, decompile, or tamper with firmware or software except as permitted by law</li>
          <li>Use the Services in a manner that could damage property, cause injury, or create safety hazards</li>
          <li>Resell, sublicense, or commercially exploit the Services without our written consent</li>
        </ul>
        <p>
          You are solely responsible for configuring automations, schedules, and device
          controls in a safe and appropriate manner for your premises.
        </p>
      </>
    ),
  },
  {
    id: "devices",
    title: "7. Devices and Installation",
    icon: Cpu,
    content: (
      <>
        <p className="mb-4">
          Zimarix hardware must be installed and used in accordance with product
          documentation, applicable electrical codes, and safety guidelines. Improper
          installation may void warranties and create safety risks.
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>Installation should be performed by qualified personnel where required.</li>
          <li>You are responsible for ensuring compatible electrical wiring and network connectivity.</li>
          <li>Device performance may depend on power supply quality, Wi‑Fi coverage, and local network conditions.</li>
          <li>Firmware updates may be delivered automatically or on request to improve security and functionality.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    icon: Copyright,
    content: (
      <>
        <p className="mb-4">
          All content, software, trademarks, logos, designs, and documentation associated
          with the Services are owned by Zimarix or its licensors and are protected by
          applicable intellectual property laws.
        </p>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to use
          the Services for personal or authorized commercial use in accordance with these
          Terms. No rights are granted except as expressly stated.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "9. Privacy",
    icon: Shield,
    content: (
      <p>
        Your use of the Services is also governed by our{" "}
        <Link to="/privacy-policy" className="text-accent hover:underline">
          Privacy Policy
        </Link>
        , which explains how we collect, use, and protect your information. By using the
        Services, you consent to our data practices as described in that policy.
      </p>
    ),
  },
  {
    id: "warranties",
    title: "10. Warranties and Disclaimers",
    icon: AlertTriangle,
    content: (
      <>
        <p className="mb-4">
          Zimarix hardware may be covered by a separate product warranty as stated in your
          purchase documentation or warranty card. To the fullest extent permitted by law:
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>
            The Services are provided on an "as is" and "as available" basis without
            warranties of any kind, whether express or implied.
          </li>
          <li>
            We do not warrant uninterrupted, error-free, or fully secure operation of the
            Services, Alexa Skill, or connected devices.
          </li>
          <li>
            We are not responsible for failures caused by internet outages, third-party
            services, power interruptions, or factors outside our reasonable control.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    icon: Scale,
    content: (
      <>
        <p className="mb-4">
          To the maximum extent permitted by applicable law, Zimarix and its directors,
          officers, employees, and affiliates shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, including loss of profits,
          data, goodwill, or property damage arising from your use of the Services.
        </p>
        <p>
          Our total liability for any claim arising out of or relating to these Terms or the
          Services shall not exceed the amount you paid to Zimarix for the relevant product
          or service in the twelve (12) months preceding the claim, or INR 5,000, whichever
          is greater, except where liability cannot be limited under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "12. Indemnification",
    icon: Ban,
    content: (
      <p>
        You agree to indemnify and hold harmless Zimarix from any claims, damages, losses,
        liabilities, and expenses (including reasonable legal fees) arising from your misuse
        of the Services, violation of these Terms, improper installation or use of devices,
        or infringement of any third-party rights.
      </p>
    ),
  },
  {
    id: "termination",
    title: "13. Termination",
    icon: Gavel,
    content: (
      <>
        <p className="mb-4">
          You may stop using the Services at any time. We may suspend or terminate your
          access if you violate these Terms, create security or legal risks, or if required
          by law.
        </p>
        <p>
          Upon termination, your right to use the Services ceases immediately. Provisions
          that by their nature should survive termination — including intellectual property,
          disclaimers, limitation of liability, and governing law — will remain in effect.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "14. Governing Law and Disputes",
    icon: Gavel,
    content: (
      <>
        <p className="mb-4">
          These Terms are governed by the laws of India. Any dispute arising out of or
          relating to these Terms or the Services shall be subject to the exclusive
          jurisdiction of the courts in Bangalore, Karnataka, India.
        </p>
        <p>
          Before initiating formal proceedings, you agree to contact us at{" "}
          <a href="mailto:support@zimarix.com" className="text-accent hover:underline">
            support@zimarix.com
          </a>{" "}
          to attempt to resolve the dispute in good faith.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "15. Changes to These Terms",
    icon: RefreshCw,
    content: (
      <>
        <p className="mb-4">
          We may update these Terms from time to time. When we make material changes, we will
          post the updated Terms on our website and revise the "Last updated" date. We may
          also provide notice through the App or by email where appropriate.
        </p>
        <p>
          Your continued use of the Services after changes take effect constitutes acceptance
          of the updated Terms, unless otherwise required by law.
        </p>
      </>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Use — Zimarix App &amp; Alexa Skill</title>
        <meta
          name="description"
          content="Terms of Use for the Zimarix mobile application, Amazon Alexa Skill, smart switch panels, and connected services."
        />
        <link rel="canonical" href="/terms" />
        <meta property="og:title" content="Zimarix Terms of Use" />
        <meta
          property="og:description"
          content="Terms of Use for the Zimarix mobile app, Amazon Alexa Skill, and connected services."
        />
        <meta property="og:url" content="/terms" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Use",
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
                Terms of <span className="text-accent">Use</span>
              </h1>

              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed mb-6">
                The terms governing your use of the Zimarix mobile application, Amazon Alexa
                Skill, smart switch panels, and connected services.
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
                  <h2 className="text-2xl sm:text-3xl font-bold pt-1.5">16. Contact Us</h2>
                </header>
                <p className="text-primary-foreground/70 mb-6 sm:pl-16 leading-relaxed">
                  If you have questions about these Terms of Use, please contact us:
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
