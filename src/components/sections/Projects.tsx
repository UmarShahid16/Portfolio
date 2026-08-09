"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { projects, type Project } from "@/data/projects";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "relative flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br md:h-56",
        project.gradient,
      )}
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {project.featured && (
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-300">
          <Sparkles className="h-3 w-3" />
          Featured Project
        </div>
      )}

      <div className="relative text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="text-2xl font-bold text-white/90">
            {project.name.charAt(0)}
          </span>
        </div>
        <p className={cn("text-sm font-medium", project.accentColor)}>
          {project.technologies.slice(0, 3).join(" · ")}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollAnimation delay={index * 0.1}>
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/40 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5",
          project.featured && "lg:col-span-2",
        )}
      >
        <div className="p-5 pb-0 md:p-6 md:pb-0">
          <ProjectVisual project={project} />
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="text-xl font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-4 rounded-lg border border-border/60 bg-background/30 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">
              Problem Solved
            </p>
            <p className="mt-1 text-sm text-muted">{project.problemSolved}</p>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
              Key Features
            </p>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {project.features.slice(0, 6).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/60 bg-surface/60 px-2 py-0.5 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 pt-2">
            <Button
              variant="secondary"
              size="sm"
              href={project.githubUrl}
              external
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Button>
            {project.liveDemoUrl && (
              <Button
                variant="outline"
                size="sm"
                href={project.liveDemoUrl}
                external
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </article>
    </ScrollAnimation>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            label="Featured Projects"
            title="Projects That Showcase My Expertise"
            description="Real-world applications demonstrating backend architecture, API integrations, and full-stack development capabilities."
          />
        </ScrollAnimation>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
