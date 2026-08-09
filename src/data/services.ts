import {
  Database,
  Layers,
  Layout,
  Plug,
  Server,
  Shield,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Backend Development",
    description:
      "Scalable backend applications using Java and Spring Boot.",
    icon: Server,
  },
  {
    title: "REST API Development",
    description: "Secure, well-structured and documented REST APIs.",
    icon: Shield,
  },
  {
    title: "API Integration",
    description:
      "Integration with third-party, banking, payment, and enterprise APIs.",
    icon: Plug,
  },
  {
    title: "WSO2 Integration",
    description:
      "API management and enterprise integration using WSO2.",
    icon: Layers,
  },
  {
    title: "Full Stack Development",
    description:
      "Modern web applications using React, Next.js, Java/Spring Boot.",
    icon: Layout,
  },
  {
    title: "Database & Performance Optimization",
    description:
      "Database design, query optimization, indexing and backend performance improvements.",
    icon: Database,
  },
];
