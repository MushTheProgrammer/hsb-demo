import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  Facebook,
  FileSearch,
  Instagram,
  Landmark,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import contactAnimationSvg from "@/assets/Video call.svg";
import logo from "@/assets/hsb-logo.png";
import { Reveal } from "@/components/Reveal";
import { SERVICE_CATALOG } from "@/lib/service-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HSB Consulting & Advisory (Pvt) Ltd." },
      {
        name: "description",
        content:
          "HSB Consulting & Advisory (Pvt) Ltd. provides assurance, accounting, taxation, secretarial, payroll, risk and business advisory services to SMEs and growing organisations.",
      },
      { property: "og:title", content: "HSB Consulting & Advisory (Pvt) Ltd." },
      {
        property: "og:description",
        content:
          "Professional assurance, advisory, taxation and business support built on trust, integrity and practical insight.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#services", items: SERVICE_CATALOG.map((service) => ({
      label: service.label,
      href: `/services/${service.slug}`,
    })) },
  { label: "Industries", href: "/industries" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  {
    slug: "accounting-bookkeeping",
    tag: "01 · Accounting",
    title: "Accounting & Bookkeeping Services",
    body: "Accurate bookkeeping, financial record maintenance and management reporting that support clear decision-making and dependable business records.",
    icon: FileSearch,
    art: "audit",
  },
  {
    slug: "tax-consultancy",
    tag: "02 · Tax",
    title: "Tax Consultancy & Advisory",
    body: "Practical tax guidance, compliance support and strategic advice that help clients manage obligations with confidence and efficiency.",
    icon: Landmark,
    art: "flow",
  },
  {
    slug: "company-secretarial",
    tag: "03 · Secretarial",
    title: "Company Secretarial Services",
    body: "Corporate governance, statutory administration and document management support to help businesses remain compliant and well organised.",
    icon: Building2,
    art: "docs",
  },
  {
    slug: "vat-svat-income-tax-compliance",
    tag: "04 · Tax Compliance",
    title: "VAT, SVAT & Income Tax Compliance",
    body: "Tax compliance support covering VAT, SVAT and income tax filing, deadline monitoring and practical guidance for smoother regulatory handling.",
    icon: Landmark,
    art: "flow",
  },
  {
    slug: "payroll-management",
    tag: "05 · Payroll",
    title: "Payroll Management Services",
    body: "Confidential payroll processing, statutory calculations, reconciliations and reporting carried out with accuracy and professionalism.",
    icon: BarChart3,
    art: "pulse",
  },
  {
    slug: "financial-statement-preparation",
    tag: "06 · Reporting",
    title: "Financial Statement Preparation",
    body: "Preparation of clear and accurate financial statements and related schedules that enable informed reporting and management decisions.",
    icon: Layers,
    art: "forecast",
  },
  {
    slug: "internal-audit",
    tag: "07 · Risk",
    title: "Internal Audit",
    body: "Independent review of internal controls, processes and systems to reduce operational risk and strengthen business oversight.",
    icon: ShieldCheck,
    art: "shield",
  },
  {
    slug: "management-consultancy",
    tag: "08 · Strategy",
    title: "Management Consultancy",
    body: "Business-focused guidance to improve performance, strengthen decision-making and support sustainable growth across the organisation.",
    icon: TrendingUp,
    art: "bars",
  },
];

const DELIVERABLES = [
  { icon: "📘", label: "Accurate financial records" },
  { icon: "🧾", label: "Tax and compliance support" },
  { icon: "🛡️", label: "Corporate secretarial filings" },
  { icon: "📊", label: "Payroll reports and reconciliations" },
  { icon: "🏢", label: "Board and shareholder documentation" },
  { icon: "🔍", label: "Internal control and risk review" },
  { icon: "⚖️", label: "Management consultancy guidance" },
];

const INDUSTRIES = [
  "Manufacturing & Industrial",
  "Cargo, Logistics & Transportation",
  "Retail & Trading",
  "Restaurants & Food Businesses",
  "Educational Institutions",
  "Agricultural & Fertilizer Imports",
  "Professional Services",
  "Small & Medium Enterprises",
  "Corporate & Entrepreneurial Businesses",
  "Other growing businesses",
];

