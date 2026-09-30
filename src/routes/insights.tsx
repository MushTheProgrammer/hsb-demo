import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/HSB_LOGO_WORDMARK.png";
import { SiteFooter } from "@/components/SiteFooter";
import { SERVICE_CATALOG } from "@/lib/service-data";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
});

function InsightsPage() {
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
            <Link to="/insights" className="site-nav-link rounded-full px-4 py-2 text-sm font-medium" aria-current="page">Insights</Link>
            <Link to="/faq" className="site-nav-link rounded-full px-4 py-2 text-sm font-medium">FAQ</Link>
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
            className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border text-white xl:hidden"
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
              <Link to="/faq" onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-medium">FAQ</Link>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl border border-[#d4ad4b] px-4 py-3 text-center text-sm font-semibold text-[#10244a]">Book a Free Consultation</a>
              <a href="/contact" onClick={() => setMenuOpen(false)} className="site-contact-link mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold">Contact us</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-28 md:pt-32">
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Insights</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl">Events, articles and updates</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
              News and practical perspectives from HSB on business, finance and governance.
            </p>
          </div>
        </section>

        <section id="events" className="scroll-mt-28 bg-background py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Events</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Workshops, sessions and events from HSB.
            </p>
          </div>
        </section>

        <section id="articles" className="scroll-mt-28 bg-card py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Articles</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Practical perspectives on accounting, tax, governance and business.
            </p>
          </div>
        </section>

        <section id="news" className="scroll-mt-28 bg-background py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">News and Updates</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              HSB announcements and relevant regulatory updates.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
