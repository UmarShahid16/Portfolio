"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {siteConfig.availability}
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
            Full-Stack Engineer{" "}
            <span className="bg-gradient-to-r from-accent via-violet-400 to-accent bg-clip-text text-transparent">
              Backend Specialist
            </span>{" "}
            & Problem Solver.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build complete, scalable web applications using Java, Spring Boot, React, and Next.js combining powerful backend architecture with modern, responsive frontend experiences.

From designing APIs and business logic to building dashboards and user interfaces, I can handle the full development lifecycle while bringing deeper expertise to backend architecture, integrations, security, and scalability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
              <Sparkles className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Let&apos;s Work Together
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
