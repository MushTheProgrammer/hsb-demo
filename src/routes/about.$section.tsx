import { createFileRoute } from "@tanstack/react-router";
import expertiseIcon from "@/assets/why-expertise.png";
import clientFocusIcon from "@/assets/why-client-focus.png";
import integrityIcon from "@/assets/why-integrity.png";
import insightIcon from "@/assets/why-insight.png";
import confidentialityIcon from "@/assets/why-confidentiality.png";
import partnershipIcon from "@/assets/why-partnership.png";
import visionIcon from "@/assets/vision.png";
import missionIcon from "@/assets/mission.png";
import approachIcon from "@/assets/approach.png";
import founderPhoto from "@/assets/img/found.jpg";
import { SectionPage } from "@/components/SectionPage";

export const Route = createFileRoute("/about/$section")({
  component: AboutSectionPage,
});

const reasons = [
  {
    title: "Professional Expertise",
    text: "Our team brings together professional knowledge and practical experience across accounting, taxation, audit and assurance, advisory, and business consultancy.",
    icon: expertiseIcon,
  },
  {
    title: "Client-Focused Approach",
    text: "We take time to understand each client's circumstances, challenges, and objectives, then tailor our services to their needs.",
    icon: clientFocusIcon,
  },
  {
    title: "Integrity & Independence",
    text: "We maintain high standards of integrity, objectivity, and professional independence so clients can rely on our advice.",
    icon: integrityIcon,
  },
  {
    title: "Practical Business Insight",
    text: "We look beyond the numbers to provide clear, practical recommendations that can be implemented and create value.",
    icon: insightIcon,
  },
  {
    title: "Confidentiality & Trust",
    text: "Confidentiality, discretion, and trust are fundamental to every relationship we build with our clients.",
    icon: confidentialityIcon,
  },
  {
    title: "Long-Term Partnership",
    text: "We provide ongoing guidance as businesses navigate change and pursue sustainable growth.",
    icon: partnershipIcon,
  },
];

function AboutSectionPage() {
  const { section } = Route.useParams();

  if (section === "why-choose-us") {
    return (
      <SectionPage title="Why Choose Us" intro="Professional expertise, independent perspective, and practical insight to help businesses move forward with confidence.">
        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map(({ title, text, icon }) => (
            <section key={title} className="border border-border bg-card p-6">
              <img src={icon} alt="" aria-hidden="true" className="mb-4 h-14 w-14 rounded-full object-contain" />
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
            </section>
          ))}
        </div>
      </SectionPage>
    );
  }

  if (section === "leadership") {
    return (
      <SectionPage title="Leadership Team" intro="Meet the professional leadership behind HSB Consulting & Corporate Services.">
        <section className="grid items-center gap-8 md:grid-cols-[minmax(220px,0.7fr)_1.3fr]">
          <img src={founderPhoto} alt="Hamsath Begam, Founder and Director" className="mx-auto h-auto w-full max-w-sm rounded-[2rem] object-contain" />
          <div>
            <h2 className="text-2xl font-bold">Hamsath Begam, FCA</h2>
            <p className="mt-2 text-lg font-semibold text-sky-700">Founder &amp; Director</p>
            <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
              Fellow Chartered Accountant | ACMA | FMAAT Sri Lanka | B.Com (Special), University of Kelaniya
            </p>
            <div className="mt-4 max-w-2xl space-y-4 leading-7 text-muted-foreground">
              <p>Hamsath Begam, FCA is a Fellow Member of the Institute of Chartered Accountants of Sri Lanka, an Associate Member of the Institute of Certified Management Accountants of Sri Lanka, and a Fellow Member of the Association of Accounting Technicians of Sri Lanka. She holds a Bachelor of Commerce (Special) degree from the University of Kelaniya.</p>
              <p>With over 20 years of professional experience in accounting, auditing and finance, she brings broad cross-sector expertise spanning private enterprises, government institutions and non-governmental organisations (NGOs), with exposure to industries including apparel, e-commerce, power generation, freight forwarding, pharmaceuticals, plantations and agriculture, manufacturing, education, retail and trading.</p>
              <p>Her professional experience encompasses internal audit, financial reporting, accounting, internal controls, risk management, audit and assurance, compliance and business advisory services. She has worked closely with management and key stakeholders in evaluating business processes, strengthening internal controls, identifying and managing risks, and providing practical recommendations to support effective decision-making and sustainable business performance.</p>
              <p>She has also contributed to the work of the National Finance Commission of the Sri Lanka Red Cross Society, serving as an Advisory Member from June 2016 to 2018.</p>
              <p>Through HSB Consulting &amp; Corporate Services (Pvt) Ltd, she is committed to delivering professional, practical and timely solutions that bring clarity to complexity, confidence to decisions, and value to every engagement.</p>
            </div>
          </div>
        </section>
      </SectionPage>
    );
  }

  return (
    <SectionPage title="About the company" intro="At HSB, we believe professional services are about understanding businesses, building trusted relationships, and providing the insight and confidence our clients need to make better decisions.">
      <div className="max-w-4xl space-y-6 text-lg leading-8 text-muted-foreground">
        <p>In an increasingly complex and competitive business environment, organisations need more than technical expertise. They need a professional partner who understands their challenges, sees beyond the numbers, identifies risks and opportunities, and provides practical solutions that create lasting value.</p>
        <p>HSB brings together professional expertise, independent perspective, and practical business insight across assurance, accounting, taxation, secretarial services, internal audit and assurance, risk management, advisory, and business consultancy.</p>
        <p>Our approach is built on integrity, professional excellence, independence, confidentiality, and client focus. We take time to understand each client's circumstances and tailor our services to their specific needs.</p>
        <p>We aim not merely to identify what has happened, but to help our clients understand why it happened, what it means, and what can be done better. We seek to become a trusted professional partner in our clients' journey towards stronger governance, improved performance, sustainable growth, and long-term success.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["Vision", "To be the trusted professional partner behind confident decisions, sustainable growth and lasting business success.", visionIcon],
          ["Mission", "To provide exceptional assurance, advisory, taxation and business solutions through professional excellence, integrity and practical insight.", missionIcon],
          ["Approach", "We take time to understand each client's circumstances and tailor our services to meet their specific needs.", approachIcon],
        ].map(([heading, text, icon]) => (
          <section key={heading} className="border border-border bg-card p-6">
            <img src={icon} alt="" aria-hidden="true" className="mb-3 h-12 w-12 object-contain" />
            <h2 className="text-xl font-bold">{heading}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
          </section>
        ))}
      </div>
    </SectionPage>
  );
}