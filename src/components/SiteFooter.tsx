import { Link } from "@tanstack/react-router";
import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import logo from "@/assets/HSB_LOGO_WORDMARK.png";
import { SERVICE_CATALOG } from "@/lib/service-data";

const COMPANY_NAME = "HSB Consulting & Corporate Services (Pvt) Ltd.";

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer border-t py-10">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 sm:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1.2fr_1.2fr]">
        <div>
          <img src={logo} alt={COMPANY_NAME} className="h-auto w-[180px] object-contain object-center" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
            {COMPANY_NAME} delivers practical accounting, tax, secretarial, payroll and advisory
            support built on integrity, professionalism and lasting client trust.
          </p>
        </div>
        <div>
          <p className="font-display font-bold text-slate-900">Services</p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600">
            {SERVICE_CATALOG.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/services/${item.slug}`}
                  className="transition-colors hover:text-sky-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display font-bold text-slate-900">Contact</p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-sky-700" />
              <a href="tel:0707999939" className="transition-colors hover:text-sky-700">
                070-7999939
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-sky-700" />
              <a href="mailto:hsbcorporateservices@gmail.com" className="transition-colors hover:text-sky-700">
                hsbcorporateservices@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-sky-700" />
              <span>C1/3/5, Forbes Lane, Maradana, Colombo 10</span>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            {[
              { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/HSB-Consulting-Corporate-Services-Pvt-Ltd/61594383479606/" },
              { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/hsb.consulting?stkn=MXd1bG5vMGVpcWhkMQ==&utm_source=ig_contact_invite" },
              { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/hsb-consulting-corporate-services-pvt-ltd/" },
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
              title={`${COMPANY_NAME} location map`}
              src="https://www.google.com/maps?q=C1%2F3%2F5%2C%20Forbes%20Lane%2C%20Maradana%2C%20Colombo%2010&output=embed"
              className="h-32 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-5 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} {COMPANY_NAME}
      </div>
      </footer>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-24 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <a
        href="https://wa.me/94707999939"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp: +94 70 799 9939"
        className="fixed bottom-5 right-5 z-50 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <img src="/WhatsAppButtonGreenLarge.svg" alt="Chat on WhatsApp" className="h-auto w-52 max-w-[calc(100vw-2.5rem)]" />
      </a>
    </>
  );
}
