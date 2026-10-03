import { createFileRoute } from "@tanstack/react-router";
import eventsIcon from "@/assets/events.png";
import articlesIcon from "@/assets/articles.png";
import newsIcon from "@/assets/news-updates.png";
import { SectionPage } from "@/components/SectionPage";

export const Route = createFileRoute("/insights/$section")({
  component: InsightSectionPage,
});

const insightSections: Record<string, { title: string; intro: string; detail: string; icon: string }> = {
  events: {
    title: "Events",
    intro: "Workshops, sessions and events from HSB.",
    detail: "There are no upcoming events to announce at this time. Check back for future workshops and sessions.",
    icon: eventsIcon,
  },
  articles: {
    title: "Articles",
    intro: "Practical perspectives on accounting, tax, governance and business.",
    detail: "New articles and professional perspectives will be shared here as they become available.",
    icon: articlesIcon,
  },
  news: {
    title: "News and Updates",
    intro: "HSB announcements and relevant regulatory updates.",
    detail: "There are no current announcements. Visit again for HSB news and relevant business updates.",
    icon: newsIcon,
  },
};

function InsightSectionPage() {
  const { section } = Route.useParams();
  const content = insightSections[section] ?? insightSections.events;

  return (
    <SectionPage title={content.title} intro={content.intro} headingIcon={content.icon}>
      <section className="max-w-3xl border-l-4 border-[#000081] bg-card px-6 py-5">
        <p className="leading-7 text-muted-foreground">{content.detail}</p>
      </section>
    </SectionPage>
  );
}