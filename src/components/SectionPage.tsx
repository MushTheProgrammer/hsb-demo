import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";

type SectionPageProps = {
  title: string;
  intro: string;
  headingIcon?: string;
  children: ReactNode;
};

export function SectionPage({ title, intro, headingIcon, children }: SectionPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-6xl px-5 pb-16 pt-32 md:pt-36">
        <header className="border-b border-border pb-8">
          {headingIcon ? (
            <img src={headingIcon} alt="" aria-hidden="true" className="mb-3 h-16 w-16 object-contain" />
          ) : null}
          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">{intro}</p>
        </header>
        <div className="py-8">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}