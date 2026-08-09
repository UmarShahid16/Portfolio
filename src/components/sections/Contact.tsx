import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import {
  GitHubIcon,
  LinkedInIcon,
  UpworkIcon,
} from "@/components/ui/SocialIcons";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "View my code",
    href: siteConfig.github,
    icon: GitHubIcon,
  },
  {
    label: "Upwork",
    value: "Hire me on Upwork",
    href: siteConfig.upwork,
    icon: UpworkIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            title="Have a project in mind? Let's build it together."
            description="Whether you need a scalable backend, REST API, enterprise integration, or a complete web application, I can help turn your idea into a reliable solution."
          />
        </ScrollAnimation>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <ScrollAnimation className="lg:col-span-2" delay={0.1}>
            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={
                      link.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">
                        {link.label}
                      </p>
                      <p className="text-sm text-foreground group-hover:text-accent">
                        {link.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="lg:col-span-3" delay={0.2}>
            <ContactForm />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
