import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ChevronDown, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/hsb-logo.png";
import { SERVICE_CATALOG } from "@/lib/service-data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-[0_15px_35px_-30px_rgba(15,23,42,0.35)]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img src={logo} alt="HSB Consulting & Advisory" className="h-10 w-auto shrink-0 md:h-12" />
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            <Link to="/" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-700">Home</Link>
            <Link to="/about" className="rounded-full px-4 py-2 text-sm font-medium text-sky-700 transition-colors hover:bg-slate-100">About</Link>
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
              <Link to="/about" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-sky-700 hover:bg-slate-100">About</Link>
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

      <main className="mx-auto max-w-6xl px-5 pt-32 pb-16 md:pt-36 md:pb-20">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_-40px_rgba(13,59,114,0.35)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">About us</p>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">About HSB</h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            <p>
              At HSB, we believe that professional services are about more than numbers, reports, and compliance. They are about understanding businesses, building trusted relationships, and providing the insight and confidence our clients need to make better decisions.
            </p>
            <p>
              In an increasingly complex and competitive business environment, organisations need more than technical expertise. They need a professional partner who understands their challenges, sees beyond the numbers, identifies risks and opportunities, and provides practical solutions that create lasting value.
            </p>
            <p>
              HSB brings together professional expertise, independent perspective, and practical business insight to support our clients across assurance, accounting, taxation, secretarial services, internal audit, risk management, advisory, and business consultancy.
            </p>
            <p>
              Our approach is built on integrity, professional excellence, independence, confidentiality, and client focus. We take the time to understand each client's individual circumstances and tailor our services to address their specific needs.
            </p>
            <p>
              We aim not merely to identify what has happened, but to help our clients understand why it happened, what it means, and what can be done better. Through this approach, we seek to become a trusted professional partner in our clients' journey towards stronger governance, improved performance, sustainable growth, and long-term success.
            </p>
            <p>
              At HSB, we turn complexity into clarity, insight into confidence, and professional expertise into lasting value.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Our focus</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Vision",
                text: "To be the trusted professional partner behind confident decisions, sustainable growth and lasting business success.",
              },
              {
                title: "Mission",
                text: "To provide exceptional assurance, advisory, taxation and business solutions through professional excellence, integrity and practical insight.",
              },
              {
                title: "Approach",
                text: "We take time to understand each client’s circumstances and tailor our services to meet their specific needs.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-sky-200 bg-white p-6 shadow-[0_20px_45px_-32px_rgba(13,59,114,0.35)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-sky-100 bg-sky-50/80 p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Why choose HSB Associates</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">Why choose HSB Associates</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Professional Expertise",
                text: "Our team brings together professional knowledge and practical experience across accounting, taxation, assurance, audit, advisory, and business consultancy.",
              },
              {
                title: "Client-Focused Approach",
                text: "Every business is different. We take the time to understand our clients' unique circumstances, challenges, and objectives, allowing us to provide solutions that are relevant and tailored to their needs.",
              },
              {
                title: "Integrity & Independence",
                text: "We are committed to maintaining the highest standards of integrity, objectivity, and professional independence in everything we do, ensuring our clients can rely on our advice and professional judgment.",
              },
              {
                title: "Practical Business Insight",
                text: "We look beyond the numbers to understand the factors influencing business performance. Our focus is on providing practical recommendations that can be implemented and create meaningful value.",
              },
              {
                title: "Confidentiality & Trust",
                text: "We understand the importance of protecting sensitive financial and business information. Confidentiality, discretion, and trust are fundamental to the relationships we build with our clients.",
              },
              {
                title: "Long-Term Partnership",
                text: "We aim to be more than a service provider. By developing lasting relationships and providing ongoing guidance, we support our clients through changing business environments and towards sustainable growth.",
              },
              {
                title: "Turning Complexity into Clarity",
                text: "From regulatory requirements and financial information to business challenges and risks, we help simplify complexity and provide clear, informed perspectives that give our clients greater confidence in their decisions.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Need support?</p>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h3 className="max-w-xl text-3xl font-extrabold text-slate-900">Let’s build a clearer path for your next stage of growth.</h3>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#10BFC3] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:translate-y-[-1px]"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
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
              {[{ label: "Facebook", icon: Facebook, href: "https://facebook.com" }, { label: "Instagram", icon: Instagram, href: "https://instagram.com" }, { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" }].map(({ label, icon: Icon, href }) => (
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
