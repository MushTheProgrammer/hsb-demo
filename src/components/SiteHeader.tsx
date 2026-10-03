import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/HSB_LOGO_WORDMARK.png";
import { SERVICE_CATALOG } from "@/lib/service-data";

const aboutPages = [
  { label: "About the company", href: "/about/company" },
  { label: "Why Choose Us", href: "/about/why-choose-us" },
  { label: "Leadership Team", href: "/about/leadership" },
];

const insightPages = [
  { label: "Events", href: "/insights/events" },
  { label: "Articles", href: "/insights/articles" },
  { label: "News and Updates", href: "/insights/news" },
];

const primaryLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
];

function DropdownNav({ label, href, items }: { label: string; href: string; items: { label: string; href: string }[] }) {
  return (
    <div className="group relative">
      <div className="flex items-center">
        <a href={href} className="site-nav-link rounded-l-full py-2 pl-3 pr-1 text-sm font-medium">{label}</a>
        <button type="button" aria-label={`Show ${label} pages`} className="site-nav-link rounded-r-full py-2 pl-1 pr-3">
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      <div className="site-nav-dropdown invisible absolute left-0 top-full z-50 mt-2 min-w-56 rounded-lg border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {items.map((item) => (
          <a key={item.href} href={item.href} className="site-nav-link block rounded-md px-3 py-2 text-sm font-medium">{item.label}</a>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header shared-site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-3">
        <a href="/" className="flex min-w-0 items-center">
          <img src={logo} alt="HSB Consulting & Corporate Services (Pvt) Ltd." className="h-12 w-auto max-w-[144px] object-contain md:h-16 md:max-w-[192px]" />
        </a>
        <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-1 xl:flex">
          <DropdownNav label="About us" href="/about/company" items={aboutPages} />
          <div className="group relative">
            <button type="button" className="site-nav-link flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="site-nav-dropdown invisible absolute left-0 top-full z-50 mt-2 max-h-[75vh] min-w-64 overflow-y-auto rounded-lg border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {SERVICE_CATALOG.map((service) => (
                <a key={service.slug} href={`/services/${service.slug}`} className="site-nav-link block rounded-md px-3 py-2 text-sm font-medium">{service.label}</a>
              ))}
            </div>
          </div>
          {primaryLinks.slice(0, 1).map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link rounded-full px-3 py-2 text-sm font-medium">{item.label}</a>
          ))}
          <DropdownNav label="Insights" href="/insights/events" items={insightPages} />
          {primaryLinks.slice(1).map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link rounded-full px-3 py-2 text-sm font-medium">{item.label}</a>
          ))}
          <a href="/#contact" className="site-consultation-link ml-2 rounded-full border px-3 py-2 text-sm font-semibold">Book a Free Consultation</a>
          <a href="/contact" className="site-contact-link rounded-full px-4 py-2 text-sm font-semibold">Contact us</a>
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border text-primary xl:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="site-mobile-menu border-t p-3 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            <a href="/about/company" onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-semibold">About us</a>
            {aboutPages.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="site-nav-link rounded-lg py-2 pl-8 pr-4 text-sm">{item.label}</a>
            ))}
            <details className="px-4 py-2">
              <summary className="cursor-pointer py-2 text-sm font-semibold">Services</summary>
              <div className="grid gap-1">
                {SERVICE_CATALOG.map((service) => (
                  <a key={service.slug} href={`/services/${service.slug}`} onClick={() => setMenuOpen(false)} className="site-nav-link rounded-lg px-3 py-2 text-sm">{service.label}</a>
                ))}
              </div>
            </details>
            <a href="/industries" onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-medium">Industries</a>
            <a href="/insights/events" onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-semibold">Insights</a>
            {insightPages.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="site-nav-link rounded-lg py-2 pl-8 pr-4 text-sm">{item.label}</a>
            ))}
            {primaryLinks.slice(1).map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="site-nav-link rounded-xl px-4 py-3 text-sm font-medium">{item.label}</a>
            ))}
            <a href="/#contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl border border-[#d4ad4b] px-4 py-3 text-center text-sm font-semibold text-[#10244a]">Book a Free Consultation</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="site-contact-link mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold">Contact us</a>
          </div>
        </nav>
      )}
    </header>
  );
}