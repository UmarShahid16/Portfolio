export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Java Developer",
    company: "EvantageSoft Pvt. Ltd.",
    period: "July 2023 – Present",
    responsibilities: [
      "Developing backend applications using Java and Spring Boot.",
      "Designing and implementing REST APIs.",
      "Working with relational databases.",
      "Developing enterprise integrations using WSO2.",
      "Working with WSO2 API Manager and Micro Integrator.",
      "Integrating third-party and banking APIs.",
      "Implementing authentication and authorization.",
      "Optimizing backend performance.",
      "Managing and reviewing development tasks.",
      "Collaborating with clients and development teams.",
      "Leading backend development activities and ensuring timely delivery.",
    ],
  },
];
