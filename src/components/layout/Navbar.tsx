"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2 text-left"
          aria-label="Go to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent transition-colors group-hover:bg-accent/20">
            US
          </span>
          <span className="hidden font-semibold text-foreground sm:block">
            {siteConfig.name}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => handleNavClick("#contact")}
          >
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-muted transition-colors hover:bg-surface-hover hover:text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-[65px] z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors",
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-surface-hover hover:text-foreground",
                  )}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          <li className="mt-4">
            <Button
              className="w-full"
              onClick={() => handleNavClick("#contact")}
            >
              Let&apos;s Talk
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