const FAQS = [
  {
    q: "What services does HSB provide?",
    a: "HSB supports clients across accounting and bookkeeping, tax consultancy, company secretarial services, payroll, financial statement preparation, internal audit, and business advisory.",
  },
  {
    q: "Who do you work with?",
    a: "We support SMEs, growing businesses and organisations across manufacturing, logistics, education, retail, professional services, agriculture and other corporate sectors.",
  },
  {
    q: "How do you support corporate compliance?",
    a: "We handle company incorporation, annual returns, statutory registers, board and shareholder resolutions, share changes, regulatory filings and governance support.",
  },
  {
    q: "Do you provide payroll support?",
    a: "Yes. We provide monthly payroll processing, salary calculations, EPF/ETF compliance support, reporting, leaves and payroll reconciliations with strict confidentiality.",
  },
  {
    q: "How can I get in touch?",
    a: "You can reach us at 076-7999939 / 077-8850441, via WhatsApp on the same numbers, or by email at hbhamz@yahoo.com.",
  },
];

function ServiceArt({ kind }: { kind: string }) {
  const stroke = "oklch(0.35 0.13 268)";
  const accent = "oklch(0.65 0.13 195)";
  const gold = "oklch(0.79 0.13 82)";

  if (kind === "bars") {
    return (
      <svg viewBox="0 0 200 90" className="h-20 w-full">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={22 + i * 34}
            y={30 + (i % 3) * 12}
            width="18"
            height={50 - (i % 3) * 12}
            rx="5"
            fill={i % 2 ? accent : stroke}
            className="svg-bar"
            style={{ animationDelay: `${-i * 0.4}s` }}
          />
        ))}
        <line x1="10" y1="82" x2="190" y2="82" stroke={stroke} strokeWidth="2" opacity=".25" />
      </svg>
    );
  }
  if (kind === "flow") {
    return (
      <svg viewBox="0 0 200 90" className="h-20 w-full">
        <circle cx="28" cy="45" r="12" fill={stroke} opacity=".9" />
        <circle cx="100" cy="24" r="10" fill={accent} />
        <circle cx="100" cy="66" r="10" fill={gold} />
        <circle cx="172" cy="45" r="12" fill={stroke} opacity=".9" />
        <g stroke={accent} strokeWidth="2" fill="none" className="svg-dash">
          <path d="M40 45 C 62 45, 70 24, 90 24" />
          <path d="M40 45 C 62 45, 70 66, 90 66" />
          <path d="M110 24 C 130 24, 138 45, 160 45" />
          <path d="M110 66 C 130 66, 138 45, 160 45" />
        </g>
      </svg>
    );
  }
  if (kind === "docs") {
    return (
      <svg viewBox="0 0 200 90" className="h-20 w-full">
        {[0, 1, 2].map((i) => (
          <g key={i} className="float-slow" style={{ animationDelay: `${-i * 1.4}s` }}>
            <rect
              x={40 + i * 42}
              y={16 + i * 4}
              width="44"
              height="58"
              rx="6"
              fill="white"
              stroke={stroke}
              strokeWidth="2"
              opacity=".95"
            />
            <line x1={48 + i * 42} y1={30 + i * 4} x2={74 + i * 42} y2={30 + i * 4} stroke={accent} strokeWidth="3" />
            <line x1={48 + i * 42} y1={40 + i * 4} x2={70 + i * 42} y2={40 + i * 4} stroke={stroke} strokeWidth="2" opacity=".4" />
            <line x1={48 + i * 42} y1={50 + i * 4} x2={76 + i * 42} y2={50 + i * 4} stroke={stroke} strokeWidth="2" opacity=".4" />
          </g>
        ))}
      </svg>
    );
  }
  if (kind === "forecast") {
    return (
      <svg viewBox="0 0 200 90" className="h-20 w-full">
        <path d="M14 70 L60 52 L104 58 L146 30" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <path d="M146 30 L188 14" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" className="svg-dash" />
        <circle cx="146" cy="30" r="6" fill={accent} />
        <circle cx="146" cy="30" r="6" fill={accent} className="svg-ping" />
        <line x1="10" y1="82" x2="190" y2="82" stroke={stroke} strokeWidth="2" opacity=".25" />
      </svg>
    );
  }
  if (kind === "pulse") {
    return (
      <svg viewBox="0 0 200 90" className="h-20 w-full">
        <path d="M10 64 H52 L68 42 L90 64 H118 L134 26 L166 64 H190" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="166" cy="64" r="8" fill={gold} />
        <circle cx="166" cy="64" r="15" fill="none" stroke={gold} strokeWidth="2" opacity="0.55" className="svg-ping" />
      </svg>
    );
  }
  if (kind === "shield") {
    return (
      <svg
        viewBox="0 0 200 120"
        className="h-20 w-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block" }}
      >
        <path
          d="M100 12 L148 24 V56 C148 77 128 94 100 106 C72 94 52 77 52 56 V24 L100 12 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <circle cx="100" cy="28" r="10" fill={accent} />
        <path
          d="M82 58 L94 70 L122 42"
          fill="none"
          stroke={gold}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 90" className="h-20 w-full">
      <rect x="46" y="12" width="80" height="66" rx="8" fill="white" stroke={stroke} strokeWidth="2" />
      <line x1="58" y1="30" x2="112" y2="30" stroke={stroke} strokeWidth="2" opacity=".4" />
      <line x1="58" y1="42" x2="102" y2="42" stroke={stroke} strokeWidth="2" opacity=".4" />
      <line x1="58" y1="54" x2="108" y2="54" stroke={stroke} strokeWidth="2" opacity=".4" />
      <g className="float-slow">
        <circle cx="136" cy="56" r="22" fill="none" stroke={accent} strokeWidth="3" />
        <line x1="152" y1="72" x2="170" y2="88" stroke={accent} strokeWidth="4" strokeLinecap="round" />
        <path d="M126 56 l7 8 l14 -17" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const calendlyWidgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const renderCalendly = () => {
      const container = calendlyWidgetRef.current;
      if (!container) return;

      const initWidget = () => {
        const calendlyWindow = window as typeof window & {
          Calendly?: { initInlineWidget: (config: { url: string; parentElement: HTMLDivElement }) => void };
        };

        if (!calendlyWindow.Calendly || !container) return;

        container.innerHTML = "";
        calendlyWindow.Calendly.initInlineWidget({
          url: "https://calendly.com/iammush22/30min?hide_event_type_details=1",
          parentElement: container,
        });
      };

      const existingScript = document.querySelector('script[src*="assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        if ((existingScript as HTMLScriptElement).dataset["loaded"] === "true") {
          initWidget();
          return;
        }

        existingScript.addEventListener("load", initWidget, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        (script as HTMLScriptElement).dataset["loaded"] = "true";
        initWidget();
      };
      document.body.appendChild(script);
    };

    renderCalendly();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-[0_10px_30px_-24px_oklch(0.35_0.13_268/0.6)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="HSB Consulting & Advisory (Pvt) Ltd."
              className="h-10 w-auto shrink-0 md:h-12"
            />
          </a>
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {NAV.map((n) => {
              if (n.label === "Services") {
                return (
                  <div key={n.label} className="group relative">
                    <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary">
                      {n.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="invisible absolute left-0 top-full z-50 mt-2 min-w-[280px] rounded-2xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                      {n.items?.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (n.href.startsWith("/")) {
                return (
                  <Link
                    key={n.href}
                    to={n.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                  >
                    {n.label}
                  </Link>
                );
              }

              return (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                >
                  {n.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#contact"
            className="shine ml-auto hidden rounded-full bg-[#10BFC3] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 lg:ml-3 lg:inline-flex"
          >
            Book a consultation
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="glass border-t border-border lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col p-4">
              {NAV.map((n) => {
                if (n.label === "Services") {
                  return (
                    <div key={n.label} className="rounded-xl px-2 py-2">
                      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Services
                      </div>
                      <div className="grid gap-1">
                        {n.items?.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-soft"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (n.href.startsWith("/")) {
                  return (
                    <Link
                      key={n.href}
                      to={n.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-primary-soft"
                    >
                      {n.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-primary-soft"
                  >
                    {n.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-[#10BFC3] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Book a consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="hero-mesh relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl blob" />
        <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-gold/25 blur-3xl blob" style={{ animationDelay: "-6s" }} />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Accounting · Tax · Secretarial · Advisory
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 max-w-[12ch] text-balance text-[2.45rem] font-extrabold leading-[0.96] sm:max-w-none sm:text-5xl lg:text-6xl">
                Professional clarity for <span className="gradient-text">confident business decisions.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                HSB Consulting & Advisory (Pvt) Ltd. helps businesses make sense of complexity through
                accurate financial reporting, tax guidance, governance support and practical advice
                tailored to each client’s needs.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <a
                  href="#services"
                  className="shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#10BFC3] px-7 py-3.5 font-semibold text-white transition-transform hover:scale-[1.01] sm:w-auto"
                >
                  Explore our services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <dl className="mt-12 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                {[
                  ["Integrity", "trusted counsel"],
                  ["Professionalism", "client-first service"],
                  ["Confidentiality", "secure support"],
                ].map(([a, b]) => (
                  <div key={a}>
                    <dt className="font-display text-lg font-bold text-primary">{a}</dt>
                    <dd className="text-sm text-muted-foreground">{b}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="float-slow relative rounded-[2rem] border border-primary/10 bg-card/85 p-6 shadow-[0_40px_80px_-50px_oklch(0.35_0.13_268/0.65)] backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-bold text-primary">Audit readiness</p>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary">
                  On track
                </span>
              </div>
              <ServiceArt kind="bars" />
              <div className="mt-4 grid gap-3">
                {[
                  ["Planning & risk assessment", "Complete"],
                  ["Controls walkthrough", "In review"],
                  ["Substantive testing", "Scheduled"],
                ].map(([label, state], i) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3"
                  >
                    <CheckCircle2
                      className={`h-5 w-5 shrink-0 ${i === 0 ? "text-accent" : "text-muted-foreground/50"}`}
                    />
                    <span className="min-w-0 flex-1 truncate text-sm font-medium">{label}</span>
                    <span className="shrink-0 text-xs font-semibold text-muted-foreground">{state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="float-slow absolute -bottom-12 -left-10 z-10 hidden rounded-2xl border border-primary/10 bg-card px-5 py-4 shadow-xl sm:block" style={{ animationDelay: "-3s" }}>
              <p className="font-display text-2xl font-extrabold text-primary">Trusted</p>
              <p className="text-xs text-muted-foreground">business support and guidance</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="soft-mesh py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">About us</p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl">
                Trusted professional support for <span className="text-primary">stronger decisions and sustainable growth.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                At HSB, we believe professional services are about more than numbers, reports and
                compliance. They are about understanding businesses, building trusted relationships,
                and providing the insight and confidence our clients need to make better decisions.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                HSB Consulting & Advisory (Pvt) Ltd. brings together professional expertise,
                independent perspective and practical business insight across assurance, accounting,
                taxation, secretarial services, internal audit, risk management, advisory and business
                consultancy.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Partner-led", "every engagement", Building2],
                  ["Risk-based", "testing approach", ShieldCheck],
                  ["Sector depth", "10+ industries", Layers],
                  ["Clear fees", "agreed before we start", Scale],
                ].map(([a, b, Icon], i) => (
                  <div
                    key={a as string}
                    className={`lift rounded-3xl border border-primary/10 bg-card p-6 ${i % 2 ? "sm:translate-y-6" : ""}`}
                  >
                    {(() => {
                      const I = Icon as typeof Building2;
                      return (
                        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                          <I className="h-5 w-5" />
                        </span>
                      );
                    })()}
                    <p className="mt-4 font-display text-lg font-bold">{a as string}</p>
                    <p className="text-sm text-muted-foreground">{b as string}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Our services</p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl">
              Business support built around your goals
            </h2>
            <p className="mt-4 text-muted-foreground">
              From bookkeeping and payroll to tax, compliance and strategic advisory, we help clients
              make informed decisions with clarity and confidence.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const serviceImage = SERVICE_CATALOG.find((item) => item.slug === s.slug)?.image;

              return (
                <Reveal key={s.title} delay={i * 70}>
                  <article className="lift group flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3">
                      <span className="float-slow grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:rotate-[-6deg] group-hover:scale-110" style={{ animationDelay: `${-i}s` }}>
                        <s.icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    {serviceImage ? (
                      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-secondary/60">
                        <img
                          src={serviceImage}
                          alt={s.title}
                          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : null}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section id="deliverables" className="deep-mesh relative overflow-hidden py-24 text-primary-foreground">
        <div className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full bg-accent/25 blur-3xl blob" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Deliverables</p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl">
                Clear financial reporting and practical support for growth.
              </h2>
              <p className="mt-5 text-primary-foreground/75">
                We deliver dependable information, compliant processes and straightforward guidance that
                helps management and stakeholders make confident decisions.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Accurate financial statements and reporting packs",
                "Tax and statutory compliance guidance",
                "Corporate governance and secretarial documentation",
                "Payroll, reconciliations and management reporting",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 80}>
                  <div className="flex items-start gap-3 text-sm text-primary-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={140}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {DELIVERABLES.map((d, i) => (
                <li
                  key={d.label}
                  className="lift flex items-center gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-4 backdrop-blur"
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  <span className="text-xl">{d.icon}</span>
                  <span className="min-w-0 text-sm font-medium">{d.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES marquee */}
      <section id="industries" className="border-y border-border bg-card py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Industries</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Sectors we know well</h2>
          </Reveal>
        </div>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex w-max gap-4">
            {[...INDUSTRIES, ...INDUSTRIES].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="rounded-full border border-[#faff00]/35 bg-[#faff00] px-6 py-3 text-sm font-semibold whitespace-nowrap text-[#1b1f1a] shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Common questions</h2>
          </Reveal>
          <div className="mt-10 grid gap-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="min-w-0 flex-1 font-display font-bold">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="hero-mesh relative overflow-hidden py-24">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold/25 blur-3xl blob" />
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-extrabold sm:text-5xl">
              Let’s build a clearer path for <span className="gradient-text">your next stage of growth.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              We help businesses strengthen governance, improve financial clarity and stay compliant
              with practical support designed around each client’s needs.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto mt-9 max-w-[1400px]">
              <div className="w-full max-w-[1200px] justify-self-center bg-transparent shadow-none md:justify-self-center">
                <div
                  ref={calendlyWidgetRef}
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/iammush22/30min?hide_event_type_details=1"
                  style={{ minWidth: "320px", height: "600px", width: "100%", border: "none", borderRadius: 0, overflow: "hidden" }}
                />
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Professional support · Confidential guidance · Practical solutions
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card py-10">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 md:grid-cols-[1.2fr_1fr_1.2fr_1.2fr]">
          <div>
            <img src={logo} alt="HSB Consulting & Advisory" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              HSB Consulting & Advisory (Pvt) Ltd. delivers practical accounting, tax, secretarial,
              payroll and advisory support built on integrity, professionalism and lasting client trust.
            </p>
          </div>
          <div>
            <p className="font-display font-bold">Services</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="transition-colors hover:text-primary">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display font-bold">Contact</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>076-7999939</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>077-8850441</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hbhamz@yahoo.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
                  hbhamz@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>C1/3/5, Forbes Lane, Maradana, Colombo 10</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {[{ label: "Facebook", icon: Facebook, href: "https://facebook.com" }, { label: "Instagram", icon: Instagram, href: "https://instagram.com" }, { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" }].map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-primary transition-colors hover:bg-primary-soft"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display font-bold">Location</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
              <iframe
                title="HSB location map"
                src="https://www.google.com/maps?q=C1%2F3%2F5%2C%20Forbes%20Lane%2C%20Maradana%2C%20Colombo%2010&output=embed"
                className="h-32 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-border px-5 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} HSB Consulting & Advisory (Pvt) Ltd.
        </div>
      </footer>
    </div>
  );
}
