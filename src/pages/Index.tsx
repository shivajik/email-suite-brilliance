import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Lock,
  Mail,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroGlowField } from "@/components/marketing/HeroGlowField";

const brand = {
  name: "Aurelia Suite",
  domain: "aureliasuite.example",
};

const faqs = [
  {
    q: "Do you support migration from Microsoft 365 and Google Workspace?",
    a: "Yes. We provide assisted migration for mailboxes, calendars, contacts, and distribution lists with cutover planning and rollback options.",
  },
  {
    q: "Where is data stored?",
    a: "You can choose region-specific residency options (US/EU/UK) depending on your compliance requirements.",
  },
  {
    q: "Is your platform compliant (SOC 2 / ISO 27001 / HIPAA)?",
    a: "We support enterprise compliance programs and can provide security documentation under NDA. Specific attestations depend on your plan and region.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-pretty text-base text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </header>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
      <Sparkles className="h-3.5 w-3.5 text-primary" />
      {children}
    </span>
  );
}

export default function Index() {
  const title = "Enterprise Email & Collaboration Suite | Aurelia Suite";
  const description =
    "Secure enterprise email, calendar, chat, and docs with admin controls, compliance, and SLAs. Built for IT teams that need speed, safety, and simplicity.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: brand.name,
        url: `https://${brand.domain}/`,
      },
      {
        "@type": "WebSite",
        name: brand.name,
        url: `https://${brand.domain}/`,
        potentialAction: {
          "@type": "SearchAction",
          target: `https://${brand.domain}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://${brand.domain}/`} />

        {/* OpenGraph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${brand.domain}/`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-hero shadow-glow">
                <Mail className="h-4.5 w-4.5 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight">{brand.name}</p>
                <p className="text-xs text-muted-foreground">Enterprise email + collaboration</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
              <a className="hover:text-foreground" href="#features">
                Features
              </a>
              <a className="hover:text-foreground" href="#security">
                Security
              </a>
              <a className="hover:text-foreground" href="#pricing">
                Pricing
              </a>
              <a className="hover:text-foreground" href="#faq">
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="hidden sm:inline-flex">
                Contact sales
              </Button>
              <Button variant="hero" className="group">
                Request a demo
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </header>

        <main id="top">
          {/* Hero */}
          <section className="relative overflow-hidden">
            <HeroGlowField />
            <div className="container relative py-16 sm:py-20">
              <div className="mx-auto max-w-3xl text-center">
                <Pill>Built for IT teams that run serious comms</Pill>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                  Enterprise email and collaboration —
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> secure by default</span>.
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
                  Aurelia Suite combines email, calendar, chat, and document collaboration with the admin controls,
                  compliance tooling, and uptime guarantees your organization expects.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Get an enterprise demo
                    <ArrowRight />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View security brief
                  </Button>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[{ k: "99.99%", v: "SLA options" }, { k: "S/MIME", v: "and TLS enforced" }, { k: "SOC-ready", v: "controls & audits" }].map(
                    (s) => (
                      <Card key={s.k} className="p-5 shadow-soft">
                        <p className="text-2xl font-semibold tracking-tight">{s.k}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
                      </Card>
                    ),
                  )}
                </div>
              </div>

              {/* Product surface */}
              <div className="mx-auto mt-14 max-w-5xl">
                <Card className="relative overflow-hidden border/70 shadow-soft">
                  <div className="grid gap-0 lg:grid-cols-[1.05fr_.95fr]">
                    <div className="p-7 sm:p-9">
                      <p className="text-sm font-semibold text-muted-foreground">Unified workspace</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight">One suite. One policy layer.</h3>
                      <p className="mt-3 text-sm text-muted-foreground">
                        Manage identity, retention, DLP, and encryption consistently across mail, chat, and shared docs.
                        Reduce tooling sprawl while improving visibility.
                      </p>
                      <ul className="mt-6 space-y-3 text-sm">
                        {[
                          "Role-based administration with delegated permissions",
                          "Policy templates for regulated teams",
                          "Cross-suite eDiscovery and audit trails",
                        ].map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t bg-muted/30 p-7 sm:p-9 lg:border-l lg:border-t-0">
                      <div className="grid gap-4">
                        {[{
                          title: "Smart routing",
                          icon: Zap,
                          desc: "Priority inbox rules and organization-wide routing policies.",
                        },
                        {
                          title: "Real-time collaboration",
                          icon: MessagesSquare,
                          desc: "Teams chat, threaded channels, and doc comments.",
                        },
                        {
                          title: "Global delivery",
                          icon: Globe,
                          desc: "Regional data options and low-latency delivery at scale.",
                        }].map((x) => (
                          <div key={x.title} className="flex gap-3 rounded-xl border bg-card p-4 shadow-soft">
                            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent">
                              <x.icon className="h-5 w-5 text-accent-foreground" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold">{x.title}</p>
                              <p className="mt-1 text-sm text-muted-foreground">{x.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute -right-40 -top-40 h-80 w-80 rounded-full blur-3xl",
                      "bg-[radial-gradient(circle_at_center,hsl(var(--hero-to)_/_0.35),transparent_70%)]",
                    )}
                  />
                </Card>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="border-t">
            <div className="container py-16 sm:py-20">
              <SectionHeading
                eyebrow="Capabilities"
                title="Everything you need to run enterprise communication"
                description="Email, calendar, chat, and shared docs — backed by controls your auditors will recognize."
              />

              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Mail,
                    title: "Enterprise mail",
                    desc: "Advanced routing, shared mailboxes, and journaling with predictable performance.",
                  },
                  {
                    icon: Lock,
                    title: "Encryption & key control",
                    desc: "TLS enforcement, S/MIME workflows, and options for managed key ownership.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Retention & eDiscovery",
                    desc: "Retention policies, legal holds, and search across mail + collaboration artifacts.",
                  },
                  {
                    icon: Zap,
                    title: "Admin automation",
                    desc: "Provisioning, templates, and SCIM-friendly concepts to keep onboarding tight.",
                  },
                  {
                    icon: MessagesSquare,
                    title: "Secure chat",
                    desc: "Channels, DMs, and message governance designed for enterprise controls.",
                  },
                  {
                    icon: Globe,
                    title: "Data residency",
                    desc: "Regional hosting options with transparent operational practices.",
                  },
                ].map((f) => (
                  <Card key={f.title} className="p-6 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent">
                        <f.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{f.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Security */}
          <section id="security" className="relative border-t">
            <div className="container py-16 sm:py-20">
              <SectionHeading
                eyebrow="Security"
                title="Defense-in-depth with admin-grade visibility"
                description="Practical controls you can roll out quickly: encryption, policy, audit trails, and incident-ready logs."
              />

              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                <Card className="p-7 shadow-soft lg:col-span-2">
                  <h3 className="text-xl font-semibold tracking-tight">Policy layer that scales</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Apply consistent rules across mail, chat, and documents. Standardize retention, classify data, and
                    reduce exceptions that create risk.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Domain allowlists & transport rules",
                      "DLP-style patterns and sensitive labels",
                      "Admin and user audit events",
                      "Exportable compliance reports",
                    ].map((x) => (
                      <div key={x} className="flex items-start gap-2 rounded-xl border bg-muted/30 p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        <p className="text-sm">{x}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-7 shadow-soft">
                  <h3 className="text-xl font-semibold tracking-tight">Hardening highlights</h3>
                  <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {[
                      "Conditional access concepts",
                      "Device-aware sessions",
                      "Suspicious login alerts",
                      "Admin action approvals",
                      "Secure outbound relay options",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="soft" className="mt-6 w-full">
                    Download security overview
                  </Button>
                </Card>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="border-t">
            <div className="container py-16 sm:py-20">
              <SectionHeading
                eyebrow="Pricing"
                title="Plans that fit startups to global enterprises"
                description="Start with core email, then add governance and compliance as you scale."
              />

              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {[
                  {
                    name: "Core",
                    price: "$8",
                    note: "per user / month",
                    features: ["Enterprise email", "Calendar & contacts", "Basic admin", "Standard support"],
                    cta: "Start core",
                    variant: "outline" as const,
                  },
                  {
                    name: "Business",
                    price: "$16",
                    note: "per user / month",
                    features: [
                      "Core + chat",
                      "Retention policies",
                      "Audit trails",
                      "Priority support",
                    ],
                    cta: "Choose business",
                    variant: "hero" as const,
                    highlight: true,
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    note: "tailored contract",
                    features: ["SLA & SSO", "Advanced compliance", "Dedicated success", "Regional residency"],
                    cta: "Talk to sales",
                    variant: "default" as const,
                  },
                ].map((p) => (
                  <Card
                    key={p.name}
                    className={cn(
                      "p-7 shadow-soft",
                      p.highlight && "border-primary/30 shadow-glow",
                    )}
                  >
                    <p className="text-sm font-semibold text-muted-foreground">{p.name}</p>
                    <p className="mt-3 text-4xl font-semibold tracking-tight">{p.price}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                    <ul className="mt-6 space-y-3 text-sm">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={p.variant} className="mt-7 w-full" size="lg">
                      {p.cta}
                    </Button>
                  </Card>
                ))}
              </div>

              <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
                All plans include spam protection, modern authentication, and admin visibility. Volume discounts available.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="border-t">
            <div className="container py-16 sm:py-20">
              <SectionHeading
                eyebrow="FAQ"
                title="Questions IT teams ask before they commit"
                description="Clear answers—no marketing fog."
              />

              <div className="mx-auto mt-10 max-w-3xl space-y-3">
                {faqs.map((f) => (
                  <Card key={f.q} className="p-6 shadow-soft">
                    <details>
                      <summary className="cursor-pointer list-none text-base font-semibold tracking-tight">
                        {f.q}
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                    </details>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t">
            <div className="container py-16 sm:py-20">
              <div className="relative overflow-hidden rounded-2xl border bg-card p-10 shadow-soft">
                <div className="relative z-10">
                  <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    Ready to standardize your communication stack?
                  </h2>
                  <p className="mt-3 max-w-2xl text-pretty text-base text-muted-foreground">
                    We’ll map your requirements, provide a security brief, and propose a migration plan.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button variant="hero" size="lg">
                      Request a demo
                      <ArrowRight />
                    </Button>
                    <Button variant="outline" size="lg">
                      Email sales
                    </Button>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-hero opacity-[0.14]"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)_/_0.28),transparent_65%)] blur-3xl"
                />
              </div>

              <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row">
                <p>
                  © {new Date().getFullYear()} {brand.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-5">
                  <a className="hover:text-foreground" href="#security">
                    Trust
                  </a>
                  <a className="hover:text-foreground" href="#pricing">
                    Pricing
                  </a>
                  <a className="hover:text-foreground" href="#faq">
                    FAQ
                  </a>
                </div>
              </footer>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
