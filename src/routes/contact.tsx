import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/HSB_LOGO_WORDMARK.png";
import { SiteFooter } from "@/components/SiteFooter";
import { SERVICE_CATALOG } from "@/lib/service-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
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
            <Link to="/faq" className="site-nav-link rounded-full px-4 py-2 text-sm font-medium">FAQ</Link>
          </nav>
          <div className="ml-3 hidden items-center gap-3 xl:flex">
            <a href="/#contact" className="rounded-full border border-[#d4ad4b] px-4 py-2.5 text-sm font-semibold text-[#10244a] transition-colors hover:bg-[#d4ad4b]">
              Book a Free Consultation
            </a>
            <a href="/contact" className="site-contact-link rounded-full px-5 py-2.5 text-sm font-semibold xl:inline-flex" aria-current="page">
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
              <Link to="/faq" onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-medium">FAQ</Link>
              <Link to="/#contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl border border-[#d4ad4b] px-4 py-3 text-center text-sm font-semibold text-[#10244a]">Book a Free Consultation</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="site-contact-link mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold">Contact us</Link>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-12 pt-32 md:pt-36">
        <section className="border-b border-border pb-10 md:pb-14">
          <h1 className="mt-3 text-4xl font-extrabold text-primary md:text-5xl">Contact us</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Speak with our team or book a free consultation to discuss your business needs.
          </p>
        </section>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <section aria-labelledby="contact-details-title">
            <h2 id="contact-details-title" className="text-2xl font-bold text-primary">Contact details</h2>
            <div className="mt-6 grid gap-6">
              <a href="tel:0707999939" className="flex items-start gap-4 text-foreground hover:text-primary">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span><span className="block font-semibold">Phone</span><span className="mt-1 block text-muted-foreground">070-7999939</span></span>
              </a>
              <a href="mailto:hbhamz@yahoo.com" className="flex items-start gap-4 text-foreground hover:text-primary">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span><span className="block font-semibold">Email</span><span className="mt-1 block text-muted-foreground">hbhamz@yahoo.com</span></span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span><span className="block font-semibold">Office</span><span className="mt-1 block text-muted-foreground">C1/3/5, Forbes Lane, Maradana, Colombo 10</span></span>
              </div>
            </div>
            <div className="mt-8 overflow-hidden border border-border bg-card">
              <iframe
                title="HSB Consulting & Corporate Services office location"
                src="https://www.google.com/maps?q=C1%2F3%2F5%2C%20Forbes%20Lane%2C%20Maradana%2C%20Colombo%2010&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section aria-labelledby="booking-title">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-6 w-6 text-accent" />
              <h2 id="booking-title" className="text-2xl font-bold text-primary">Book a Free Consultation</h2>
            </div>
            <iframe
              title="Book a free consultation with HSB"
              src="https://calendly.com/iammush22/30min?hide_event_type_details=1"
              className="calendly-contact-embed mt-5 w-full border-0 bg-transparent"
              loading="lazy"
            />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
