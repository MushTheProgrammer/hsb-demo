import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  return (
    <SectionPage title="Careers" intro="Build a meaningful career with a professional team committed to integrity, quality, and lasting client relationships.">
      <section className="max-w-3xl border border-border bg-card p-6 md:p-8">
        <h2 className="text-2xl font-bold">No current openings</h2>
        <p className="mt-4 leading-7 text-muted-foreground">We do not have any vacancies at the moment. Please check this page again for future opportunities.</p>
        <p className="mt-4 leading-7 text-muted-foreground">For general career enquiries, contact <a className="font-semibold text-[#000081] underline" href="mailto:hsbcorporateservices@gmail.com">hsbcorporateservices@gmail.com</a>.</p>
      </section>
    </SectionPage>
  );
}