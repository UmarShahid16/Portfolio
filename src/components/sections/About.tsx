import { stats } from "@/data/whyWorkWithMe";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-padding bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            label="About Me"
            title="Crafting Reliable Solutions for Real Business Problems"
            align="left"
          />
        </ScrollAnimation>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <ScrollAnimation className="lg:col-span-3" delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
              <p>
                I'm a Full Stack Engineer with 3+ years of professional experience building scalable web applications,
                 reliable backend systems, REST APIs, and enterprise integrations.
              </p>
              <p>
                I work across the full application stack, from building responsive and modern user interfaces with React and Next.js to developing robust backend services using Java and Spring Boot.
                 I also have experience with SQL databases, WSO2 integration technologies, API management, authentication, and distributed systems.
              </p>
              <p>
                I focus on building clean, maintainable, and scalable solutions with a strong emphasis on performance, security, and user experience.
                 Whether it's a complete web application, a complex backend system, or integrating multiple services and APIs, I enjoy turning business requirements
                  into reliable, production-ready software.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="lg:col-span-2" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group rounded-xl border border-border bg-surface/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-2xl font-bold text-foreground md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
