import { useState } from "react";
import { createFileRoute, Link, Outlet, redirect, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import expertiseIcon from "@/assets/why-expertise.png";
import clientFocusIcon from "@/assets/why-client-focus.png";
import integrityIcon from "@/assets/why-integrity.png";
import insightIcon from "@/assets/why-insight.png";
import confidentialityIcon from "@/assets/why-confidentiality.png";
import partnershipIcon from "@/assets/why-partnership.png";
import visionIcon from "@/assets/vision.png";
import missionIcon from "@/assets/mission.png";
import approachIcon from "@/assets/approach.png";
import logo from "@/assets/HSB_LOGO_WORDMARK.png";
import founderPhoto from "@/assets/img/found.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { SERVICE_CATALOG } from "@/lib/service-data";

export const Route = createFileRoute("/about")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/about") {
      throw redirect({ href: "/about/company" });
    }
  },
  component: AboutPage,
});

function AboutPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  if (pathname !== "/about") {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-[0_15px_35px_-30px_rgba(15,23,42,0.35)]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img src={logo} alt="HSB Consulting & Corporate Services (Pvt) Ltd." className="h-12 w-auto max-w-[144px] shrink-0 object-contain object-center md:h-16 md:max-w-[192px]" />
          </Link>

          <nav className="ml-auto hidden items-center gap-1 xl:flex">
            <Link to="/about" className="rounded-full px-4 py-2 text-sm font-medium text-sky-700 transition-colors hover:bg-slate-100">About us</Link>
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
            <Link to="/insights" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-700">Insights</Link>
            <Link to="/faq" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-sky-700">FAQ</Link>
          </nav>

          <div className="ml-3 hidden items-center gap-3 xl:flex">
            <a href="/#contact" className="rounded-full border border-[#d4ad4b] px-4 py-2.5 text-sm font-semibold text-[#10244a] transition-colors hover:bg-[#d4ad4b]">
              Book a Free Consultation
            </a>
            <a href="/contact" className="rounded-full bg-[#10BFC3] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_25px_-18px_rgba(16,191,195,0.8)] transition-transform hover:scale-[1.02]">
              Contact us
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-sky-700 xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="site-mobile-menu border-t border-slate-200 bg-white xl:hidden">
            <div className="mx-auto flex max-w-7xl flex-col p-4">
              <Link to="/about" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-sky-700 hover:bg-slate-100">About us</Link>
              <div className="px-4 py-3">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Services</div>
                <div className="grid gap-1">
                  {SERVICE_CATALOG.map((item) => (
                    <Link key={item.slug} to={`/services/${item.slug}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">{item.label}</Link>
                  ))}
                </div>
              </div>
              <Link to="/industries" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">Industries</Link>
              <Link to="/insights" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">Insights</Link>
              <Link to="/faq" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">FAQ</Link>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl border border-[#d4ad4b] px-4 py-3 text-center text-sm font-semibold text-[#10244a]">Book a Free Consultation</a>
              <a href="/contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-[#10BFC3] px-4 py-3 text-center text-sm font-semibold text-white">Contact us</a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-5 pt-32 pb-16 md:pt-36 md:pb-20">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_-40px_rgba(13,59,114,0.35)] md:p-12">
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">ABOUT US</h1>

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
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Vision",
                icon: visionIcon,
                text: "To be the trusted professional partner behind confident decisions, sustainable growth and lasting business success.",
              },
              {
                title: "Mission",
                icon: missionIcon,
                text: "To provide exceptional assurance, advisory, taxation and business solutions through professional excellence, integrity and practical insight.",
              },
              {
                title: "Approach",
                icon: approachIcon,
                text: "We take time to understand each client’s circumstances and tailor our services to meet their specific needs.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-sky-200 bg-white p-6 shadow-[0_20px_45px_-32px_rgba(13,59,114,0.35)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <img src={item.icon} alt="" aria-hidden="true" className="h-11 w-11 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-sky-100 bg-sky-50/80 p-8 md:p-12">
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">Why choose HSB</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Professional Expertise",
                icon: expertiseIcon,
                text: "Our team brings together professional knowledge and practical experience across accounting, taxation, audit/assurance, advisory, and business consultancy.",
              },
              {
                title: "Client-Focused Approach",
                icon: clientFocusIcon,
                text: "Every business is different. We take the time to understand our clients' unique circumstances, challenges, and objectives, allowing us to provide solutions that are relevant and tailored to their needs.",
              },
              {
                title: "Integrity & Independence",
                icon: integrityIcon,
                text: "We are committed to maintaining the highest standards of integrity, objectivity, and professional independence in everything we do, ensuring our clients can rely on our advice and professional judgment.",
              },
              {
                title: "Practical Business Insight",
                icon: insightIcon,
                text: "We look beyond the numbers to understand the factors influencing business performance. Our focus is on providing practical recommendations that can be implemented and create meaningful value.",
              },
              {
                title: "Confidentiality & Trust",
                icon: confidentialityIcon,
                text: "We understand the importance of protecting sensitive financial and business information. Confidentiality, discretion, and trust are fundamental to the relationships we build with our clients.",
              },
              {
                title: "Long-Term Partnership",
                icon: partnershipIcon,
                text: "We aim to be more than a service provider. By developing lasting relationships and providing ongoing guidance, we support our clients through changing business environments and towards sustainable growth.",
              },
              {
                title: "Turning Complexity into Clarity",
                icon: insightIcon,
                text: "From regulatory requirements and financial information to business challenges and risks, we help simplify complexity and provide clear, informed perspectives that give our clients greater confidence in their decisions.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
                <img src={item.icon} alt="" aria-hidden="true" className="mb-4 h-14 w-14 rounded-full object-contain" />
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Leadership Team</h2>
          <div className="mt-8 grid items-center gap-8 md:grid-cols-[minmax(220px,0.7fr)_1.3fr]">
            <img
              src={founderPhoto}
              alt="Hamsath Begam, Founder and Director"
              className="mx-auto h-auto w-full max-w-sm rounded-[2rem] object-contain object-center"
            />
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Hamsath Begam, FCA</h3>
              <p className="mt-2 text-lg font-semibold text-sky-700">Founder &amp; Director</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Fellow Chartered Accountant | ACMA | FMAAT Sri Lanka | B.Com (Special), University of Kelaniya
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 md:p-12">
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h3 className="max-w-xl text-3xl font-extrabold text-slate-900">Let’s build a clearer path for your next stage of growth.</h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#10BFC3] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:translate-y-[-1px]"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
