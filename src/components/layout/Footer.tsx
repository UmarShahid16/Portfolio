import { siteConfig } from "@/config/site";
import {
  GitHubIcon,
  LinkedInIcon,
  UpworkIcon,
} from "@/components/ui/SocialIcons";

const socialLinks = [
  { label: "GitHub", href: siteConfig.github, icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedInIcon },
  { label: "Upwork", href: siteConfig.upwork, icon: UpworkIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-muted">{siteConfig.role}</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg p-2 text-muted transition-colors hover:bg-surface-hover hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-8 text-center">
          <p className="text-sm text-muted">
            &copy; 2026 {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
