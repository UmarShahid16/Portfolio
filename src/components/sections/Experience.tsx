import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            label="Experience"
            title="Professional Journey"
            description="Building enterprise backend systems and integrations in a professional development environment."
          />
        </ScrollAnimation>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent md:left-8" />

          {experience.map((item, index) => (
            <ScrollAnimation key={item.company} delay={index * 0.15}>
              <div className="relative pb-12 pl-16 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-background md:left-6">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                <div className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-accent">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{item.company}</span>
                      </div>
                    </div>
                    <span className="rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm text-muted">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
