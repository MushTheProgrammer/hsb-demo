import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import logo from "@/assets/hsb-logo.png";
import { SERVICE_CATALOG } from "@/lib/service-data";

export const Route = createFileRoute("/services/$service")({
  component: ServiceDetailPage,
  loader: ({ params }) => {
    const item = SERVICE_CATALOG.find((service) => service.slug === params.service);
    return { service: item ?? SERVICE_CATALOG[0] };
  },
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const [menuOpen, setMenuOpen] = useState(false);
  const relatedServices = SERVICE_CATALOG.filter(
    (entry) => entry.slug !== service.slug && service.related.includes(entry.slug),
  );

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#0f172a]">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_15px_35px_-30px_rgba(15,23,42,0.35)]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img src={logo} alt="HSB Consulting & Advisory (Pvt) Ltd." className="h-10 w-auto shrink-0 md:h-12" />
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            <Link to="/" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-700">Home</Link>
            <Link to="/about" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-700">About</Link>
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-700">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-2 min-w-[280px] rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {SERVICE_CATALOG.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/industries" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-700">Industries</Link>
            <Link to="/#faq" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-700">FAQ</Link>
          </nav>

          <a
            href="/#contact"
            className="ml-auto hidden rounded-full bg-[#10BFC3] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_25px_-18px_rgba(16,191,195,0.8)] transition-transform hover:scale-[1.02] lg:inline-flex"
          >
            Book a consultation
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-sky-700 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col p-4">
              <Link to="/" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">About</Link>
              <div className="px-4 py-3">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Services</div>
                <div className="grid gap-1">
                  {SERVICE_CATALOG.map((item) => (
                    <Link key={item.slug} to={`/services/${item.slug}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">{item.label}</Link>
                  ))}
                </div>
              </div>
              <Link to="/industries" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">Industries</Link>
              <Link to="/#faq" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">FAQ</Link>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-[#10BFC3] px-4 py-3 text-center text-sm font-semibold text-white">Book a consultation</a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-5 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="mt-0 text-4xl font-extrabold leading-tight text-[#132d52] md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{service.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center rounded-full bg-[#10BFC3] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:translate-y-[-1px]"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_70px_-40px_rgba(13,59,114,0.35)]">
            <img src={service.image} alt={service.title} className="h-[420px] w-full object-cover" />
          </div>
        </div>

        <section className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">What we offer</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#132d52] md:text-5xl">
              Everything included in our {service.title.toLowerCase()}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.features.map((feature, index) => (
              <div key={feature} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-[#0d3b72]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#132d52]">{feature}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {index % 2 === 0
                    ? "Designed to keep your operations clear, accurate and easier to manage."
                    : "Built for stronger control, better oversight and more confident decisions."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Our Process</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#132d52] md:text-6xl">
              How our {service.title.toLowerCase()} works
            </h2>
            <p className="mt-6 text-lg text-slate-600">A transparent, step-by-step approach to delivering results.</p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {service.steps.map((step, index) => (
              <div key={step} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0d3b72] text-3xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-[#132d52]">{step}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  We guide each stage carefully to keep your process efficient, compliant and aligned with your business goals.
                </p>
              </div>
            ))}
          </div>
        </section>

        {relatedServices.length > 0 && (
          <section className="mt-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-extrabold leading-tight text-[#132d52] md:text-5xl">
                Related Services
              </h2>
              <p className="mt-4 text-lg text-slate-600">Explore other services that complement this offering.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
                >
                  <img src={item.image} alt={item.label} className="h-44 w-full rounded-2xl object-cover" />
                  <h3 className="mt-5 text-2xl font-bold text-[#132d52]">{item.label}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{item.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 md:grid-cols-[1.2fr_1fr_1.2fr_1.2fr]">
          <div>
            <img src={logo} alt="HSB Consulting & Advisory" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              HSB Consulting & Advisory (Pvt) Ltd. delivers practical accounting, tax, secretarial,
              payroll and advisory support built on integrity, professionalism and lasting client trust.
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-slate-900">Services</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              {SERVICE_CATALOG.slice(0, 5).map((item) => (
                <li key={item.slug}>
                  <Link to={`/services/${item.slug}`} className="transition-colors hover:text-sky-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display font-bold text-slate-900">Contact</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-sky-700" /> <span>076-7999939</span></li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-sky-700" /> <span>077-8850441</span></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-sky-700" /> <a href="mailto:hbhamz@yahoo.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-sky-700">hbhamz@yahoo.com</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-sky-700" /> <span>C1/3/5, Forbes Lane, Maradana, Colombo 10</span></li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {[
                { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
                { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
                { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
              ].map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-50 text-sky-700 transition-colors hover:bg-sky-50"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display font-bold text-slate-900">Location</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
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
        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-5 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} HSB Consulting & Advisory (Pvt) Ltd.
        </div>
      </footer>
    </div>
  );
}
