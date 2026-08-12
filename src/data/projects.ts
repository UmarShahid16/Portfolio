export interface Project {
  id: string;
  name: string;
  description: string;
  problemSolved: string;
  technologies: string[];
  features: string[];
  githubUrl: string; // TODO: Replace with your project GitHub URL
  liveDemoUrl?: string; // TODO: Replace with your live demo URL (optional)
  gradient: string;
  accentColor: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "attendance-management",
    name: "Attendance Management System",
    description:
      "A full-stack attendance management system designed to manage employees, attendance records, users, and administrative operations through a modern web interface.",
    problemSolved:
      "Streamlines employee attendance tracking and administrative workflows with a centralized, role-based platform.",
    technologies: ["Java", "Spring Boot", "Next.js", "Tailwind CSS", "MySQL"],
    features: [
      "Authentication & authorization",
      "Admin dashboard",
      "Employee management",
      "Attendance tracking",
      "Attendance reports",
      "REST APIs",
      "Responsive UI",
    ],
    githubUrl: "https://github.com/UmarShahid16/attendace_management_system-Backend", // TODO
    liveDemoUrl: "https://attendace-management-system-fronten.vercel.app/login", // TODO
    gradient: "from-blue-600/20 via-indigo-600/10 to-slate-900",
    accentColor: "text-blue-400",
  },
  {
    id: "ai-inventory-saas",
    name: "AI Inventory Management SaaS",
    description:
      "A multi-tenant AI-powered inventory management platform designed to help businesses manage products, stock, suppliers, purchases, sales, and inventory insights.",
    problemSolved:
      "Enables businesses to manage complex inventory operations at scale with AI-driven insights and multi-tenant SaaS architecture.",
    technologies: [
      "Node.js",
      "Express.js",
      "React/Next.js",
      "PostgreSQL/MySQL",
      "AI APIs",
      "Redis",
      "Docker",
    ],
    features: [
      "Multi-tenant architecture",
      "Product management",
      "Inventory tracking",
      "Stock movement",
      "Purchase management",
      "Sales management",
      "Supplier management",
      "Low-stock alerts",
      "AI-powered inventory insights",
      "Dashboard and analytics",
      "Role-based access control",
    ],
    githubUrl: "https://github.com/UmarShahid16/Inventory_Management_backend", // TODO
    liveDemoUrl: "https://inventory-management-frontend-ruddy.vercel.app/", // TODO
    gradient: "from-violet-600/25 via-purple-600/15 to-slate-900",
    accentColor: "text-violet-400",
    featured: true,
  },
  {
    id: "kpop-dance-class-booking",
    name: "K-Pop Dance Class Booking Platform",
    description:
      "A modern full-stack booking platform built to make K-Pop dance class discovery and scheduling simple, fast, and user-friendly. The platform allows visitors to explore upcoming classes, check available schedules, select a suitable session, and complete the booking process through a responsive web experience.",
    problemSolved:
      "Traditional class booking processes can be confusing and time-consuming for both customers and class organizers. This platform centralizes class schedules and bookings into one streamlined system, making it easier for users to find suitable sessions and for administrators to manage class-related operations.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Responsive Web Design",
      "Modern UI/UX",
    ],
    features: [
      "Upcoming K-Pop dance class listings",
      "Time-slot selection and booking flow",
      "User-friendly class discovery experience",
      "Booking management",
      "REST API integration",
      "Scalable full-stack architecture",
    ],
    githubUrl: "https://github.com/UmarShahid16/K-Pop_Website", // TODO
    liveDemoUrl: "https://mokup-zeta.vercel.app/",
    gradient: "from-emerald-600/20 via-teal-600/10 to-slate-900",
    accentColor: "text-emerald-400",
  },
  {
    id: "myvoucher-ecommerce-platform",
    name: "MyVoucher Ecommerce Platform",
    description:
      "A digital voucher and payment platform built to simplify voucher purchasing, transaction processing, and payment management through a secure and reliable platform. The system supports multiple payment methods and provides streamlined workflows for voucher transactions, commissions, exchange rates, and settlements.",
    problemSolved:
      "Managing voucher transactions, payment processing, commissions, and settlements across different systems can become complex and difficult to maintain. MyVoucher.io centralizes these operations into one platform, providing a seamless payment experience while simplifying transaction and financial management.",
    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "REST APIs",
      "Payment Gateway Integration",
      "Bank Alfalah",
      "JazzCash",
    ],
    features: [
      "Digital voucher management",
      "JazzCash payment gateway integration",
      "Bank Alfalah payment gateway integration",
      "Voucher purchasing and transaction processing",
      "Transaction and payment handling",
      "REST API integration",
      "Scalable full-stack architecture",
    ],
    githubUrl: "", // TODO
    liveDemoUrl: "",
    gradient: "from-emerald-600/20 via-teal-600/10 to-slate-900",
    accentColor: "text-emerald-400",
  },
  // {
  //   id: "enterprise-api-integration",
  //   name: "Enterprise API Integration Platform",
  //   description:
  //     "An enterprise integration solution connecting multiple systems and APIs through scalable integration flows and API management.",
  //   problemSolved:
  //     "Unifies disparate enterprise systems with secure, managed API integrations for banking and third-party services.",
  //   technologies: [
  //     "Java",
  //     "Spring Boot",
  //     "WSO2 API Manager",
  //     "WSO2 Micro Integrator",
  //     "REST",
  //     "SOAP",
  //     "JSON",
  //     "XML",
  //   ],
  //   features: [
  //     "API management",
  //     "API security",
  //     "Authentication",
  //     "REST/SOAP integrations",
  //     "Request/response transformation",
  //     "Enterprise integration flows",
  //     "Logging and monitoring",
  //   ],
  //   githubUrl: "https://github.com/your-username/enterprise-api-integration", // TODO
  //   gradient: "from-emerald-600/20 via-teal-600/10 to-slate-900",
  //   accentColor: "text-emerald-400",
  // },
];
