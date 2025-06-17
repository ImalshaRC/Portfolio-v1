import sliit from "../assets/company/sliit.png";
import school from "../assets/company/rahula-school.png";
import expernetic from "../assets/company/expernetic.png";
import rapidM3 from "../assets/company/rapidm3.png";
import soniclabs from "../assets/company/soniclabs.jpg";

import BbPortal1 from "../assets/projects/bbportal/bbPortal1.png";
import BbPortal2 from "../assets/projects/bbportal/bbPortal2.png";
import BbPortal3 from "../assets/projects/bbportal/bbPortal3.png";
import BbPortal4 from "../assets/projects/bbportal/bbPortal4.png";
import BbPortal5 from "../assets/projects/bbportal/bbPortal5.png";

import cc51 from "../assets/projects/cc5/cc51.png";
import cc52 from "../assets/projects/cc5/cc52.png";

import Aquinas from "../assets/projects/aquinas.png";
import Iaesl from "../assets/projects/iaesl.png";
import Iimaesl from "../assets/projects/iimaesl.png";

import defaltImage from "../assets/projects/default.jpg";

const education = [
  {
    degree:
      "BSc (Hons) in Information Technology Specialising in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology, Malabe",
    date: "2020 - 2023",
    icon: sliit,
    points: ["Graduated with honors.", "Specialized in Software Engineering."],
  },
  {
    degree: "G.C.E. Advanced Level - Rahula National School, Godakawela  ",
    institution: " Z-Score - 0.5569 ",
    date: "2011 - 2018",
    icon: school,
    points: ["Combined Mathematics - C", "Physics - C", "Chemistry - C"],
  },
];

const experiences = [
  {
    title: "Software Engineer (Full Stack)",
    company_name: "Sonic Labs",
    icon: soniclabs,
    iconBg: "#383E56",
    date: "November 2024 - Present",
    points: [
      "Working directly with UK clients on full-stack projects using .NET Core and React.",
      "Designed and supported a multi-tenant admin portal, ensuring scalability and high availability.",
      "Implemented multi-provider authentication using OAuth 2.0 protocols for Microsoft, Google, and RM Unify integration, enabling secure enterprise sign-in options.",
      "Collaborated closely with UK-based client to manage feature rollouts, technical planning, and production releases.",
      "Collaborated with design teams to ensure creative and user-friendly UI/UX.",
      "Led project planning sessions and requirement discussions with clients.",
      "Handled project handovers and mentored maintenance teams for smooth transitions.",
      "Participated actively in client meetings, ensuring alignment with deadlines and expectations.",
      "Utilized Azure Functions for scalable background processing and event-driven operations.",
      "Tech Stack: .NET Core, React (TypeScript), Azure Functions, Azure App Services, Microsoft Graph API, OAuth 2.0, SQL Server",
      "Projects: Broadband Portal (UK Project), RM Community Connect (CC5) (UK Project)",
    ],
  },
  {
    title: "Associate Software Engineer (Full Stack)",
    company_name: "Expernetic Pvt Ltd.",
    icon: expernetic,
    iconBg: "#E6DEDD",
    date: "May 2024 - November 2024",
    points: [
      "Managed CI/CD pipelines using Azure DevOps Services to ensure seamless integration and deployment processes.",
      "Integrated Duende Identity Server for enhanced authentication and authorization, ensuring robust security and seamless user management within the application.",
      "Developed and maintained web applications using ASP.NET Core with CLEAN architecture and CQRS pattern, ensuring high performance and scalability.",
      "Worked with Dapper ORM for efficient data access and manipulation.",
      "Integrated Redux Toolkit for state management in complex client-side applications.",
      "Tech Stack: ASP.NET Core, React (TS), MS SQL, Azure DevOps, Duende Identity Server, Dapper ORM, CQRS, CLEAN Architecture, Redux Toolkit",
      "Projects: Testing Automation App (Web Application for QA), Centralized Identity Management System (Duende Identity Server), Admin Portal for QA application",
    ],
  },
  {
    title: "Trainee Software Engineer (Full Stack)",
    company_name: "Expernetic Pvt Ltd.",
    icon: expernetic,
    iconBg: "#E6DEDD",
    date: "December 2023 - May 2024",
    points: [
      "Integrated Stripe payment gateway into a QA and testing application, streamlining payment processing.",
      "Developed and maintained web applications using ASP.NET Core with CLEAN architecture and CQRS pattern, ensuring high performance and scalability.",
      "Worked with Dapper ORM for efficient data access and manipulation.",
      "Integrated Redux for state management in complex client-side applications.",
      "Tech Stack: ASP.NET Core, React (TS), MS SQL, Azure DevOps, Stripe Payment Gateway, Dapper ORM, CQRS, CLEAN Architecture, Redux, Entity Framework (EF)",
      "Projects: Testing Automation Application (Web Application for QA)",
    ],
  },
  {
    title: "Intern Software Engineer (Full Stack)",
    company_name: "Rapid M3 Pvt. Ltd.",
    icon: rapidM3,
    iconBg: "#E6DEDD",
    date: "January 2023 - June 2023",
    points: [
      "Collaborated with a cross-functional team under senior developers.",
      "Developed and maintained large-scale student management systems handling comprehensive academic and administrative workflows.",
      "Managed CI/CD pipelines within Bitbucket, handling version control, automating deployments, and using Jira for project tracking and issue management to ensure efficient software delivery.",
      "Practiced agile development practices. ",
      "Tech Stack: React (TS), AngularJS, Spring Boot, MySQL",
      "Projects: Aquinas College Student Management System, Viyathnena, IAESL App",
    ],
  },
];

