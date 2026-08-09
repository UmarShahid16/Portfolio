import {
  Code2,
  Database,
  Globe,
  Layers,
  MessageSquare,
  Monitor,
  Server,
  type LucideIcon,
} from "lucide-react";

export interface TechCategory {
  title: string;
  icon: LucideIcon;
  technologies: string[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Backend",
    icon: Server,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "Node.js",
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Integration & API Management",
    icon: Layers,
    technologies: [
      "WSO2 API Manager",
      "WSO2 Micro Integrator",
      "WSO2 Integration Studio",
      "REST",
      "SOAP",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    technologies: ["MySQL", "Oracle", "SQL Server", "PostgreSQL", "MongoDB", "Superbase"],
  },
  {
    title: "DevOps & Infrastructure",
    icon: Code2,
    technologies: ["Docker", "Git", "Bitbucket", "CI/CD"],
  },
  {
    title: "Messaging & Caching",
    icon: MessageSquare,
    technologies: ["Kafka", "RabbitMQ", "Redis"],
  },
];
