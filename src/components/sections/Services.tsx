import { services } from "@/data/services";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="section-padding bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            label="Services"
            title="How I Can Help Your Business"
            description="From backend architecture to enterprise integrations — I deliver solutions that solve real business problems."
          />
        </ScrollAnimation>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation key={service.title} delay={index * 0.08}>
                <div className="group h-full rounded-xl border border-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
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
