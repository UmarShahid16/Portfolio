/**
 * Site configuration — update these placeholders with your real links.
 */
export const siteConfig = {
  name: "Umar Shahid",
  title: "Umar Shahid | Java Developer | Backend & Full Stack",
  description:
    "Java Developer specializing in Spring Boot, REST APIs, enterprise integrations, and full-stack web development. Full-Stack Developer. Backend Specialist. Problem Solver..",
  url: "https://your-portfolio-url.com", // TODO: Replace with your deployed URL
  ogImage: "/og-image.png", // TODO: Add your Open Graph image

  email: "umarshahid7558@gmail.com", // TODO: Replace with your email
  linkedin: "https://www.linkedin.com/in/umar-shahid-682536223/", // TODO: Replace with your LinkedIn
  github: "https://github.com/UmarShahid16", // TODO: Replace with your GitHub
  upwork: "https://www.upwork.com/freelancers/~014e3622e53b3fa690", // TODO: Replace with your Upwork

  availability: "Available for freelance & remote opportunities",
  role: "Full Stack Engineer | Java • Spring Boot • Next.js",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;
