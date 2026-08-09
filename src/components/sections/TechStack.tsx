import { techCategories } from "@/data/techStack";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStack() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            label="Tech Stack"
            title="Technologies I Work With"
            description="A comprehensive toolkit for building enterprise-grade backend systems, integrations, and modern web applications."
          />
        </ScrollAnimation>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <ScrollAnimation key={category.title} delay={index * 0.08}>
                <div className="group h-full rounded-xl border border-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-xs font-medium text-muted transition-colors group-hover:border-accent/20 group-hover:text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
