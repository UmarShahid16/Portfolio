import { benefits } from "@/data/whyWorkWithMe";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyWorkWithMe() {
  return (
    <section id="why-me" className="section-padding bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            label="Why Work With Me"
            title="Partner With a Developer Who Delivers Results"
            description="Beyond technical skills — here's what you gain when we work together."
          />
        </ScrollAnimation>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollAnimation key={benefit.title} delay={index * 0.06}>
                <div className="group h-full rounded-xl border border-border bg-surface/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {benefit.description}
                  </p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
