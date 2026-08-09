import { processSteps } from "@/data/process";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            label="Development Process"
            title="How I Deliver Quality Projects"
            description="A structured approach ensuring every project is well-planned, thoroughly tested, and built for the long term."
          />
        </ScrollAnimation>

        <div className="relative">
          {/* Desktop connector */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollAnimation key={step.step} delay={index * 0.08}>
                  <div className="group relative text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface/60 text-accent backdrop-blur-sm transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-semibold text-foreground">{step.step}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
