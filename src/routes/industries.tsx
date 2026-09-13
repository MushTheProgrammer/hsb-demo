import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Factory,
  GraduationCap,
  Leaf,
  Menu,
  ShoppingCart,
  Truck,
  UsersRound,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/hsb-logo.png";
import { SERVICE_CATALOG } from "@/lib/service-data";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
});

const industries = [
  {
    title: "Manufacturing & Industrial",
    description: "End-to-end support for production businesses handling cost monitoring, process control, compliance and reporting requirements.",
    icon: Factory,
  },
  {
    title: "Cargo, Logistics & Transportation",
    description: "Practical financial and compliance support for operationally complex transport and logistics businesses.",
    icon: Truck,
  },
  {
    title: "Retail & Trading",
    description: "Commercial support for trading businesses needing clean books, tax clarity and efficient control systems.",
    icon: ShoppingCart,
  },
  {
    title: "Restaurants & Food Businesses",
    description: "Guidance for hospitality and food ventures managing margins, compliance, growth planning and reporting.",
    icon: UtensilsCrossed,
  },
  {
    title: "Educational Institutions",
    description: "Support for institutions seeking strong financial governance, compliance and long-term sustainability.",
    icon: GraduationCap,
  },
  {
    title: "Agricultural & Fertilizer Imports",
    description: "Specialist support for import-driven and agricultural businesses navigating inventory, tax and compliance issues.",
    icon: Leaf,
  },
  {
    title: "Professional Services",
    description: "Advisory and reporting support for professional firms that need dependable financial insight and governance.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Small & Medium Enterprises",
    description: "Tailored support to help growing businesses improve structure, reporting, compliance and decision-making.",
    icon: UsersRound,
  },
];

function IndustriesPage() {
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
            <Link to="/industries" className="rounded-full px-4 py-2 text-sm font-medium text-sky-700 transition-colors hover:bg-slate-100">Industries</Link>
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
              <Link to="/industries" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-sky-700 hover:bg-slate-100">Industries</Link>
              <Link to="/#faq" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">FAQ</Link>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-[#10BFC3] px-4 py-3 text-center text-sm font-semibold text-white">Book a consultation</a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-5 pt-32 pb-16 md:pt-36 md:pb-20">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_-40px_rgba(13,59,114,0.35)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Industries</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">Where we support businesses</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            HSB works closely with organisations across a range of commercial sectors, helping them strengthen reporting, compliance, financial clarity and operational decision-making.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-32px_rgba(13,59,114,0.35)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3E9] text-[#556F44]">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold leading-snug text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 break-words">{description}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Need tailored support?</p>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">Let’s discuss what your business needs.</h2>
            <Link to="/#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-transform hover:translate-y-[-1px]">
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