const projects = [
  {
    title: "BroadBand Portal (UK Project)",
    description:
      "Developed a web-based network management portal with hierarchical multi-tenant architecture supporting 2-level tenant nesting with third-party cross-tenant access capabilities using .NET Core, React (TS), Shadcn/UI, and Tailwind CSS. The application allows admins to manage user IPs, DNS configurations, VPN management, firewall rules and monitor real-time network activity through dynamic dashboards. Integrated with internal APIs and supports secure logins via Google, RM Portal, and Azure authentication. Additionally, we used Graylog with Lucene query filtering, and Apache Superset for dashboard integration.",
    tags: [
      ".Net core",
      "React",
      "TypeScript",
      "SQL Server",
      "Azure Ci CD",
      "Azure Boards",
    ],
    Category: "Sonic Labs Project",
    images: [BbPortal1, BbPortal2, BbPortal3, BbPortal4, BbPortal5],
  },
  {
    title: "RM Community Connect (CC5) (UK Project)",
    description:
      "Developed a multi-tenant admin portal for UK-based school resource management, built with .NET Core, React (TS), Microsoft Graph API, Azure services, Microsoft Intune and Microsoft Entra. The platform allows school administrators to manage users, devices, roles, licenses, and policies across Microsoft Teams and Azure groups. Integrated with Microsoft Graph API for handling license assignments and role-based access.",
    tags: [
      ".Net core",
      "React",
      "TypeScript",
      "SQL Server",
      "Azure Ci CD",
      "Azure Boards",
      "Microsoft Graph API",
      "Microdoft Entra",
    ],
    Category: "Sonic Labs Project",
    images: [cc51, cc52],
  },
  {
    title: "Duende Identity Server",
    description:
      "Developed a standalone identity management system using Duende Identity Server with clean architecture principles. Implemented secure authentication and authorization with OAuth 2.0/OpenID Connect protocols, role-based access control. Built with ASP.NET Core Identity, Entity Framework Core, and MediatR for centralized permission validation.",
    tags: [
      ".Net core",
      "React",
      "TypeScript",
      "Duende IS",
      "CLEAN Architecture",
      "SQL Server",
      "EF Core",
      "Azure DevOps",
    ],
    Category: "Expernetic Project",
    images: [defaltImage],
  },
  {
    title: "Testing Automation Application (Web App for QA Developers)",
    description:
      "Developed a robust, enterprise-grade software testing platform featuring advanced test management capabilities, including end-to-end workflows for test case creation, execution, and reporting. The platform supports milestone tracking, release management, and full requirements traceability throughout the testing lifecycle. It includes automated test orchestration and issue resolution workflows, along with integrated authentication and role-based access control via Duende Identity Server. Additionally, Stripe was implemented to manage subscriptions, support multiple pricing tiers, and handle automated billing cycles. The system was architected using ASP.NET Core, adhering to CLEAN architecture principles and the CQRS pattern for scalable, maintainable design.",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "ASP.NET Core",
      "CLEAN Architecture",
      "CQRS",
      "Dapper ORM",
      "Stripe Payment Gateway",
      "Duende Identity Server",
      "Azure DevOps",
    ],
    Category: "Expernetic Project",
    images: [defaltImage],
  },
  {
    title: "Aquinas College Main Web Application",
    description:
      "Developed a comprehensive student-facing web application featuring course registration, integrated payment processing, and an intuitive student dashboard. The application streamlines the entire student enrollment process and provides a centralized platform for academic management.",
    tags: ["AngularJS", "NestJS", "MySQL", "BitBucket", "Jira"],
    Category: "Rapid M3 Project",
    images: [Aquinas],
  },
  {
    title: "Viyathnena University Web Application",
    description:
      "A child healthcare application that facilitates interviews with parents, coaches, and children to provide instructions and guidance, integrating various technologies to analyze interviews and verify that meetings adhere to company policies.",
    tags: ["React (TS)", "Spring Boot", "MySQL", "BitBucket", "Jira"],
    Category: "Rapid M3 Project",
    images: [defaltImage],
  },
  {
    title: "IAESL Web Application",
    description:
      "Built the main web application for the Institute of Automotive Engineers, featuring comprehensive member registration, subscription management, and automated report generation capabilities. The application serves as the primary digital platform for the institute's member services and administrative functions.",
    tags: ["AngularJS", "NestJS", "MySQL", "BitBucket", "Jira"],
    Category: "Rapid M3 Project",
    images: [Iaesl],
  },
  {
    title: "IIMAESL Web Application",
    description:
      "This is the main web application of the IIMAESL. With this, assessors can register to the system, request membership, upgrade membership etc. Through this system, the admin can do things like member inquiry & payment management, membership upgrade management.",
    tags: ["AngularJS", "NestJS", "MySQL", "BitBucket", "Jira"],
    Category: "Rapid M3 Project",
    images: [Iimaesl],
  },
];

const certifications = [
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2023-NOV-30",
    description: "It covers topics like React, CSS, and JavaScript.",
    image: [], // replace with the actual path or link to the certificate image
  },
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "2023-NOV-30",
    description:
      "It covers basic topics in Java language such as data structures, inheritance, exception handling.",
    image: [], // replace with the actual path or link to the certificate image
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2023-NOV-30",
    description: "It includes simple queries, relationships, and aggregators.",
    image: [], // replace with the actual path or link to the certificate image
  },
];

export { education, experiences, projects, certifications };
