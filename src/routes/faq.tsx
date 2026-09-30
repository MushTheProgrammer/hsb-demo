import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/HSB_LOGO_WORDMARK.png";
import { SiteFooter } from "@/components/SiteFooter";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { SERVICE_CATALOG } from "@/lib/service-data";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

function FAQPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="HSB Consulting & Corporate Services (Pvt) Ltd."
              className="h-12 w-auto max-w-[144px] shrink-0 object-contain object-center md:h-16 md:max-w-[192px]"
            />
          </Link>
          <nav className="ml-auto hidden items-center gap-1 xl:flex">
            <Link to="/about" className="site-nav-link rounded-full px-4 py-2 text-sm font-medium">About us</Link>
            <div className="group relative">
              <button className="site-nav-link flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="site-nav-dropdown invisible absolute left-0 top-full z-50 mt-2 min-w-[280px] rounded-xl border p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {SERVICE_CATALOG.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="site-nav-link block rounded-lg px-3 py-2 text-sm font-medium"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/industries" className="site-nav-link rounded-full px-4 py-2 text-sm font-medium">Industries</Link>
            <Link to="/insights" className="site-nav-link rounded-full px-4 py-2 text-sm font-medium">Insights</Link>
            <Link to="/faq" className="site-nav-link rounded-full px-4 py-2 text-sm font-medium" aria-current="page">FAQ</Link>
          </nav>
          <div className="ml-3 hidden items-center gap-3 xl:flex">
            <a href="/#contact" className="rounded-full border border-[#d4ad4b] px-4 py-2.5 text-sm font-semibold text-[#10244a] transition-colors hover:bg-[#d4ad4b]">
              Book a Free Consultation
            </a>
            <a href="/contact" className="site-contact-link rounded-full px-5 py-2.5 text-sm font-semibold xl:inline-flex">
              Contact us
            </a>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border text-primary xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="site-mobile-menu border-t xl:hidden">
            <div className="mx-auto flex max-w-7xl flex-col p-4">
              <Link to="/about" onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-medium">About us</Link>
              <div className="px-4 py-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em]">Services</p>
                <div className="grid gap-1">
                  {SERVICE_CATALOG.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="site-nav-link rounded-lg px-3 py-2 text-sm font-medium"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/industries" onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-medium">Industries</Link>
              <Link to="/insights" onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-medium">Insights</Link>
              <Link to="/faq" onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-medium" aria-current="page">FAQ</Link>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl border border-[#d4ad4b] px-4 py-3 text-center text-sm font-semibold text-[#10244a]">Book a Free Consultation</a>
              <a href="/contact" onClick={() => setMenuOpen(false)} className="site-contact-link mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold">Contact us</a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-16 pt-32 md:pb-20 md:pt-36">
        <header className="mb-10 border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">HSB Consulting</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-primary md:text-5xl">
            Frequently Asked Questions
          </h1>
        </header>
        <section aria-label="Frequently asked questions" className="grid gap-4">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details key={question} className="group rounded-2xl border border-border bg-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-display font-bold text-primary [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}