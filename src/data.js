import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";

export const filters = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Full Stack",
    id: "fullstack",
  },
  {
    name: "Frontend",
    id: "frontend",
  },
  {
    name: "AI/ML",
    id: "ai",
  },
];

export const projects = [
  {
    name: "LinkSaver",
    image: p1,
    tags: ["fullstack", "website"],
    link: "https://linksaver.in",
    description: "A high-performance resource manager with nested folders, drag-and-drop organization, treemap visualization, notes, and Chrome extension support—built with React and Go, plus OAuth and multi-profile workflows.",
    tech: ["Bun", "React", "Redux", "PostgreSQL", "GoLang", "Docker", "JWT"]
  },
  {
    name: "Cognize",
    image: p2,
    tags: ["fullstack", "website"],
    link: "https://cognize.live/",
    description: "A lightweight lead-management tool with auto-summaries and lifecycle tagging to streamline sales processes, plus scraper-integrated APIs and a drag-and-drop UI.",
    tech: ["Bun.js", "TypeScript", "Next.js", "Zustand", "GoLang", "PostgreSQL", "AWS"]
  },
  {
    name: "Picstone",
    image: p3,
    tags: ["ai", "fullstack", "website"],
    link: "https://picstone-generative-ai.vercel.app/",
    description: "An interactive storytelling platform using image analysis. With 180K+ event registrations, 9K+ users engaged, 80K+ views, and an average engagement time of 4 minutes and 42 seconds. Ranked top 5 in Generative AI hackathon.",
    tech: ["Flask", "React", "MySQL", "Google Auto Tagging"]
  },
  {
    name: "CustomCV",
    image: p4,
    tags: ["ai", "fullstack", "website"],
    link: "https://customcv.vercel.app/",
    description: "An AI-powered web app that generates personalized, job-specific cover letters from user profiles and job descriptions—built with scalable class-based architecture.",
    tech: ["TypeScript", "MongoDB", "Node.js", "Express", "Flask", "AWS", "Framer"]
  },
  {
    name: "Pixisphere",
    image: p6,
    tags: ["frontend", "website"],
    link: "https://pixisphere-drab.vercel.app/",
    description: "A creative image manipulation and visualization platform.",
    tech: ["React", "Next.js", "TailwindCSS"]
  },
  {
    name: "Gemini Clone",
    image: p5,
    tags: ["ai", "frontend", "clone"],
    link: "https://gemini-clone-vert-ten.vercel.app/",
    description: "A functional clone of Google's Gemini AI interface with real-time chat capabilities.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS"]
  },
];

export const achievements = [
  {
    id: 1,
    year: 50,
    description: "PROJECTS<br />COMPLETED",
  },
  {
    id: 2,
    year: 2,
    description: "INTERNSHIPS<br />COMPLETED",
  },
  {
    id: 3,
    year: 35,
    description: "TECHNOLOGIES<br />MASTERED",
  },
  {
    id: 4,
    year: 180,
    description: " EVENT<br />REGISTRATIONS",
  },
];

export const experiences = [
  {
    id: 1,
    company: "Xelron AI",
    role: "Software Engineer",
    period: "February 2026 - Present",
    location: "Remote · Full-time",
    achievements: [
      "Design and implement end-to-end AI evaluation systems, including backend services, execution pipelines, and data flow orchestration",
      "Build and manage Docker-based infrastructure to enable scalable, reproducible, and isolated system execution",
      "Develop automated testing frameworks in Python, improving validation accuracy, reducing manual effort, and increasing system reliability",
      "Optimize pipeline performance and integrate internal APIs, ensuring efficient execution, seamless system communication, and production-grade reliability"
    ]
  },
  {
    id: 2,
    company: "CodeFeast",
    role: "Software Developer",
    period: "December 2025 - February 2026",
    location: "Remote · Intern",
    achievements: [
      "Led frontend development for client-facing and dashboard modules using React.js and Next.js, building reusable and scalable component architectures",
      "Developed interactive dashboards with real-time data handling, implementing structured state management to ensure stable performance under continuous user interaction",
      "Optimized rendering performance through memoization, component splitting, and efficient state updates, improving UI responsiveness across core workflows",
      "Integrated REST APIs with proper error handling, loading states, and optimistic updates to enhance user experience",
      "Collaborated with backend and design teams to ensure API alignment, UI consistency, and maintainable frontend architecture across projects"
    ]
  },
  {
    id: 3,
    company: "QriosX",
    role: "Frontend Developer",
    period: "September 2025 - November 2025",
    location: "Remote · Intern",
    achievements: [
      "Developed the marketing landing page using Next.js, leveraging SSR and optimized routing for improved SEO and faster initial load performance",
      "Built and maintained the core product dashboard using React.js, implementing reusable components and modular architecture for scalability",
      "Converted Figma designs into pixel-perfect, fully responsive interfaces using Tailwind CSS with strict attention to spacing, typography, and layout consistency",
      "Integrated REST APIs with proper loading states, error handling, and efficient state management to ensure smooth user interaction across the application"
    ]
  }
];

export const skillCategories = [
  {
    category: "Software Development",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "MySQL", "Prisma", "Zustand", "Redux", "Tailwind CSS", "SCSS", "Optimistic UI Rendering", "Data Structures & Algorithms"]
  },
  {
    category: "Design-to-Code",
    skills: ["Figma (Design Handoff)", "Responsive Design", "Component-Based Architecture", "UI/UX Implementation", "Performance Optimization", "Pixel-Perfect Layouts"]
  },
  {
    category: "Dev Tools & Deployment",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "Postman", "AWS (EC2, EBS)"]
  },
  {
    category: "Additional",
    skills: ["Microservices (REST-based)", "API Integration", "Agile Development", "Clean Code", "Performance Optimization"]
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Hourly Rate",
    price: "$12",
    period: "hour",
    description: "Flexible hourly billing for ongoing projects and consultations",
    features: [
      "Pay only for hours worked",
      "Flexible scheduling",
      "Real-time progress updates",
      "Minimum 10 hours",
      "Weekly time reports",
      "Direct communication"
    ],
    featured: false,
    link: "#contact",
    buttonText: "Get Started"
  },
  {
    id: 2,
    name: "Basic",
    price: "$500",
    period: "project",
    description: "Perfect for small projects and simple websites",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "1 revision round",
      "Email support"
    ],
    featured: false,
    link: "#contact",
    buttonText: "Get Started"
  },
  {
    id: 3,
    name: "Professional",
    price: "$1,500",
    period: "project",
    description: "Ideal for medium-sized projects with advanced features",
    features: [
      "Up to 15 pages",
      "Custom design",
      "Advanced SEO",
      "3 revision rounds",
      "Performance optimization",
      "Database integration",
      "Priority support"
    ],
    featured: true,
    link: "#contact",
    buttonText: "Get Started"
  },
  {
    id: 4,
    name: "Enterprise",
    price: "Custom",
    period: null,
    description: "Tailored solutions for large-scale applications",
    features: [
      "Unlimited pages",
      "Full-stack development",
      "Microservices architecture",
      "Unlimited revisions",
      "24/7 support",
      "CI/CD setup",
      "Cloud deployment",
      "Dedicated project manager"
    ],
    featured: false,
    link: "#contact",
    buttonText: "Contact Us"
  }
];
